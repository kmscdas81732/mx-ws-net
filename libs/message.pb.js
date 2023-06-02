/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cn = $root.cn = (() => {

    /**
     * Namespace cn.
     * @exports cn
     * @namespace
     */
    const cn = {};

    cn.moxi = (function () {

        /**
         * Namespace moxi.
         * @memberof cn
         * @namespace
         */
        const moxi = {};

        moxi.middle = (function () {

            /**
             * Namespace middle.
             * @memberof cn.moxi
             * @namespace
             */
            const middle = {};

            middle.bytecoder = (function () {

                /**
                 * Namespace bytecoder.
                 * @memberof cn.moxi.middle
                 * @namespace
                 */
                const bytecoder = {};

                /**
                 * Version enum.
                 * @name cn.moxi.middle.bytecoder.Version
                 * @enum {number}
                 * @property {number} VERSION_0_UNSPECIFIED=0 VERSION_0_UNSPECIFIED value
                 * @property {number} VERSION_1=1 VERSION_1 value
                 * @property {number} VERSION_2=2 VERSION_2 value
                 * @property {number} VERSION_CMD=3 VERSION_CMD value
                 */
                bytecoder.Version = (function () {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "VERSION_0_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "VERSION_1"] = 1;
                    values[valuesById[2] = "VERSION_2"] = 2;
                    values[valuesById[3] = "VERSION_CMD"] = 3;
                    return values;
                })();

                bytecoder.Message = (function () {

                    /**
                     * Properties of a Message.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessage
                     * @property {cn.moxi.middle.bytecoder.Version|null} [version] Message version
                     * @property {number|Long|null} [requestId] Message requestId
                     */

                    /**
                     * Constructs a new Message.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a Message.
                     * @implements IMessage
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessage=} [properties] Properties to set
                     */
                    function Message(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Message version.
                     * @member {cn.moxi.middle.bytecoder.Version} version
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @instance
                     */
                    Message.prototype.version = 0;

                    /**
                     * Message requestId.
                     * @member {number|Long} requestId
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @instance
                     */
                    Message.prototype.requestId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessage=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.Message} Message instance
                     */
                    Message.create = function create(properties) {
                        return new Message(properties);
                    };

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link cn.moxi.middle.bytecoder.Message.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessage} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Message.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessage} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.Message} Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Message.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.Message();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                                case 2: {
                                    message.requestId = reader.int64();
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.Message} Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Message.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Message message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Message.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            switch (message.version) {
                                default:
                                    return "version: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                            }
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                                return "requestId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.Message} Message
                     */
                    Message.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.Message)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.Message();
                        switch (object.version) {
                            default:
                                if (typeof object.version === "number") {
                                    message.version = object.version;
                                    break;
                                }
                                break;
                            case "VERSION_0_UNSPECIFIED":
                            case 0:
                                message.version = 0;
                                break;
                            case "VERSION_1":
                            case 1:
                                message.version = 1;
                                break;
                            case "VERSION_2":
                            case 2:
                                message.version = 2;
                                break;
                            case "VERSION_CMD":
                            case 3:
                                message.version = 3;
                                break;
                        }
                        if (object.requestId != null)
                            if ($util.Long)
                                (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                            else if (typeof object.requestId === "string")
                                message.requestId = parseInt(object.requestId, 10);
                            else if (typeof object.requestId === "number")
                                message.requestId = object.requestId;
                            else if (typeof object.requestId === "object")
                                message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {cn.moxi.middle.bytecoder.Message} message Message
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Message.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.version = options.enums === String ? "VERSION_0_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.requestId = options.longs === String ? "0" : 0;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = options.enums === String ? $root.cn.moxi.middle.bytecoder.Version[message.version] === undefined ? message.version : $root.cn.moxi.middle.bytecoder.Version[message.version] : message.version;
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (typeof message.requestId === "number")
                                object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                            else
                                object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
                        return object;
                    };

                    /**
                     * Converts this Message to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Message.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Message
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.Message
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.Message";
                    };

                    return Message;
                })();

                bytecoder.Messagev1 = (function () {

                    /**
                     * Properties of a Messagev1.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessagev1
                     * @property {cn.moxi.middle.bytecoder.Version|null} [version] Messagev1 version
                     * @property {number|Long|null} [requestId] Messagev1 requestId
                     * @property {string|null} [method] Messagev1 method
                     * @property {string|null} [route] Messagev1 route
                     * @property {Uint8Array|null} [body] Messagev1 body
                     * @property {Object.<string,string>|null} [header] Messagev1 header
                     * @property {boolean|null} [responseHeader] Messagev1 responseHeader
                     */

                    /**
                     * Constructs a new Messagev1.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a Messagev1.
                     * @implements IMessagev1
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessagev1=} [properties] Properties to set
                     */
                    function Messagev1(properties) {
                        this.header = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Messagev1 version.
                     * @member {cn.moxi.middle.bytecoder.Version} version
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.version = 0;

                    /**
                     * Messagev1 requestId.
                     * @member {number|Long} requestId
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.requestId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Messagev1 method.
                     * @member {string} method
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.method = "";

                    /**
                     * Messagev1 route.
                     * @member {string} route
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.route = "";

                    /**
                     * Messagev1 body.
                     * @member {Uint8Array} body
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.body = $util.newBuffer([]);

                    /**
                     * Messagev1 header.
                     * @member {Object.<string,string>} header
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.header = $util.emptyObject;

                    /**
                     * Messagev1 responseHeader.
                     * @member {boolean} responseHeader
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     */
                    Messagev1.prototype.responseHeader = false;

                    /**
                     * Creates a new Messagev1 instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev1=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.Messagev1} Messagev1 instance
                     */
                    Messagev1.create = function create(properties) {
                        return new Messagev1(properties);
                    };

                    /**
                     * Encodes the specified Messagev1 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev1.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev1} message Messagev1 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev1.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
                        if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
                        if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.route);
                        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.body);
                        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                            for (let keys = Object.keys(message.header), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.header[keys[i]]).ldelim();
                        if (message.responseHeader != null && Object.hasOwnProperty.call(message, "responseHeader"))
                            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.responseHeader);
                        return writer;
                    };

                    /**
                     * Encodes the specified Messagev1 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev1.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev1} message Messagev1 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev1.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Messagev1 message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.Messagev1} Messagev1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev1.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.Messagev1(), key, value;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                                case 2: {
                                    message.requestId = reader.int64();
                                    break;
                                }
                                case 3: {
                                    message.method = reader.string();
                                    break;
                                }
                                case 4: {
                                    message.route = reader.string();
                                    break;
                                }
                                case 5: {
                                    message.body = reader.bytes();
                                    break;
                                }
                                case 6: {
                                    if (message.header === $util.emptyObject)
                                        message.header = {};
                                    let end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        let tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                        }
                                    }
                                    message.header[key] = value;
                                    break;
                                }
                                case 7: {
                                    message.responseHeader = reader.bool();
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Messagev1 message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.Messagev1} Messagev1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev1.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Messagev1 message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Messagev1.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            switch (message.version) {
                                default:
                                    return "version: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                            }
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                                return "requestId: integer|Long expected";
                        if (message.method != null && message.hasOwnProperty("method"))
                            if (!$util.isString(message.method))
                                return "method: string expected";
                        if (message.route != null && message.hasOwnProperty("route"))
                            if (!$util.isString(message.route))
                                return "route: string expected";
                        if (message.body != null && message.hasOwnProperty("body"))
                            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                                return "body: buffer expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            if (!$util.isObject(message.header))
                                return "header: object expected";
                            let key = Object.keys(message.header);
                            for (let i = 0; i < key.length; ++i)
                                if (!$util.isString(message.header[key[i]]))
                                    return "header: string{k:string} expected";
                        }
                        if (message.responseHeader != null && message.hasOwnProperty("responseHeader"))
                            if (typeof message.responseHeader !== "boolean")
                                return "responseHeader: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a Messagev1 message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.Messagev1} Messagev1
                     */
                    Messagev1.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.Messagev1)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.Messagev1();
                        switch (object.version) {
                            default:
                                if (typeof object.version === "number") {
                                    message.version = object.version;
                                    break;
                                }
                                break;
                            case "VERSION_0_UNSPECIFIED":
                            case 0:
                                message.version = 0;
                                break;
                            case "VERSION_1":
                            case 1:
                                message.version = 1;
                                break;
                            case "VERSION_2":
                            case 2:
                                message.version = 2;
                                break;
                            case "VERSION_CMD":
                            case 3:
                                message.version = 3;
                                break;
                        }
                        if (object.requestId != null)
                            if ($util.Long)
                                (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                            else if (typeof object.requestId === "string")
                                message.requestId = parseInt(object.requestId, 10);
                            else if (typeof object.requestId === "number")
                                message.requestId = object.requestId;
                            else if (typeof object.requestId === "object")
                                message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
                        if (object.method != null)
                            message.method = String(object.method);
                        if (object.route != null)
                            message.route = String(object.route);
                        if (object.body != null)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length >= 0)
                                message.body = object.body;
                        if (object.header) {
                            if (typeof object.header !== "object")
                                throw TypeError(".cn.moxi.middle.bytecoder.Messagev1.header: object expected");
                            message.header = {};
                            for (let keys = Object.keys(object.header), i = 0; i < keys.length; ++i)
                                message.header[keys[i]] = String(object.header[keys[i]]);
                        }
                        if (object.responseHeader != null)
                            message.responseHeader = Boolean(object.responseHeader);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Messagev1 message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {cn.moxi.middle.bytecoder.Messagev1} message Messagev1
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Messagev1.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.objects || options.defaults)
                            object.header = {};
                        if (options.defaults) {
                            object.version = options.enums === String ? "VERSION_0_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.requestId = options.longs === String ? "0" : 0;
                            object.method = "";
                            object.route = "";
                            if (options.bytes === String)
                                object.body = "";
                            else {
                                object.body = [];
                                if (options.bytes !== Array)
                                    object.body = $util.newBuffer(object.body);
                            }
                            object.responseHeader = false;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = options.enums === String ? $root.cn.moxi.middle.bytecoder.Version[message.version] === undefined ? message.version : $root.cn.moxi.middle.bytecoder.Version[message.version] : message.version;
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (typeof message.requestId === "number")
                                object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                            else
                                object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
                        if (message.method != null && message.hasOwnProperty("method"))
                            object.method = message.method;
                        if (message.route != null && message.hasOwnProperty("route"))
                            object.route = message.route;
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                        let keys2;
                        if (message.header && (keys2 = Object.keys(message.header)).length) {
                            object.header = {};
                            for (let j = 0; j < keys2.length; ++j)
                                object.header[keys2[j]] = message.header[keys2[j]];
                        }
                        if (message.responseHeader != null && message.hasOwnProperty("responseHeader"))
                            object.responseHeader = message.responseHeader;
                        return object;
                    };

                    /**
                     * Converts this Messagev1 to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Messagev1.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Messagev1
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.Messagev1
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Messagev1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.Messagev1";
                    };

                    return Messagev1;
                })();

                bytecoder.Messagev2 = (function () {

                    /**
                     * Properties of a Messagev2.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessagev2
                     * @property {cn.moxi.middle.bytecoder.Version|null} [version] Messagev2 version
                     * @property {number|Long|null} [requestId] Messagev2 requestId
                     * @property {number|null} [cmd] Messagev2 cmd
                     * @property {Uint8Array|null} [body] Messagev2 body
                     * @property {Object.<string,string>|null} [header] Messagev2 header
                     * @property {boolean|null} [responseHeader] Messagev2 responseHeader
                     */

                    /**
                     * Constructs a new Messagev2.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a Messagev2.
                     * @implements IMessagev2
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessagev2=} [properties] Properties to set
                     */
                    function Messagev2(properties) {
                        this.header = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Messagev2 version.
                     * @member {cn.moxi.middle.bytecoder.Version} version
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.version = 0;

                    /**
                     * Messagev2 requestId.
                     * @member {number|Long} requestId
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.requestId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Messagev2 cmd.
                     * @member {number} cmd
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.cmd = 0;

                    /**
                     * Messagev2 body.
                     * @member {Uint8Array} body
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.body = $util.newBuffer([]);

                    /**
                     * Messagev2 header.
                     * @member {Object.<string,string>} header
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.header = $util.emptyObject;

                    /**
                     * Messagev2 responseHeader.
                     * @member {boolean} responseHeader
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     */
                    Messagev2.prototype.responseHeader = false;

                    /**
                     * Creates a new Messagev2 instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev2=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.Messagev2} Messagev2 instance
                     */
                    Messagev2.create = function create(properties) {
                        return new Messagev2(properties);
                    };

                    /**
                     * Encodes the specified Messagev2 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev2.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev2} message Messagev2 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev2.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
                        if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cmd);
                        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.body);
                        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                            for (let keys = Object.keys(message.header), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.header[keys[i]]).ldelim();
                        if (message.responseHeader != null && Object.hasOwnProperty.call(message, "responseHeader"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.responseHeader);
                        return writer;
                    };

                    /**
                     * Encodes the specified Messagev2 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev2.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev2} message Messagev2 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev2.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Messagev2 message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.Messagev2} Messagev2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev2.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.Messagev2(), key, value;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                                case 2: {
                                    message.requestId = reader.int64();
                                    break;
                                }
                                case 3: {
                                    message.cmd = reader.int32();
                                    break;
                                }
                                case 4: {
                                    message.body = reader.bytes();
                                    break;
                                }
                                case 5: {
                                    if (message.header === $util.emptyObject)
                                        message.header = {};
                                    let end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        let tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                        }
                                    }
                                    message.header[key] = value;
                                    break;
                                }
                                case 6: {
                                    message.responseHeader = reader.bool();
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Messagev2 message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.Messagev2} Messagev2
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev2.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Messagev2 message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Messagev2.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            switch (message.version) {
                                default:
                                    return "version: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                            }
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                                return "requestId: integer|Long expected";
                        if (message.cmd != null && message.hasOwnProperty("cmd"))
                            if (!$util.isInteger(message.cmd))
                                return "cmd: integer expected";
                        if (message.body != null && message.hasOwnProperty("body"))
                            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                                return "body: buffer expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            if (!$util.isObject(message.header))
                                return "header: object expected";
                            let key = Object.keys(message.header);
                            for (let i = 0; i < key.length; ++i)
                                if (!$util.isString(message.header[key[i]]))
                                    return "header: string{k:string} expected";
                        }
                        if (message.responseHeader != null && message.hasOwnProperty("responseHeader"))
                            if (typeof message.responseHeader !== "boolean")
                                return "responseHeader: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a Messagev2 message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.Messagev2} Messagev2
                     */
                    Messagev2.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.Messagev2)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.Messagev2();
                        switch (object.version) {
                            default:
                                if (typeof object.version === "number") {
                                    message.version = object.version;
                                    break;
                                }
                                break;
                            case "VERSION_0_UNSPECIFIED":
                            case 0:
                                message.version = 0;
                                break;
                            case "VERSION_1":
                            case 1:
                                message.version = 1;
                                break;
                            case "VERSION_2":
                            case 2:
                                message.version = 2;
                                break;
                            case "VERSION_CMD":
                            case 3:
                                message.version = 3;
                                break;
                        }
                        if (object.requestId != null)
                            if ($util.Long)
                                (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                            else if (typeof object.requestId === "string")
                                message.requestId = parseInt(object.requestId, 10);
                            else if (typeof object.requestId === "number")
                                message.requestId = object.requestId;
                            else if (typeof object.requestId === "object")
                                message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
                        if (object.cmd != null)
                            message.cmd = object.cmd | 0;
                        if (object.body != null)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length >= 0)
                                message.body = object.body;
                        if (object.header) {
                            if (typeof object.header !== "object")
                                throw TypeError(".cn.moxi.middle.bytecoder.Messagev2.header: object expected");
                            message.header = {};
                            for (let keys = Object.keys(object.header), i = 0; i < keys.length; ++i)
                                message.header[keys[i]] = String(object.header[keys[i]]);
                        }
                        if (object.responseHeader != null)
                            message.responseHeader = Boolean(object.responseHeader);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Messagev2 message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {cn.moxi.middle.bytecoder.Messagev2} message Messagev2
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Messagev2.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.objects || options.defaults)
                            object.header = {};
                        if (options.defaults) {
                            object.version = options.enums === String ? "VERSION_0_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.requestId = options.longs === String ? "0" : 0;
                            object.cmd = 0;
                            if (options.bytes === String)
                                object.body = "";
                            else {
                                object.body = [];
                                if (options.bytes !== Array)
                                    object.body = $util.newBuffer(object.body);
                            }
                            object.responseHeader = false;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = options.enums === String ? $root.cn.moxi.middle.bytecoder.Version[message.version] === undefined ? message.version : $root.cn.moxi.middle.bytecoder.Version[message.version] : message.version;
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (typeof message.requestId === "number")
                                object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                            else
                                object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
                        if (message.cmd != null && message.hasOwnProperty("cmd"))
                            object.cmd = message.cmd;
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                        let keys2;
                        if (message.header && (keys2 = Object.keys(message.header)).length) {
                            object.header = {};
                            for (let j = 0; j < keys2.length; ++j)
                                object.header[keys2[j]] = message.header[keys2[j]];
                        }
                        if (message.responseHeader != null && message.hasOwnProperty("responseHeader"))
                            object.responseHeader = message.responseHeader;
                        return object;
                    };

                    /**
                     * Converts this Messagev2 to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Messagev2.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Messagev2
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.Messagev2
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Messagev2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.Messagev2";
                    };

                    return Messagev2;
                })();

                /**
                 * MsgLocalCmd enum.
                 * @name cn.moxi.middle.bytecoder.MsgLocalCmd
                 * @enum {number}
                 * @property {number} MSG_LOCAL_CMD_NOT_UNSPECIFIED=0 MSG_LOCAL_CMD_NOT_UNSPECIFIED value
                 * @property {number} MSG_LOCAL_CMD_WS_ACCEPT=801 MSG_LOCAL_CMD_WS_ACCEPT value
                 * @property {number} MSG_LOCAL_CMD_WS_WAIT=802 MSG_LOCAL_CMD_WS_WAIT value
                 * @property {number} MSG_LOCAL_CMD_WS_CLOSE=803 MSG_LOCAL_CMD_WS_CLOSE value
                 * @property {number} MSG_LOCAL_CMD_WS_REQ=810 MSG_LOCAL_CMD_WS_REQ value
                 * @property {number} MSG_LOCAL_CMD_WS_RESP=811 MSG_LOCAL_CMD_WS_RESP value
                 */
                bytecoder.MsgLocalCmd = (function () {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "MSG_LOCAL_CMD_NOT_UNSPECIFIED"] = 0;
                    values[valuesById[801] = "MSG_LOCAL_CMD_WS_ACCEPT"] = 801;
                    values[valuesById[802] = "MSG_LOCAL_CMD_WS_WAIT"] = 802;
                    values[valuesById[803] = "MSG_LOCAL_CMD_WS_CLOSE"] = 803;
                    values[valuesById[810] = "MSG_LOCAL_CMD_WS_REQ"] = 810;
                    values[valuesById[811] = "MSG_LOCAL_CMD_WS_RESP"] = 811;
                    return values;
                })();

                bytecoder.MessageCMD = (function () {

                    /**
                     * Properties of a MessageCMD.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessageCMD
                     * @property {cn.moxi.middle.bytecoder.Version|null} [version] MessageCMD version
                     * @property {number|Long|null} [requestId] MessageCMD requestId
                     * @property {cn.moxi.middle.bytecoder.MsgLocalCmd|null} [cmd] MessageCMD cmd
                     * @property {Uint8Array|null} [body] MessageCMD body
                     */

                    /**
                     * Constructs a new MessageCMD.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a MessageCMD.
                     * @implements IMessageCMD
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessageCMD=} [properties] Properties to set
                     */
                    function MessageCMD(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MessageCMD version.
                     * @member {cn.moxi.middle.bytecoder.Version} version
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @instance
                     */
                    MessageCMD.prototype.version = 0;

                    /**
                     * MessageCMD requestId.
                     * @member {number|Long} requestId
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @instance
                     */
                    MessageCMD.prototype.requestId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * MessageCMD cmd.
                     * @member {cn.moxi.middle.bytecoder.MsgLocalCmd} cmd
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @instance
                     */
                    MessageCMD.prototype.cmd = 0;

                    /**
                     * MessageCMD body.
                     * @member {Uint8Array} body
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @instance
                     */
                    MessageCMD.prototype.body = $util.newBuffer([]);

                    /**
                     * Creates a new MessageCMD instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageCMD=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.MessageCMD} MessageCMD instance
                     */
                    MessageCMD.create = function create(properties) {
                        return new MessageCMD(properties);
                    };

                    /**
                     * Encodes the specified MessageCMD message. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageCMD.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageCMD} message MessageCMD message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageCMD.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
                        if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cmd);
                        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.body);
                        return writer;
                    };

                    /**
                     * Encodes the specified MessageCMD message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageCMD.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageCMD} message MessageCMD message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageCMD.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MessageCMD message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.MessageCMD} MessageCMD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageCMD.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.MessageCMD();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                                case 2: {
                                    message.requestId = reader.int64();
                                    break;
                                }
                                case 3: {
                                    message.cmd = reader.int32();
                                    break;
                                }
                                case 4: {
                                    message.body = reader.bytes();
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MessageCMD message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.MessageCMD} MessageCMD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageCMD.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MessageCMD message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MessageCMD.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            switch (message.version) {
                                default:
                                    return "version: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                            }
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                                return "requestId: integer|Long expected";
                        if (message.cmd != null && message.hasOwnProperty("cmd"))
                            switch (message.cmd) {
                                default:
                                    return "cmd: enum value expected";
                                case 0:
                                case 801:
                                case 802:
                                case 803:
                                case 810:
                                case 811:
                                    break;
                            }
                        if (message.body != null && message.hasOwnProperty("body"))
                            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                                return "body: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a MessageCMD message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.MessageCMD} MessageCMD
                     */
                    MessageCMD.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.MessageCMD)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.MessageCMD();
                        switch (object.version) {
                            default:
                                if (typeof object.version === "number") {
                                    message.version = object.version;
                                    break;
                                }
                                break;
                            case "VERSION_0_UNSPECIFIED":
                            case 0:
                                message.version = 0;
                                break;
                            case "VERSION_1":
                            case 1:
                                message.version = 1;
                                break;
                            case "VERSION_2":
                            case 2:
                                message.version = 2;
                                break;
                            case "VERSION_CMD":
                            case 3:
                                message.version = 3;
                                break;
                        }
                        if (object.requestId != null)
                            if ($util.Long)
                                (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                            else if (typeof object.requestId === "string")
                                message.requestId = parseInt(object.requestId, 10);
                            else if (typeof object.requestId === "number")
                                message.requestId = object.requestId;
                            else if (typeof object.requestId === "object")
                                message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
                        switch (object.cmd) {
                            default:
                                if (typeof object.cmd === "number") {
                                    message.cmd = object.cmd;
                                    break;
                                }
                                break;
                            case "MSG_LOCAL_CMD_NOT_UNSPECIFIED":
                            case 0:
                                message.cmd = 0;
                                break;
                            case "MSG_LOCAL_CMD_WS_ACCEPT":
                            case 801:
                                message.cmd = 801;
                                break;
                            case "MSG_LOCAL_CMD_WS_WAIT":
                            case 802:
                                message.cmd = 802;
                                break;
                            case "MSG_LOCAL_CMD_WS_CLOSE":
                            case 803:
                                message.cmd = 803;
                                break;
                            case "MSG_LOCAL_CMD_WS_REQ":
                            case 810:
                                message.cmd = 810;
                                break;
                            case "MSG_LOCAL_CMD_WS_RESP":
                            case 811:
                                message.cmd = 811;
                                break;
                        }
                        if (object.body != null)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length >= 0)
                                message.body = object.body;
                        return message;
                    };

                    /**
                     * Creates a plain object from a MessageCMD message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {cn.moxi.middle.bytecoder.MessageCMD} message MessageCMD
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MessageCMD.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.version = options.enums === String ? "VERSION_0_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.requestId = options.longs === String ? "0" : 0;
                            object.cmd = options.enums === String ? "MSG_LOCAL_CMD_NOT_UNSPECIFIED" : 0;
                            if (options.bytes === String)
                                object.body = "";
                            else {
                                object.body = [];
                                if (options.bytes !== Array)
                                    object.body = $util.newBuffer(object.body);
                            }
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = options.enums === String ? $root.cn.moxi.middle.bytecoder.Version[message.version] === undefined ? message.version : $root.cn.moxi.middle.bytecoder.Version[message.version] : message.version;
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (typeof message.requestId === "number")
                                object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                            else
                                object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
                        if (message.cmd != null && message.hasOwnProperty("cmd"))
                            object.cmd = options.enums === String ? $root.cn.moxi.middle.bytecoder.MsgLocalCmd[message.cmd] === undefined ? message.cmd : $root.cn.moxi.middle.bytecoder.MsgLocalCmd[message.cmd] : message.cmd;
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                        return object;
                    };

                    /**
                     * Converts this MessageCMD to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MessageCMD.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for MessageCMD
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.MessageCMD
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    MessageCMD.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.MessageCMD";
                    };

                    return MessageCMD;
                })();

                bytecoder.Messagev0 = (function () {

                    /**
                     * Properties of a Messagev0.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessagev0
                     * @property {cn.moxi.middle.bytecoder.Version|null} [version] Messagev0 version
                     * @property {number|Long|null} [requestId] Messagev0 requestId
                     * @property {number|null} [code] Messagev0 code
                     * @property {Uint8Array|null} [message] Messagev0 message
                     * @property {Object.<string,string>|null} [header] Messagev0 header
                     */

                    /**
                     * Constructs a new Messagev0.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a Messagev0.
                     * @implements IMessagev0
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessagev0=} [properties] Properties to set
                     */
                    function Messagev0(properties) {
                        this.header = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Messagev0 version.
                     * @member {cn.moxi.middle.bytecoder.Version} version
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     */
                    Messagev0.prototype.version = 0;

                    /**
                     * Messagev0 requestId.
                     * @member {number|Long} requestId
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     */
                    Messagev0.prototype.requestId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Messagev0 code.
                     * @member {number} code
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     */
                    Messagev0.prototype.code = 0;

                    /**
                     * Messagev0 message.
                     * @member {Uint8Array} message
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     */
                    Messagev0.prototype.message = $util.newBuffer([]);

                    /**
                     * Messagev0 header.
                     * @member {Object.<string,string>} header
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     */
                    Messagev0.prototype.header = $util.emptyObject;

                    /**
                     * Creates a new Messagev0 instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev0=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.Messagev0} Messagev0 instance
                     */
                    Messagev0.create = function create(properties) {
                        return new Messagev0(properties);
                    };

                    /**
                     * Encodes the specified Messagev0 message. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev0.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev0} message Messagev0 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev0.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.requestId);
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
                        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                            for (let keys = Object.keys(message.header), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.header[keys[i]]).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Messagev0 message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.Messagev0.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessagev0} message Messagev0 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Messagev0.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Messagev0 message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.Messagev0} Messagev0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev0.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.Messagev0(), key, value;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                                case 2: {
                                    message.requestId = reader.int64();
                                    break;
                                }
                                case 3: {
                                    message.code = reader.int32();
                                    break;
                                }
                                case 4: {
                                    message.message = reader.bytes();
                                    break;
                                }
                                case 5: {
                                    if (message.header === $util.emptyObject)
                                        message.header = {};
                                    let end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        let tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                        }
                                    }
                                    message.header[key] = value;
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Messagev0 message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.Messagev0} Messagev0
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Messagev0.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Messagev0 message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Messagev0.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            switch (message.version) {
                                default:
                                    return "version: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                            }
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (!$util.isInteger(message.requestId) && !(message.requestId && $util.isInteger(message.requestId.low) && $util.isInteger(message.requestId.high)))
                                return "requestId: integer|Long expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isInteger(message.code))
                                return "code: integer expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                                return "message: buffer expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            if (!$util.isObject(message.header))
                                return "header: object expected";
                            let key = Object.keys(message.header);
                            for (let i = 0; i < key.length; ++i)
                                if (!$util.isString(message.header[key[i]]))
                                    return "header: string{k:string} expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Messagev0 message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.Messagev0} Messagev0
                     */
                    Messagev0.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.Messagev0)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.Messagev0();
                        switch (object.version) {
                            default:
                                if (typeof object.version === "number") {
                                    message.version = object.version;
                                    break;
                                }
                                break;
                            case "VERSION_0_UNSPECIFIED":
                            case 0:
                                message.version = 0;
                                break;
                            case "VERSION_1":
                            case 1:
                                message.version = 1;
                                break;
                            case "VERSION_2":
                            case 2:
                                message.version = 2;
                                break;
                            case "VERSION_CMD":
                            case 3:
                                message.version = 3;
                                break;
                        }
                        if (object.requestId != null)
                            if ($util.Long)
                                (message.requestId = $util.Long.fromValue(object.requestId)).unsigned = false;
                            else if (typeof object.requestId === "string")
                                message.requestId = parseInt(object.requestId, 10);
                            else if (typeof object.requestId === "number")
                                message.requestId = object.requestId;
                            else if (typeof object.requestId === "object")
                                message.requestId = new $util.LongBits(object.requestId.low >>> 0, object.requestId.high >>> 0).toNumber();
                        if (object.code != null)
                            message.code = object.code | 0;
                        if (object.message != null)
                            if (typeof object.message === "string")
                                $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                            else if (object.message.length >= 0)
                                message.message = object.message;
                        if (object.header) {
                            if (typeof object.header !== "object")
                                throw TypeError(".cn.moxi.middle.bytecoder.Messagev0.header: object expected");
                            message.header = {};
                            for (let keys = Object.keys(object.header), i = 0; i < keys.length; ++i)
                                message.header[keys[i]] = String(object.header[keys[i]]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Messagev0 message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {cn.moxi.middle.bytecoder.Messagev0} message Messagev0
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Messagev0.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.objects || options.defaults)
                            object.header = {};
                        if (options.defaults) {
                            object.version = options.enums === String ? "VERSION_0_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.requestId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.requestId = options.longs === String ? "0" : 0;
                            object.code = 0;
                            if (options.bytes === String)
                                object.message = "";
                            else {
                                object.message = [];
                                if (options.bytes !== Array)
                                    object.message = $util.newBuffer(object.message);
                            }
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = options.enums === String ? $root.cn.moxi.middle.bytecoder.Version[message.version] === undefined ? message.version : $root.cn.moxi.middle.bytecoder.Version[message.version] : message.version;
                        if (message.requestId != null && message.hasOwnProperty("requestId"))
                            if (typeof message.requestId === "number")
                                object.requestId = options.longs === String ? String(message.requestId) : message.requestId;
                            else
                                object.requestId = options.longs === String ? $util.Long.prototype.toString.call(message.requestId) : options.longs === Number ? new $util.LongBits(message.requestId.low >>> 0, message.requestId.high >>> 0).toNumber() : message.requestId;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
                        let keys2;
                        if (message.header && (keys2 = Object.keys(message.header)).length) {
                            object.header = {};
                            for (let j = 0; j < keys2.length; ++j)
                                object.header[keys2[j]] = message.header[keys2[j]];
                        }
                        return object;
                    };

                    /**
                     * Converts this Messagev0 to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Messagev0.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Messagev0
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.Messagev0
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Messagev0.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.Messagev0";
                    };

                    return Messagev0;
                })();

                bytecoder.MessageWaitInfo = (function () {

                    /**
                     * Properties of a MessageWaitInfo.
                     * @memberof cn.moxi.middle.bytecoder
                     * @interface IMessageWaitInfo
                     * @property {number|Long|null} [self] MessageWaitInfo self
                     * @property {number|Long|null} [total] MessageWaitInfo total
                     */

                    /**
                     * Constructs a new MessageWaitInfo.
                     * @memberof cn.moxi.middle.bytecoder
                     * @classdesc Represents a MessageWaitInfo.
                     * @implements IMessageWaitInfo
                     * @constructor
                     * @param {cn.moxi.middle.bytecoder.IMessageWaitInfo=} [properties] Properties to set
                     */
                    function MessageWaitInfo(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MessageWaitInfo self.
                     * @member {number|Long} self
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @instance
                     */
                    MessageWaitInfo.prototype.self = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * MessageWaitInfo total.
                     * @member {number|Long} total
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @instance
                     */
                    MessageWaitInfo.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

                    /**
                     * Creates a new MessageWaitInfo instance using the specified properties.
                     * @function create
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageWaitInfo=} [properties] Properties to set
                     * @returns {cn.moxi.middle.bytecoder.MessageWaitInfo} MessageWaitInfo instance
                     */
                    MessageWaitInfo.create = function create(properties) {
                        return new MessageWaitInfo(properties);
                    };

                    /**
                     * Encodes the specified MessageWaitInfo message. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageWaitInfo.verify|verify} messages.
                     * @function encode
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageWaitInfo} message MessageWaitInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageWaitInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.self);
                        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.total);
                        return writer;
                    };

                    /**
                     * Encodes the specified MessageWaitInfo message, length delimited. Does not implicitly {@link cn.moxi.middle.bytecoder.MessageWaitInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {cn.moxi.middle.bytecoder.IMessageWaitInfo} message MessageWaitInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageWaitInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MessageWaitInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {cn.moxi.middle.bytecoder.MessageWaitInfo} MessageWaitInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageWaitInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cn.moxi.middle.bytecoder.MessageWaitInfo();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1: {
                                    message.self = reader.int64();
                                    break;
                                }
                                case 2: {
                                    message.total = reader.int64();
                                    break;
                                }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MessageWaitInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {cn.moxi.middle.bytecoder.MessageWaitInfo} MessageWaitInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageWaitInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MessageWaitInfo message.
                     * @function verify
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MessageWaitInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.self != null && message.hasOwnProperty("self"))
                            if (!$util.isInteger(message.self) && !(message.self && $util.isInteger(message.self.low) && $util.isInteger(message.self.high)))
                                return "self: integer|Long expected";
                        if (message.total != null && message.hasOwnProperty("total"))
                            if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                                return "total: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a MessageWaitInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {cn.moxi.middle.bytecoder.MessageWaitInfo} MessageWaitInfo
                     */
                    MessageWaitInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.cn.moxi.middle.bytecoder.MessageWaitInfo)
                            return object;
                        let message = new $root.cn.moxi.middle.bytecoder.MessageWaitInfo();
                        if (object.self != null)
                            if ($util.Long)
                                (message.self = $util.Long.fromValue(object.self)).unsigned = false;
                            else if (typeof object.self === "string")
                                message.self = parseInt(object.self, 10);
                            else if (typeof object.self === "number")
                                message.self = object.self;
                            else if (typeof object.self === "object")
                                message.self = new $util.LongBits(object.self.low >>> 0, object.self.high >>> 0).toNumber();
                        if (object.total != null)
                            if ($util.Long)
                                (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                            else if (typeof object.total === "string")
                                message.total = parseInt(object.total, 10);
                            else if (typeof object.total === "number")
                                message.total = object.total;
                            else if (typeof object.total === "object")
                                message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a MessageWaitInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {cn.moxi.middle.bytecoder.MessageWaitInfo} message MessageWaitInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MessageWaitInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.self = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.self = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.total = options.longs === String ? "0" : 0;
                        }
                        if (message.self != null && message.hasOwnProperty("self"))
                            if (typeof message.self === "number")
                                object.self = options.longs === String ? String(message.self) : message.self;
                            else
                                object.self = options.longs === String ? $util.Long.prototype.toString.call(message.self) : options.longs === Number ? new $util.LongBits(message.self.low >>> 0, message.self.high >>> 0).toNumber() : message.self;
                        if (message.total != null && message.hasOwnProperty("total"))
                            if (typeof message.total === "number")
                                object.total = options.longs === String ? String(message.total) : message.total;
                            else
                                object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
                        return object;
                    };

                    /**
                     * Converts this MessageWaitInfo to JSON.
                     * @function toJSON
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MessageWaitInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for MessageWaitInfo
                     * @function getTypeUrl
                     * @memberof cn.moxi.middle.bytecoder.MessageWaitInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    MessageWaitInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/cn.moxi.middle.bytecoder.MessageWaitInfo";
                    };

                    return MessageWaitInfo;
                })();

                return bytecoder;
            })();

            return middle;
        })();

        return moxi;
    })();

    return cn;
})();

export { $root as default };
