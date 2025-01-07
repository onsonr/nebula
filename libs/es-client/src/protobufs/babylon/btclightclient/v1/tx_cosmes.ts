// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file babylon/btclightclient/v1/tx.proto (package babylon.btclightclient.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgInsertHeaders, MsgInsertHeadersResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "babylon.btclightclient.v1.Msg";

/**
 * InsertHeaders adds a batch of headers to the BTC light client chain
 *
 * @generated from rpc babylon.btclightclient.v1.Msg.InsertHeaders
 */
export const MsgInsertHeadersService = {
  typeName: TYPE_NAME,
  method: "InsertHeaders",
  Request: MsgInsertHeaders,
  Response: MsgInsertHeadersResponse,
} as const;

/**
 * UpdateParams defines a method for updating btc light client module parameters.
 *
 * @generated from rpc babylon.btclightclient.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

