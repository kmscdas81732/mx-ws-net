import * as pbjs from "../libs/message.pb"
import { ToUint8Arr, Utf8ArrayToStr, decodeWS, encodeWS } from "./coder"
import { EventEmitter } from './event'
import { IMessageManager, MessageManager } from "./manager"
import { MessageUnit } from "./message"

export interface ConnectOptions {
    // 认证用的密钥
    token?: string | undefined;
    // 等待的回调
    proccesing?: ((e: {
        self: number;
        total: number;
    }) => void) | undefined;
    // 是否愿意接受排队等待
    waiting?: boolean | undefined;
    // 等待信息刷新间隔
    interval?: number | undefined;
}

export interface IWsConn extends EventEmitter {
    /**
     * 
     * @param url 链接地址
     * @param token token
     * @param waiting 是否愿意接受排队等待
     * @returns 返回true表示成功，返回false表示需要等待
     */
    Connect(url: string, options: ConnectOptions): Promise<void>
    // 是否已经链接
    HasConnected(): boolean
    // 发送消息
    SendMessage<Q, T>(method: string, route: string, body: Q): Promise<T>
    // 关闭链接
    Close(): void

    /**
     * 返回排队人数，和自己是第几个
     */
    WaitStatus(): Promise<{ self: number, total: number }>

    /**
     * 返回排队中的消息
     * @param event 
     * @param callback 
     */
    on(event: "waiting", callback: (e: { self: number, total: number }) => void): any;
    once(event: "waiting", callback: (e: { self: number, total: number }) => void): any;
}

interface ReqAnswerInfo {
    callBack: (error: any, message: any) => void,
    create: number
}

export class MxWsNet extends EventEmitter implements IWsConn {
    private connecetd = false
    private conn?: WebSocket
    private msgMgr: IMessageManager
    private localId: number;

    private waiting?: boolean
    private waitInterval?: number

    private mapReq2Answer = new Map<number, ReqAnswerInfo>()

    private updateIt: any
    private queryIt: any;
    /**
     * 
     * @param waiting 是否愿意接受排队等待 默认false
     * @param interval 排队等待查询的间隔时间 最小2000ms
     */
    protected constructor() {
        super()
        this.localId = Math.random()
        this.msgMgr = new MessageManager()
    }

    static gWsInst: MxWsNet
    static get Instance() {
        if (this.gWsInst === undefined) {
            this.gWsInst = new MxWsNet()
        }
        return this.gWsInst
    }


    static Utf8ArrayToStr(array: Uint8Array) {
        return Utf8ArrayToStr(array)
    }

    /**
     * 发起链接
     * @param url 服务器地址
     * @param options 链接设置选项
     * @returns 
     */
    Connect(url: string, options: ConnectOptions): Promise<void> {
        let self = this
        this.waiting = options?.waiting || false
        let interval = options?.interval || 0
        if (interval && interval > 0) {
            this.waitInterval = Math.max(interval, 1000)
        } else {
            this.waitInterval = 0
        }
        return new Promise<void>((resolve, reject) => {
            if (this.conn) return resolve()
            function onOk() {
                self.connecetd = true
                self.updateIt = setInterval(self.updateReqTimeout.bind(self), 1000)
                self.off('error', onFail)
                self.off('closed', onFail)
                self.off('connected', onOk)
                self.off('waiting', onWaiting)
                resolve()
            }

            function onFail(e: string) {
                self.off('error', onFail)
                self.off('closed', onFail)
                self.off('connected', onOk)
                self.off('waiting', onWaiting)
                reject(e)
            }

            function onWaiting(e: { self: number, total: number }) {
                if (options?.proccesing) {
                    options.proccesing(e)
                }
            }

            this.once('connected', onOk);
            this.once('error', onFail);
            this.once('closed', onFail)
            this.on('waiting', onWaiting)
            this._connect(url, options?.token)
        })
    }
    _connect(url: string, token?: string) {
        this.localId = Math.random()
        let conn = new WebSocket(url, token ? [token] : [])
        conn.binaryType = 'arraybuffer'
        conn.onmessage = this.onMessage.bind(this, this.localId)
        conn.onclose = this.onClose.bind(this, this.localId)
        conn.onerror = this.onError.bind(this, this.localId)

        this.conn = conn;
    }

    updateReqTimeout() {
        let now = Date.now()
        this.mapReq2Answer.forEach((v, k) => {
            if (now > v.create) {
                this.mapReq2Answer.delete(k)
                v.callBack({ message: "timeout" }, undefined)
                this.mapReq2Answer.delete(k)
            }
        })
    }

    /**
     * 是否已经链接成功
     * @returns 
     */
    HasConnected() {
        return this.connecetd
    }

    private splitUint8Array(data: Uint8Array): Uint8Array[] {
        let pos: number[] = []
        for (let i = 0; i < data.length; i++) {
            if (data[i] == 10) {
                pos.push(i)
            }
        }
        if (pos.length == 0) return [data]
        let results: Uint8Array[] = []
        pos.unshift(-1)
        pos.push(data.length)
        for (let i = 0; i < pos.length - 1; i++) {
            results.push(data.slice(pos[i] + 1, pos[i + 1]))
        }

        return results
    }


