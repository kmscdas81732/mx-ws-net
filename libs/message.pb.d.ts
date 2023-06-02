import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace cn. */
export namespace cn {

    /** Namespace moxi. */
    namespace moxi {

        /** Namespace middle. */
        namespace middle {

            /** Namespace bytecoder. */
            namespace bytecoder {

                /** Version enum. */
                enum Version {
                    VERSION_0_UNSPECIFIED = 0,
                    VERSION_1 = 1,
                    VERSION_2 = 2,
                    VERSION_CMD = 3
                }

                /** Properties of a Message. */
                interface IMessage {

                    /** Message version */
                    version?: (cn.moxi.middle.bytecoder.Version|null);

                    /** Message requestId */
                    requestId?: (number|Long|null);
                }

                /** Represents a Message. */
                class Message implements IMessage {

                    /**
                     * Constructs a new Message.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessage);

                    /** Message version. */
                    public version: cn.moxi.middle.bytecoder.Version;

                    /** Message requestId. */
                    public requestId: (number|Long);

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Message instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessage): cn.moxi.middle.bytecoder.Message;

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link cn.moxi.middle.bytecoder.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.Message;

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.Message;

                    /**
                     * Verifies a Message message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Message
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.Message;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param message Message
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Message to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Message
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Messagev1. */
                interface IMessagev1 {

                    /** Messagev1 version */
                    version?: (cn.moxi.middle.bytecoder.Version|null);

                    /** Messagev1 requestId */
                    requestId?: (number|Long|null);

                    /** Messagev1 method */
                    method?: (string|null);

                    /** Messagev1 route */
                    route?: (string|null);

                    /** Messagev1 body */
                    body?: (Uint8Array|null);

                    /** Messagev1 header */
                    header?: ({ [k: string]: string }|null);

                    /** Messagev1 responseHeader */
                    responseHeader?: (boolean|null);
                }

                /** Represents a Messagev1. */
                class Messagev1 implements IMessagev1 {

                    /**
                     * Constructs a new Messagev1.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessagev1);

                    /** Messagev1 version. */
                    public version: cn.moxi.middle.bytecoder.Version;

                    /** Messagev1 requestId. */
                    public requestId: (number|Long);

                    /** Messagev1 method. */
                    public method: string;

                    /** Messagev1 route. */
                    public route: string;

                    /** Messagev1 body. */
                    public body: Uint8Array;

                    /** Messagev1 header. */
                    public header: { [k: string]: string };

                    /** Messagev1 responseHeader. */
                    public responseHeader: boolean;

                    /**
                     * Creates a new Messagev1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Messagev1 instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessagev1): cn.moxi.middle.bytecoder.Messagev1;

                    /**
                     * Encodes the specified Messagev1 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev1.verify|verify} messages.
                     * @param message Messagev1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessagev1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Messagev1 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev1.verify|verify} messages.
                     * @param message Messagev1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessagev1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Messagev1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Messagev1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.Messagev1;

                    /**
                     * Decodes a Messagev1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Messagev1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.Messagev1;

                    /**
                     * Verifies a Messagev1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Messagev1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Messagev1
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.Messagev1;

                    /**
                     * Creates a plain object from a Messagev1 message. Also converts values to other types if specified.
                     * @param message Messagev1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.Messagev1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Messagev1 to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Messagev1
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Messagev2. */
                interface IMessagev2 {

                    /** Messagev2 version */
                    version?: (cn.moxi.middle.bytecoder.Version|null);

                    /** Messagev2 requestId */
                    requestId?: (number|Long|null);

                    /** Messagev2 cmd */
                    cmd?: (number|null);

                    /** Messagev2 body */
                    body?: (Uint8Array|null);

                    /** Messagev2 header */
                    header?: ({ [k: string]: string }|null);

                    /** Messagev2 responseHeader */
                    responseHeader?: (boolean|null);
                }

                /** Represents a Messagev2. */
                class Messagev2 implements IMessagev2 {

                    /**
                     * Constructs a new Messagev2.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessagev2);

                    /** Messagev2 version. */
                    public version: cn.moxi.middle.bytecoder.Version;

                    /** Messagev2 requestId. */
                    public requestId: (number|Long);

                    /** Messagev2 cmd. */
                    public cmd: number;

                    /** Messagev2 body. */
                    public body: Uint8Array;

                    /** Messagev2 header. */
                    public header: { [k: string]: string };

                    /** Messagev2 responseHeader. */
                    public responseHeader: boolean;

                    /**
                     * Creates a new Messagev2 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Messagev2 instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessagev2): cn.moxi.middle.bytecoder.Messagev2;

                    /**
                     * Encodes the specified Messagev2 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev2.verify|verify} messages.
                     * @param message Messagev2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessagev2, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Messagev2 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev2.verify|verify} messages.
                     * @param message Messagev2 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessagev2, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Messagev2 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Messagev2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.Messagev2;

                    /**
                     * Decodes a Messagev2 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Messagev2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.Messagev2;

                    /**
                     * Verifies a Messagev2 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Messagev2 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Messagev2
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.Messagev2;

                    /**
                     * Creates a plain object from a Messagev2 message. Also converts values to other types if specified.
                     * @param message Messagev2
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.Messagev2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Messagev2 to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Messagev2
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** MsgLocalCmd enum. */
                enum MsgLocalCmd {
                    MSG_LOCAL_CMD_NOT_UNSPECIFIED = 0,
                    MSG_LOCAL_CMD_WS_ACCEPT = 801,
                    MSG_LOCAL_CMD_WS_WAIT = 802,
                    MSG_LOCAL_CMD_WS_CLOSE = 803,
                    MSG_LOCAL_CMD_WS_REQ = 810,
                    MSG_LOCAL_CMD_WS_RESP = 811
                }

