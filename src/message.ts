import { gzip, ungzip } from 'pako'
import { IMessageManager, Messagev0, Messagev0P, Messagev1, Messagev2 } from './manager'
import { Utf8ArrayToStr } from './coder'

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
        if (ver != 2) return null
        return this.manager.unmarshalMessage(this.sourceData, ver) as Messagev2
    }

    unmarshalv1(): Messagev1 | null {
        let ver = this.version()
        if (ver != 1) return null
        return this.manager.unmarshalMessage(this.sourceData, ver) as Messagev1
    }

    unmarshalv0(): Messagev0P {
        let ver = this.version()
        if (ver != 0) return { code: 0, message: "version error" }

        let v = this.manager.unmarshalMessage(this.sourceData, ver) as Messagev0
        return {
            code: v.code,
            message: Utf8ArrayToStr(v.message)
        }
    }
}
