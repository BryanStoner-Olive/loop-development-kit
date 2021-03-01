"use strict";
// source: cursor.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var session_pb = require('./session_pb.js');
goog.object.extend(proto, session_pb);
goog.exportSymbol('proto.proto.CursorPositionRequest', null, global);
goog.exportSymbol('proto.proto.CursorPositionResponse', null, global);
goog.exportSymbol('proto.proto.CursorPositionStreamRequest', null, global);
goog.exportSymbol('proto.proto.CursorPositionStreamResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CursorPositionRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CursorPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.CursorPositionRequest.displayName = 'proto.proto.CursorPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CursorPositionResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CursorPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.CursorPositionResponse.displayName = 'proto.proto.CursorPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CursorPositionStreamRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CursorPositionStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.CursorPositionStreamRequest.displayName = 'proto.proto.CursorPositionStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.CursorPositionStreamResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CursorPositionStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.CursorPositionStreamResponse.displayName = 'proto.proto.CursorPositionStreamResponse';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.CursorPositionRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.CursorPositionRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.CursorPositionRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.CursorPositionRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            session: (f = msg.getSession()) && session_pb.Session.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CursorPositionRequest}
 */
proto.proto.CursorPositionRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.CursorPositionRequest;
    return proto.proto.CursorPositionRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CursorPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CursorPositionRequest}
 */
proto.proto.CursorPositionRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new session_pb.Session;
                reader.readMessage(value, session_pb.Session.deserializeBinaryFromReader);
                msg.setSession(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CursorPositionRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.CursorPositionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CursorPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CursorPositionRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSession();
    if (f != null) {
        writer.writeMessage(1, f, session_pb.Session.serializeBinaryToWriter);
    }
};
/**
 * optional Session session = 1;
 * @return {?proto.proto.Session}
 */
proto.proto.CursorPositionRequest.prototype.getSession = function () {
    return /** @type{?proto.proto.Session} */ (jspb.Message.getWrapperField(this, session_pb.Session, 1));
};
/**
 * @param {?proto.proto.Session|undefined} value
 * @return {!proto.proto.CursorPositionRequest} returns this
*/
proto.proto.CursorPositionRequest.prototype.setSession = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CursorPositionRequest} returns this
 */
proto.proto.CursorPositionRequest.prototype.clearSession = function () {
    return this.setSession(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CursorPositionRequest.prototype.hasSession = function () {
    return jspb.Message.getField(this, 1) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.CursorPositionResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.CursorPositionResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.CursorPositionResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.CursorPositionResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            x: jspb.Message.getFieldWithDefault(msg, 1, 0),
            y: jspb.Message.getFieldWithDefault(msg, 2, 0),
            screen: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CursorPositionResponse}
 */
proto.proto.CursorPositionResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.CursorPositionResponse;
    return proto.proto.CursorPositionResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CursorPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CursorPositionResponse}
 */
proto.proto.CursorPositionResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setX(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setY(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setScreen(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CursorPositionResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.CursorPositionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CursorPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CursorPositionResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getX();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getY();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
    f = message.getScreen();
    if (f !== 0) {
        writer.writeUint32(3, f);
    }
};
/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.proto.CursorPositionResponse.prototype.getX = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionResponse} returns this
 */
proto.proto.CursorPositionResponse.prototype.setX = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.proto.CursorPositionResponse.prototype.getY = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionResponse} returns this
 */
proto.proto.CursorPositionResponse.prototype.setY = function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional uint32 screen = 3;
 * @return {number}
 */
proto.proto.CursorPositionResponse.prototype.getScreen = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionResponse} returns this
 */
proto.proto.CursorPositionResponse.prototype.setScreen = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.CursorPositionStreamRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.CursorPositionStreamRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.CursorPositionStreamRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.CursorPositionStreamRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            session: (f = msg.getSession()) && session_pb.Session.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CursorPositionStreamRequest}
 */
proto.proto.CursorPositionStreamRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.CursorPositionStreamRequest;
    return proto.proto.CursorPositionStreamRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CursorPositionStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CursorPositionStreamRequest}
 */
proto.proto.CursorPositionStreamRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new session_pb.Session;
                reader.readMessage(value, session_pb.Session.deserializeBinaryFromReader);
                msg.setSession(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CursorPositionStreamRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.CursorPositionStreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CursorPositionStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CursorPositionStreamRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSession();
    if (f != null) {
        writer.writeMessage(1, f, session_pb.Session.serializeBinaryToWriter);
    }
};
/**
 * optional Session session = 1;
 * @return {?proto.proto.Session}
 */
proto.proto.CursorPositionStreamRequest.prototype.getSession = function () {
    return /** @type{?proto.proto.Session} */ (jspb.Message.getWrapperField(this, session_pb.Session, 1));
};
/**
 * @param {?proto.proto.Session|undefined} value
 * @return {!proto.proto.CursorPositionStreamRequest} returns this
*/
proto.proto.CursorPositionStreamRequest.prototype.setSession = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CursorPositionStreamRequest} returns this
 */
proto.proto.CursorPositionStreamRequest.prototype.clearSession = function () {
    return this.setSession(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CursorPositionStreamRequest.prototype.hasSession = function () {
    return jspb.Message.getField(this, 1) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.CursorPositionStreamResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.CursorPositionStreamResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.CursorPositionStreamResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.CursorPositionStreamResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            x: jspb.Message.getFieldWithDefault(msg, 1, 0),
            y: jspb.Message.getFieldWithDefault(msg, 2, 0),
            screen: jspb.Message.getFieldWithDefault(msg, 3, 0),
            error: jspb.Message.getFieldWithDefault(msg, 15, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.CursorPositionStreamResponse}
 */
proto.proto.CursorPositionStreamResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.CursorPositionStreamResponse;
    return proto.proto.CursorPositionStreamResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CursorPositionStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CursorPositionStreamResponse}
 */
proto.proto.CursorPositionStreamResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setX(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setY(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setScreen(value);
                break;
            case 15:
                var value = /** @type {string} */ (reader.readString());
                msg.setError(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.CursorPositionStreamResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.CursorPositionStreamResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CursorPositionStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CursorPositionStreamResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getX();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getY();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
    f = message.getScreen();
    if (f !== 0) {
        writer.writeUint32(3, f);
    }
    f = message.getError();
    if (f.length > 0) {
        writer.writeString(15, f);
    }
};
/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.proto.CursorPositionStreamResponse.prototype.getX = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionStreamResponse} returns this
 */
proto.proto.CursorPositionStreamResponse.prototype.setX = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.proto.CursorPositionStreamResponse.prototype.getY = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionStreamResponse} returns this
 */
proto.proto.CursorPositionStreamResponse.prototype.setY = function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional uint32 screen = 3;
 * @return {number}
 */
proto.proto.CursorPositionStreamResponse.prototype.getScreen = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.CursorPositionStreamResponse} returns this
 */
proto.proto.CursorPositionStreamResponse.prototype.setScreen = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional string error = 15;
 * @return {string}
 */
proto.proto.CursorPositionStreamResponse.prototype.getError = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};
/**
 * @param {string} value
 * @return {!proto.proto.CursorPositionStreamResponse} returns this
 */
proto.proto.CursorPositionStreamResponse.prototype.setError = function (value) {
    return jspb.Message.setProto3StringField(this, 15, value);
};
goog.object.extend(exports, proto.proto);