                /** Properties of a MessageCMD. */
                interface IMessageCMD {

                    /** MessageCMD version */
                    version?: (cn.moxi.middle.bytecoder.Version|null);

                    /** MessageCMD requestId */
                    requestId?: (number|Long|null);

                    /** MessageCMD cmd */
                    cmd?: (cn.moxi.middle.bytecoder.MsgLocalCmd|null);

                    /** MessageCMD body */
                    body?: (Uint8Array|null);
                }

                /** Represents a MessageCMD. */
                class MessageCMD implements IMessageCMD {

                    /**
                     * Constructs a new MessageCMD.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessageCMD);

                    /** MessageCMD version. */
                    public version: cn.moxi.middle.bytecoder.Version;

                    /** MessageCMD requestId. */
                    public requestId: (number|Long);

                    /** MessageCMD cmd. */
                    public cmd: cn.moxi.middle.bytecoder.MsgLocalCmd;

                    /** MessageCMD body. */
                    public body: Uint8Array;

                    /**
                     * Creates a new MessageCMD instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageCMD instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessageCMD): cn.moxi.middle.bytecoder.MessageCMD;

                    /**
                     * Encodes the specified MessageCMD message. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageCMD.verify|verify} messages.
                     * @param message MessageCMD message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessageCMD, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageCMD message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageCMD.verify|verify} messages.
                     * @param message MessageCMD message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessageCMD, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageCMD message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageCMD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.MessageCMD;

                    /**
                     * Decodes a MessageCMD message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageCMD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.MessageCMD;

                    /**
                     * Verifies a MessageCMD message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageCMD message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageCMD
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.MessageCMD;

                    /**
                     * Creates a plain object from a MessageCMD message. Also converts values to other types if specified.
                     * @param message MessageCMD
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.MessageCMD, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageCMD to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessageCMD
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Messagev0. */
                interface IMessagev0 {

                    /** Messagev0 version */
                    version?: (cn.moxi.middle.bytecoder.Version|null);

                    /** Messagev0 requestId */
                    requestId?: (number|Long|null);

                    /** Messagev0 code */
                    code?: (number|null);

                    /** Messagev0 message */
                    message?: (Uint8Array|null);

                    /** Messagev0 header */
                    header?: ({ [k: string]: string }|null);
                }

                /** Represents a Messagev0. */
                class Messagev0 implements IMessagev0 {

                    /**
                     * Constructs a new Messagev0.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessagev0);

                    /** Messagev0 version. */
                    public version: cn.moxi.middle.bytecoder.Version;

                    /** Messagev0 requestId. */
                    public requestId: (number|Long);

                    /** Messagev0 code. */
                    public code: number;

                    /** Messagev0 message. */
                    public message: Uint8Array;

                    /** Messagev0 header. */
                    public header: { [k: string]: string };

                    /**
                     * Creates a new Messagev0 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Messagev0 instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessagev0): cn.moxi.middle.bytecoder.Messagev0;

                    /**
                     * Encodes the specified Messagev0 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev0.verify|verify} messages.
                     * @param message Messagev0 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessagev0, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Messagev0 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev0.verify|verify} messages.
                     * @param message Messagev0 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessagev0, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Messagev0 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Messagev0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.Messagev0;

                    /**
                     * Decodes a Messagev0 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Messagev0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.Messagev0;

                    /**
                     * Verifies a Messagev0 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Messagev0 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Messagev0
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.Messagev0;

                    /**
                     * Creates a plain object from a Messagev0 message. Also converts values to other types if specified.
                     * @param message Messagev0
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.Messagev0, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Messagev0 to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Messagev0
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageWaitInfo. */
                interface IMessageWaitInfo {

                    /** MessageWaitInfo self */
                    self?: (number|Long|null);

                    /** MessageWaitInfo total */
                    total?: (number|Long|null);
                }

                /** Represents a MessageWaitInfo. */
                class MessageWaitInfo implements IMessageWaitInfo {

                    /**
                     * Constructs a new MessageWaitInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cn.moxi.middle.bytecoder.IMessageWaitInfo);

                    /** MessageWaitInfo self. */
                    public self: (number|Long);

                    /** MessageWaitInfo total. */
                    public total: (number|Long);

                    /**
                     * Creates a new MessageWaitInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageWaitInfo instance
                     */
                    public static create(properties?: cn.moxi.middle.bytecoder.IMessageWaitInfo): cn.moxi.middle.bytecoder.MessageWaitInfo;

                    /**
                     * Encodes the specified MessageWaitInfo message. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageWaitInfo.verify|verify} messages.
                     * @param message MessageWaitInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cn.moxi.middle.bytecoder.IMessageWaitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageWaitInfo message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageWaitInfo.verify|verify} messages.
                     * @param message MessageWaitInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cn.moxi.middle.bytecoder.IMessageWaitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageWaitInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageWaitInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cn.moxi.middle.bytecoder.MessageWaitInfo;

                    /**
                     * Decodes a MessageWaitInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageWaitInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cn.moxi.middle.bytecoder.MessageWaitInfo;

                    /**
                     * Verifies a MessageWaitInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageWaitInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageWaitInfo
                     */
                    public static fromObject(object: { [k: string]: any }): cn.moxi.middle.bytecoder.MessageWaitInfo;

                    /**
                     * Creates a plain object from a MessageWaitInfo message. Also converts values to other types if specified.
                     * @param message MessageWaitInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cn.moxi.middle.bytecoder.MessageWaitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageWaitInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessageWaitInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
