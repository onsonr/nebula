// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file babylon/zoneconcierge/v1/query.proto (package babylon.zoneconcierge.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryChainListRequest, QueryChainListResponse, QueryChainsInfoRequest, QueryChainsInfoResponse, QueryEpochChainsInfoRequest, QueryEpochChainsInfoResponse, QueryFinalizedChainInfoUntilHeightRequest, QueryFinalizedChainInfoUntilHeightResponse, QueryFinalizedChainsInfoRequest, QueryFinalizedChainsInfoResponse, QueryHeaderRequest, QueryHeaderResponse, QueryListEpochHeadersRequest, QueryListEpochHeadersResponse, QueryListHeadersRequest, QueryListHeadersResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "babylon.zoneconcierge.v1.Query";

/**
 * Params queries the parameters of the module.
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Header queries the CZ header and fork headers at a given height.
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.Header
 */
export const QueryHeaderService = {
  typeName: TYPE_NAME,
  method: "Header",
  Request: QueryHeaderRequest,
  Response: QueryHeaderResponse,
} as const;

/**
 * ChainList queries the list of chains that checkpoint to Babylon
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.ChainList
 */
export const QueryChainListService = {
  typeName: TYPE_NAME,
  method: "ChainList",
  Request: QueryChainListRequest,
  Response: QueryChainListResponse,
} as const;

/**
 * ChainsInfo queries the latest info for a given list of chains in Babylon's view
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.ChainsInfo
 */
export const QueryChainsInfoService = {
  typeName: TYPE_NAME,
  method: "ChainsInfo",
  Request: QueryChainsInfoRequest,
  Response: QueryChainsInfoResponse,
} as const;

/**
 * EpochChainsInfo queries the latest info for a list of chains
 * in a given epoch in Babylon's view
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.EpochChainsInfo
 */
export const QueryEpochChainsInfoService = {
  typeName: TYPE_NAME,
  method: "EpochChainsInfo",
  Request: QueryEpochChainsInfoRequest,
  Response: QueryEpochChainsInfoResponse,
} as const;

/**
 * ListHeaders queries the headers of a chain in Babylon's view, with
 * pagination support
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.ListHeaders
 */
export const QueryListHeadersService = {
  typeName: TYPE_NAME,
  method: "ListHeaders",
  Request: QueryListHeadersRequest,
  Response: QueryListHeadersResponse,
} as const;

/**
 * ListEpochHeaders queries the headers of a chain timestamped in a given
 * epoch of Babylon, with pagination support
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.ListEpochHeaders
 */
export const QueryListEpochHeadersService = {
  typeName: TYPE_NAME,
  method: "ListEpochHeaders",
  Request: QueryListEpochHeadersRequest,
  Response: QueryListEpochHeadersResponse,
} as const;

/**
 * FinalizedChainsInfo queries the BTC-finalised info of chains with given IDs, with proofs
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.FinalizedChainsInfo
 */
export const QueryFinalizedChainsInfoService = {
  typeName: TYPE_NAME,
  method: "FinalizedChainsInfo",
  Request: QueryFinalizedChainsInfoRequest,
  Response: QueryFinalizedChainsInfoResponse,
} as const;

/**
 * FinalizedChainInfoUntilHeight queries the BTC-finalised info no later than
 * the provided CZ height, with proofs
 *
 * @generated from rpc babylon.zoneconcierge.v1.Query.FinalizedChainInfoUntilHeight
 */
export const QueryFinalizedChainInfoUntilHeightService = {
  typeName: TYPE_NAME,
  method: "FinalizedChainInfoUntilHeight",
  Request: QueryFinalizedChainInfoUntilHeightRequest,
  Response: QueryFinalizedChainInfoUntilHeightResponse,
} as const;

