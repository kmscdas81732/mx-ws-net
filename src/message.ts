import { gzip, ungzip } from 'pako'
import { IMessageManager, MessageCMD, Messagev0, Messagev0P, Messagev1, Messagev2 } from './manager'
import { Utf8ArrayToStr } from './coder'
import * as ppbjs from '../libs/message.pb'

// 消息对象
export class MessageUnit {
    private manager: IMessageManager
    private sourceData: Uint8Array
    constructor(mgr: IMessageManager) {
        this.manager = mgr
        this.sourceData = new Uint8Array(0)
    }

    toBuffer() {
        return this.sourceData
    }

    toGzip() {
        return gzip(this.sourceData)
    }

    get length() {
        return this.sourceData.length
    }

    loadGzip(buff: Uint8Array) {
        this.sourceData = ungzip(buff)
    }

    loadBuffer(buff: Uint8Array) {
        this.sourceData = buff
    }

    version() {
        return this.manager.parseVersion(this.sourceData)
    }

    requestId() {
        return this.manager.parseRequestId(this.sourceData)
    }

    unmarshalv2(): Messagev2 | null {
        let ver = this.version()
        if (ver != ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_2) return null
        return this.manager.unmarshalMessage(this.sourceData, ver) as Messagev2
    }

    unmarshalv1(): Messagev1 | null {
        let ver = this.version()
        if (ver != ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_1) return null
        return this.manager.unmarshalMessage(this.sourceData, ver) as Messagev1
    }

    unmarshalv0(): Messagev0P {
        let ver = this.version()
        if (ver != ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_0_UNSPECIFIED) return {
            code: 0,
            message: "version error"
        }

        let v = this.manager.unmarshalMessage(this.sourceData, ver) as Messagev0
        if (!v.code || !v.message) {
            return { code: 0, message: "unmarshal error" }
        } else {
            return {
                code: v.code,
                message: Utf8ArrayToStr(v.message)
            }
        }
    }

    unmarshalCmd(): {
        cmd: ppbjs.cn.moxi.middle.bytecoder.MsgLocalCmd,
        message: Uint8Array
    } {
        let ver = this.version()
        if (ver != ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_CMD) {
            throw new Error("version error")
        }
        let v = this.manager.unmarshalMessage(this.sourceData, ver) as MessageCMD
        if (!v.cmd || !v.body) {
            throw new Error("unmarshal error")
        } else {
            return {
                cmd: v.cmd,
                message: v.body
            }
        }
    }
}
