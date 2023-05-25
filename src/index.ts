import { CreateManager, ManagerMode, IMessageManager } from "./manager"
import { ToUint8Arr, decodeWS, encodeWS } from "./coder"
import { EventEmitter } from './event'

export interface IWsConn extends EventEmitter {
    Connect(url: string, token?: string): Promise<void>
    HasConnected(): boolean
    SendMessage<Q, T>(method: string, route: string, body: Q): Promise<T>
    Close(): void
}

export class MxWsNet extends EventEmitter implements IWsConn {
    private connecetd = false
    private conn?: WebSocket
    private mgr?: IMessageManager
    private localId: number;
    private mode: ManagerMode
    private mapReq2Answer = new Map<number, (error: any, message: any) => void>()
    protected constructor(mode: ManagerMode) {
        super()
        this.localId = Math.random()
        this.mode = mode
    }

    static gWsInst: MxWsNet | undefined
    static get Instance() {
        if (this.gWsInst === undefined) {
            var mode = new Function()
            this.gWsInst = new MxWsNet(typeof mode === "function" ? "dynamic" : "static")
        }
        return this.gWsInst
    }
    // 发起链接
    Connect(url: string, token?: string) {
        if (token) {
            token = token.replace(" ", "-")
        }
        let self = this
        return new Promise<void>((resolve, reject) => {
            if (this.conn) return resolve()
            function onOk() {
                self.off('error', onFail)
                self.off('connected', onOk)
                resolve()
            }

            function onFail(e: any) {
                self.off('error', onFail)
                self.off('connected', onOk)
                reject(e)
            }

            this.once('connected', onOk);
            this.once('error', onFail);
            this._connect(url, token)
        })
    }
    _connect(url: string, token?: string) {
        this.localId = Math.random()
        let conn = new WebSocket(url, token ? [token] : [])
        conn.binaryType = 'arraybuffer'
        conn.onmessage = this.onMessage.bind(this, this.localId)
        conn.onclose = this.onClose.bind(this, this.localId)
        conn.onopen = () => {
            this.connecetd = true
        }
        conn.onerror = this.onError.bind(this, this.localId)

        this.conn = conn;
    }

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

    private onMessage(localId: number, evt: MessageEvent<ArrayBuffer>) {
        if (localId != this.localId) {
            console.log('error localid')
            return
        }
        this.splitUint8Array(new Uint8Array(evt.data)).forEach(v => {
            let data = decodeWS(v)
            if (!this.mgr) {
                this.mgr = CreateManager(this.mode, data)
                this.emit("connected")
            } else {
                let msg = this.mgr.unmarshal(data)
                const reqId = msg.requestId()
                const callBack = this.mapReq2Answer.get(reqId);
                if (callBack) {
                    this.mapReq2Answer.delete(reqId)
                    let v0 = msg.unmarshalv0()
                    if (v0.code === 200) {
                        callBack(undefined, v0.message)
                    } else {
                        callBack(new Error(v0.message), undefined)
                    }
                } else {
                    // 这里表示数据是服务器推送过来
                    this.emit("message", msg)
                }
            }
        })
    }

    private onClose(localId: number) {
        if (localId != this.localId) {
            return
        }
        this.conn = undefined
        this.connecetd = false
        this.mgr = undefined

        this.emit('close')
    }

    private onError(localId: number, e: Event) {
        if (localId != this.localId) return
        this.emit('error', e)
    }


    async SendMessage<Q, T>(method: string, route: string, body: Q) {
        if (!this.conn || !this.mgr) {
            throw ("网路没链接")
        }

        let msg = this.mgr.marshalv1({
            version: 1,
            requestId: 1,
            method: method,
            body: ToUint8Arr(JSON.stringify(body)),
            route: route,
            responseHeader: false,
        })

        this.conn.send(encodeWS(msg.toGzip()))

        return new Promise<T>((resolve, reject) => {
            this.mapReq2Answer.set(msg.requestId(), function (error, message: string) {
                if (error) {
                    reject(error)
                } else {
                    resolve(JSON.parse(message))
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
}

