"use strict";
// source: broker.proto
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
goog.exportSymbol('proto.proto.ConnInfo', null, global);
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
proto.proto.ConnInfo = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConnInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.ConnInfo.displayName = 'proto.proto.ConnInfo';
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
    proto.proto.ConnInfo.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.ConnInfo.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.ConnInfo} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.ConnInfo.toObject = function (includeInstance, msg) {
        var f, obj = {
            serviceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
            network: jspb.Message.getFieldWithDefault(msg, 2, ""),
            address: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.proto.ConnInfo}
 */
proto.proto.ConnInfo.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.ConnInfo;
    return proto.proto.ConnInfo.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConnInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConnInfo}
 */
proto.proto.ConnInfo.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setServiceId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setNetwork(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setAddress(value);
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
proto.proto.ConnInfo.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.ConnInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConnInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConnInfo.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getServiceId();
    if (f !== 0) {
        writer.writeUint32(1, f);
    }
    f = message.getNetwork();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getAddress();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
};
/**
 * optional uint32 service_id = 1;
 * @return {number}
 */
proto.proto.ConnInfo.prototype.getServiceId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.ConnInfo} returns this
 */
proto.proto.ConnInfo.prototype.setServiceId = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string network = 2;
 * @return {string}
 */
proto.proto.ConnInfo.prototype.getNetwork = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/**
 * @param {string} value
 * @return {!proto.proto.ConnInfo} returns this
 */
proto.proto.ConnInfo.prototype.setNetwork = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string address = 3;
 * @return {string}
 */
proto.proto.ConnInfo.prototype.getAddress = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/**
 * @param {string} value
 * @return {!proto.proto.ConnInfo} returns this
 */
proto.proto.ConnInfo.prototype.setAddress = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
};
goog.object.extend(exports, proto.proto);
