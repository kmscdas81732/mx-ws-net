import * as pbjs from 'protobufjs'
import * as ppbjs from '../libs/proto_pb'
import { ungzip } from 'pako'
import { MessageUnit } from './message'
import { Utf8ArrayToStr } from './coder'
//通用消息头
export interface Message { version: number, requestId: number }
//应答消息格式
export interface Messagev0 { version: number, requestId: number, code: number, message: Uint8Array }
//解析过的应答消息格式
export interface Messagev0P { code: number, message: string }
//发起请求的消息v1
export interface Messagev1 { version: number, requestId: number, method: string, responseHeader: boolean, route: string, body: Uint8Array, header: { [x: string]: string } }
//发起请求的消息v2
export interface Messagev2 { version: number, requestId: number, responseHeader: boolean, cmd: number, body: Uint8Array, header: { [x: string]: string } }


export interface IMessageManager {
    parseVersion(sourceData: Uint8Array): number
    parseRequestId(sourceData: Uint8Array): number

    unmarshal(sourceData: Uint8Array): MessageUnit

    unmarshalMessage(sourceData: Uint8Array, v?: number): Messagev0 | Messagev1 | Messagev2
    marshalv1(obj: Partial<Messagev1>): MessageUnit
    marshalv2(obj: Messagev2): MessageUnit
    marshal(obj: Partial<Message | Messagev0 | Messagev1 | Messagev2>): MessageUnit
}

export type ManagerMode = "dynamic" | "static"

export function CreateManager(mode: "dynamic" | "static", data: Uint8Array): IMessageManager {
    if (mode == "dynamic") {
        return new MessageManager(data)
    } else {
        return new MessageManager2()
    }
}

class MessageManager {
    private messagev0: pbjs.Type
    private messagev1: pbjs.Type
    private messagev2: pbjs.Type
    private message: pbjs.Type

    private requestId = 1

    constructor(data: Uint8Array) {
        let pfFile = Utf8ArrayToStr(ungzip(data))
        let pbRoot = new pbjs.Root
        pbjs.parse(pfFile, pbRoot)
        let m = pbRoot.lookupType('bytecoder.Message')
        if (m) {
            this.message = m
        } else {
            throw "协议错误"
        }

        let m0 = pbRoot.lookupType('bytecoder.Messagev0')
        if (m0) {
            this.messagev0 = m0
        } else {
            throw "协议错误"
        }

        let m1 = pbRoot.lookupType('bytecoder.Messagev1')
        if (m1) {
            this.messagev1 = m1
        } else {
            throw "协议错误"
        }

        let m2 = pbRoot.lookupType('bytecoder.Messagev2')
        if (m2) {
            this.messagev2 = m2
        } else {
            throw "协议错误"
        }
    }

    parseVersion(sourceData: Uint8Array) {
        let message: Message = this.message.decode(sourceData) as any
        return message.version
    }

    parseRequestId(sourceData: Uint8Array) {
        let message: Message = this.message.decode(sourceData) as any
        return message.requestId
    }


    unmarshal(sourceData: Uint8Array): MessageUnit {
        let msg = new MessageUnit(this)
        msg.loadGzip(sourceData)
        return msg
    }

    unmarshalMessage(sourceData: Uint8Array, v?: number): Messagev0 | Messagev1 | Messagev2 {
        if (v === undefined) {
            v = this.parseVersion(sourceData)
        }
        let message: any;
        switch (v) {
            case 0:
                message = this.messagev0.decode(sourceData)
                break
            case 1:
                message = this.messagev1.decode(sourceData)
                break
            case 2:
                message = this.messagev2.decode(sourceData)
                break
            default:
                throw "未知消息"
        }

        return message
    }

    marshalv1(obj: Partial<Messagev1>) {
        obj.version = 1
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshalv2(obj: Messagev2) {
        obj.version = 2
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshal(obj: Partial<Message | Messagev0 | Messagev1 | Messagev2>): MessageUnit {
        let bf: Uint8Array
        switch (obj.version) {
            case 0: bf = this.messagev0.encode(obj).finish(); break;
            case 1: bf = this.messagev1.encode(obj).finish(); break;
            case 2: bf = this.messagev2.encode(obj).finish(); break;
            default: throw "未知消息"
        }

        let ut = new MessageUnit(this)
        ut.loadBuffer(bf)
        return ut
    }
}


class MessageManager2 implements IMessageManager {
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

    unmarshalMessage(sourceData: Uint8Array, v?: number): Messagev0 | Messagev1 | Messagev2 {
        if (v === undefined) {
            v = this.parseVersion(sourceData)
        }
        let message: any;
        switch (v) {
            case 0:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev0.decode(sourceData)
                break
            case 1:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev1.decode(sourceData)
                break
            case 2:
                message = ppbjs.cn.moxi.middle.bytecoder.Messagev2.decode(sourceData)
                break
            default:
                throw "未知消息"
        }

        return message
    }

    marshalv1(obj: Partial<Messagev1>) {
        obj.version = 1
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshalv2(obj: Messagev2) {
        obj.version = 2
        obj.requestId = this.requestId++
        return this.marshal(obj)
    }

    marshal(obj: Partial<Message | Messagev0 | Messagev1 | Messagev2>): MessageUnit {
        let bf: Uint8Array
        switch (obj.version) {
            case 0: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev0.encode(obj).finish(); break;
            case 1: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev1.encode(obj).finish(); break;
            case 2: bf = ppbjs.cn.moxi.middle.bytecoder.Messagev2.encode(obj).finish(); break;
            default: throw "未知消息"
        }

        let ut = new MessageUnit(this)
        ut.loadBuffer(bf)
        return ut
    }
}