    // 接收到消息
    private doCmd(cmd: pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd, message: Uint8Array) {
        // 被动接收的消息
        switch (cmd) {
            case pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd.MSG_LOCAL_CMD_NOT_UNSPECIFIED:
                break;
            case pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd.MSG_LOCAL_CMD_WS_ACCEPT:
                if (this.queryIt) {
                    clearInterval(this.queryIt)
                    this.queryIt = 0
                }
                this.emit("connected")
                break;
            case pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd.MSG_LOCAL_CMD_WS_CLOSE:
                this.emit("closed", message)
                break
            case pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd.MSG_LOCAL_CMD_WS_WAIT:
                // 这里收到排队信息
                // 这里比较特殊，如何判定，要么流程ok，但是链接失败
                if (this.waiting) {
                    let body = this.msgMgr.unmarshalWaitInfo(message)
                    this.emit("waiting", { self: body.self, total: body.total })
                    if (this.queryIt) {
                        clearInterval(this.queryIt)
                        this.queryIt = 0
                    }
                    if (this.waitInterval && this.waitInterval > 0) {
                        this.queryIt = setInterval(async () => {
                            this.WaitStatus().then(body => {
                                this.emit("waiting", { self: body.self, total: body.total })
                            })
                        }, this.waitInterval)
                    }
                } else {
                    // 需要排队，我不干了
                    this.emit("closed", "需要排队")
                    this.Close()
                }
                break
        }
    }

    // 处理服务器消息
    private doMessage(msg: MessageUnit) {
        const reqId = msg.requestId()
        const call = this.mapReq2Answer.get(reqId);
        const ver = msg.version()
        switch (ver) {
            case pbjs.cn.moxi.middle.bytecoder.Version.VERSION_0_UNSPECIFIED: {
                let v0 = msg.unmarshalv0()
                if (call) {
                    this.mapReq2Answer.delete(reqId)
                    if (v0.code === 200) {
                        call.callBack(undefined, v0.message)
                    } else {
                        call.callBack(v0.message, undefined)
                    }
                } else if (reqId == 0) {
                    this.emit("message", msg)
                }
                break;
            }
            case pbjs.cn.moxi.middle.bytecoder.Version.VERSION_CMD: {
                let vCmd = msg.unmarshalCmd()
                if (call) {
                    this.mapReq2Answer.delete(reqId)
                    call.callBack(undefined, vCmd.message)
                } else if (reqId == 0) {
                    this.doCmd(vCmd.cmd, vCmd.message)
                }
                break
            }
        }
    }
    // 接收消息，切割消息
    private onMessage(localId: number, evt: MessageEvent<ArrayBuffer>) {
        if (localId != this.localId) {
            console.log('error localid')
            return
        }
        this.splitUint8Array(new Uint8Array(evt.data)).forEach(v => {
            this.doMessage(this.msgMgr.unmarshal(decodeWS(v)))
        })
    }

    private onClose(localId: number) {
        if (localId != this.localId) {
            return
        }
        this.conn = undefined
        this.connecetd = false
        if (this.updateIt) {
            clearInterval(this.updateIt)
            this.updateIt = 0
        }

        if (this.queryIt) {
            clearInterval(this.queryIt)
            this.queryIt = 0
        }
        this.emit('closed')
    }

    private onError(localId: number, e: Event) {
        if (localId != this.localId) return
        this.emit('error', JSON.stringify(e))
    }


    /**
     * 发起一个请求
     * @param method 请求方式 GET POST 
     * @param route 路由
     * @param body 请求内容
     * @param timeout 超时时间 默认 10s
     * @returns 
     */
    async SendMessage<Q, T>(method: string, route: string, body: Q, timeout?: number) {
        if (!this.conn) {
            return Promise.reject({ message: "网路没链接" })
        }

        let msg = this.msgMgr.marshalv1({
            method: method,
            body: ToUint8Arr(JSON.stringify(body)),
            route: route,
            responseHeader: false,
        })

        this.conn.send(encodeWS(msg.toGzip()))
        return new Promise<T>((resolve, reject) => {
            this.mapReq2Answer.set(msg.requestId(), {
                create: Date.now() + (timeout || 10000),
                callBack: function (error, message: string) {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(JSON.parse(message))
                    }
                }
            })
        })
    }

    Close(code?: number) {
        if (this.conn) {
            this.conn.close(code)
            // 主动断开的话先干为敬
            this.onClose(this.localId)
        }
    }

    WaitStatus() {
        if (!this.conn) {
            return Promise.reject({ message: "网路没链接" })
        }

        let msg = this.msgMgr.marshalCmd({
            cmd: pbjs.cn.moxi.middle.bytecoder.MsgLocalCmd.MSG_LOCAL_CMD_WS_REQ,
            body: ToUint8Arr(JSON.stringify({}))
        })

        this.conn.send(encodeWS(msg.toGzip()))

        return new Promise<{ self: number, total: number }>((resolve, reject) => {
            this.mapReq2Answer.set(msg.requestId(), {
                create: 0,
                callBack: (error, message: Uint8Array) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(this.msgMgr.unmarshalWaitInfo(message))
                    }
                }
            })
        })
    }
}

