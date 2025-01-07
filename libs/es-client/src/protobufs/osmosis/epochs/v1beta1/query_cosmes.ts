// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/epochs/v1beta1/query.proto (package osmosis.epochs.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochsInfoRequest, QueryEpochsInfoResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.epochs.v1beta1.Query";

/**
 * EpochInfos provide running epochInfos
 *
 * @generated from rpc osmosis.epochs.v1beta1.Query.EpochInfos
 */
export const QueryEpochInfosService = {
  typeName: TYPE_NAME,
  method: "EpochInfos",
  Request: QueryEpochsInfoRequest,
  Response: QueryEpochsInfoResponse,
} as const;

/**
 * CurrentEpoch provide current epoch of specified identifier
 *
 * @generated from rpc osmosis.epochs.v1beta1.Query.CurrentEpoch
 */
export const QueryCurrentEpochService = {
  typeName: TYPE_NAME,
  method: "CurrentEpoch",
  Request: QueryCurrentEpochRequest,
  Response: QueryCurrentEpochResponse,
} as const;

