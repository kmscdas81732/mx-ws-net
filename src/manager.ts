import * as ppbjs from '../libs/message.pb'
import { MessageUnit } from './message'
//通用消息头
export interface Message { version: number, requestId: number }
//应答消息格式
export type Messagev0 = ppbjs.cn.moxi.middle.bytecoder.IMessagev0
export type MessageCMD = ppbjs.cn.moxi.middle.bytecoder.IMessageCMD
//解析过的应答消息格式
export interface Messagev0P { code: number, message: string }
//发起请求的消息v1
export type Messagev1 = ppbjs.cn.moxi.middle.bytecoder.IMessagev1
//发起请求的消息v2
export type Messagev2 = ppbjs.cn.moxi.middle.bytecoder.IMessagev2


export interface IMessageManager {
    parseVersion(sourceData: Uint8Array): ppbjs.cn.moxi.middle.bytecoder.Version
    parseRequestId(sourceData: Uint8Array): number

    unmarshal(sourceData: Uint8Array): MessageUnit

    unmarshalMessage(sourceData: Uint8Array, v?: ppbjs.cn.moxi.middle.bytecoder.Version): Messagev0 | Messagev1 | Messagev2 | MessageCMD
    marshalv1(obj: Partial<Messagev1>): MessageUnit
    marshalv2(obj: Messagev2): MessageUnit
    marshalCmd(obj: MessageCMD): MessageUnit
    marshal(obj: Partial<Message | Messagev0 | Messagev1 | Messagev2>): MessageUnit
    unmarshalWaitInfo(bytecoder: Uint8Array): { self: number, total: number }
}

export type ManagerMode = "dynamic" | "static"

export class MessageManager implements IMessageManager {
    private requestId = 1
    constructor() {

    }

    parseVersion(sourceData: Uint8Array) {
        let message = ppbjs.cn.moxi.middle.bytecoder.Message.decode(sourceData)
        return message.version
    }

    parseRequestId(sourceData: Uint8Array) {
        let message = ppbjs.cn.moxi.middle.bytecoder.Message.decode(sourceData)
        return message.requestId as number
    }

    unmarshal(sourceData: Uint8Array): MessageUnit {
        let msg = new MessageUnit(this)
        msg.loadGzip(sourceData)
        return msg
    }

    unmarshalWaitInfo(bytecoder: Uint8Array): { self: number, total: number } {
        let message = ppbjs.cn.moxi.middle.bytecoder.MessageWaitInfo.decode(bytecoder)
        // let message = JSON.parse(Utf8ArrayToStr(bytecoder))

        return { self: message.self as number, total: message.total as number }
    }

    unmarshalMessage(sourceData: Uint8Array, v?: ppbjs.cn.moxi.middle.bytecoder.Version): Messagev0 | Messagev1 | Messagev2 {
        if (v === undefined) {
            v = this.parseVersion(sourceData)
        }
        let message: any;
        switch (v) {
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_0_UNSPECIFIED:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev0.decode(sourceData)
                break
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_1:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev1.decode(sourceData)
                break
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_2:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev2.decode(sourceData)
                break
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_CMD:
                message = ppbjs.cn.moxi.middle.bytecoder.MessageCMD.decode(sourceData)
                break
            default:
                throw "未知消息"
        }

        return message
    }

    marshalv1(obj: Partial<Messagev1>) {
        obj.version = ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_1
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshalv2(obj: Messagev2) {
        obj.version = ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_2
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshalCmd(obj: MessageCMD) {
        obj.version = ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_CMD
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshal(obj: Partial<Message | Messagev0 | Messagev1 | Messagev2>): MessageUnit {
        let bf: Uint8Array
        switch (obj.version) {
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_0_UNSPECIFIED: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev0.encode(obj).finish(); break;
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_1: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev1.encode(obj).finish(); break;
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_2: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev2.encode(obj).finish(); break;
            case ppbjs.cn.moxi.middle.bytecoder.Version.VERSION_CMD: bf = ppbjs.cn.moxi.middle.bytecoder.MessageCMD.encode(obj).finish(); break;
            default: throw "未知消息"
        }

        let ut = new MessageUnit(this)
        ut.loadBuffer(bf)
        return ut
    }
}

