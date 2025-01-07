// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/ibchooks/tx.proto (package osmosis.ibchooks, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message osmosis.ibchooks.MsgEmitIBCAck
 */
export class MsgEmitIBCAck extends Message<MsgEmitIBCAck> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 packet_sequence = 2;
   */
  packetSequence = protoInt64.zero;

  /**
   * @generated from field: string channel = 3;
   */
  channel = "";

  constructor(data?: PartialMessage<MsgEmitIBCAck>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.ibchooks.MsgEmitIBCAck";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "packet_sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmitIBCAck {
    return new MsgEmitIBCAck().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmitIBCAck {
    return new MsgEmitIBCAck().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmitIBCAck {
    return new MsgEmitIBCAck().fromJsonString(jsonString, options);
  }

  static equals(a: MsgEmitIBCAck | PlainMessage<MsgEmitIBCAck> | undefined, b: MsgEmitIBCAck | PlainMessage<MsgEmitIBCAck> | undefined): boolean {
    return proto3.util.equals(MsgEmitIBCAck, a, b);
  }
}

/**
 * @generated from message osmosis.ibchooks.MsgEmitIBCAckResponse
 */
export class MsgEmitIBCAckResponse extends Message<MsgEmitIBCAckResponse> {
  /**
   * @generated from field: string contract_result = 1;
   */
  contractResult = "";

  /**
   * @generated from field: string ibc_ack = 2;
   */
  ibcAck = "";

  constructor(data?: PartialMessage<MsgEmitIBCAckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.ibchooks.MsgEmitIBCAckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ibc_ack", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmitIBCAckResponse {
    return new MsgEmitIBCAckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmitIBCAckResponse {
    return new MsgEmitIBCAckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmitIBCAckResponse {
    return new MsgEmitIBCAckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgEmitIBCAckResponse | PlainMessage<MsgEmitIBCAckResponse> | undefined, b: MsgEmitIBCAckResponse | PlainMessage<MsgEmitIBCAckResponse> | undefined): boolean {
    return proto3.util.equals(MsgEmitIBCAckResponse, a, b);
  }
}

