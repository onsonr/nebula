// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/crypto/keyring/v1/record.proto (package cosmos.crypto.keyring.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { BIP44Params } from "../../hd/v1/hd_pb.js";

/**
 * Record is used for representing a key in the keyring.
 *
 * @generated from message cosmos.crypto.keyring.v1.Record
 */
export class Record extends Message<Record> {
  /**
   * name represents a name of Record
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * pub_key represents a public key in any format
   *
   * @generated from field: google.protobuf.Any pub_key = 2;
   */
  pubKey?: Any;

  /**
   * Record contains one of the following items
   *
   * @generated from oneof cosmos.crypto.keyring.v1.Record.item
   */
  item: {
    /**
     * local stores the private key locally.
     *
     * @generated from field: cosmos.crypto.keyring.v1.Record.Local local = 3;
     */
    value: Record_Local;
    case: "local";
  } | {
    /**
     * ledger stores the information about a Ledger key.
     *
     * @generated from field: cosmos.crypto.keyring.v1.Record.Ledger ledger = 4;
     */
    value: Record_Ledger;
    case: "ledger";
  } | {
    /**
     * Multi does not store any other information.
     *
     * @generated from field: cosmos.crypto.keyring.v1.Record.Multi multi = 5;
     */
    value: Record_Multi;
    case: "multi";
  } | {
    /**
     * Offline does not store any other information.
     *
     * @generated from field: cosmos.crypto.keyring.v1.Record.Offline offline = 6;
     */
    value: Record_Offline;
    case: "offline";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Record>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.keyring.v1.Record";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: Any },
    { no: 3, name: "local", kind: "message", T: Record_Local, oneof: "item" },
    { no: 4, name: "ledger", kind: "message", T: Record_Ledger, oneof: "item" },
    { no: 5, name: "multi", kind: "message", T: Record_Multi, oneof: "item" },
    { no: 6, name: "offline", kind: "message", T: Record_Offline, oneof: "item" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record {
    return new Record().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record {
    return new Record().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record {
    return new Record().fromJsonString(jsonString, options);
  }

  static equals(a: Record | PlainMessage<Record> | undefined, b: Record | PlainMessage<Record> | undefined): boolean {
    return proto3.util.equals(Record, a, b);
  }
}

/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Local
 */
export class Record_Local extends Message<Record_Local> {
  /**
   * @generated from field: google.protobuf.Any priv_key = 1;
   */
  privKey?: Any;

  constructor(data?: PartialMessage<Record_Local>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.keyring.v1.Record.Local";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "priv_key", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Local {
    return new Record_Local().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Local {
    return new Record_Local().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Local {
    return new Record_Local().fromJsonString(jsonString, options);
  }

  static equals(a: Record_Local | PlainMessage<Record_Local> | undefined, b: Record_Local | PlainMessage<Record_Local> | undefined): boolean {
    return proto3.util.equals(Record_Local, a, b);
  }
}

/**
 * Ledger item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Ledger
 */
export class Record_Ledger extends Message<Record_Ledger> {
  /**
   * @generated from field: cosmos.crypto.hd.v1.BIP44Params path = 1;
   */
  path?: BIP44Params;

  constructor(data?: PartialMessage<Record_Ledger>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.keyring.v1.Record.Ledger";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "message", T: BIP44Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Ledger {
    return new Record_Ledger().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Ledger {
    return new Record_Ledger().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Ledger {
    return new Record_Ledger().fromJsonString(jsonString, options);
  }

  static equals(a: Record_Ledger | PlainMessage<Record_Ledger> | undefined, b: Record_Ledger | PlainMessage<Record_Ledger> | undefined): boolean {
    return proto3.util.equals(Record_Ledger, a, b);
  }
}

/**
 * Multi item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Multi
 */
export class Record_Multi extends Message<Record_Multi> {
  constructor(data?: PartialMessage<Record_Multi>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.keyring.v1.Record.Multi";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Multi {
    return new Record_Multi().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Multi {
    return new Record_Multi().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Multi {
    return new Record_Multi().fromJsonString(jsonString, options);
  }

  static equals(a: Record_Multi | PlainMessage<Record_Multi> | undefined, b: Record_Multi | PlainMessage<Record_Multi> | undefined): boolean {
    return proto3.util.equals(Record_Multi, a, b);
  }
}

/**
 * Offline item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Offline
 */
export class Record_Offline extends Message<Record_Offline> {
  constructor(data?: PartialMessage<Record_Offline>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.keyring.v1.Record.Offline";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Record_Offline {
    return new Record_Offline().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Record_Offline {
    return new Record_Offline().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Record_Offline {
    return new Record_Offline().fromJsonString(jsonString, options);
  }

  static equals(a: Record_Offline | PlainMessage<Record_Offline> | undefined, b: Record_Offline | PlainMessage<Record_Offline> | undefined): boolean {
    return proto3.util.equals(Record_Offline, a, b);
  }
}

