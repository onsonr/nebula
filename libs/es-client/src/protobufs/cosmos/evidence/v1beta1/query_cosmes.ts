// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/query.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllEvidenceRequest, QueryAllEvidenceResponse, QueryEvidenceRequest, QueryEvidenceResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.evidence.v1beta1.Query";

/**
 * Evidence queries evidence based on evidence hash.
 *
 * @generated from rpc cosmos.evidence.v1beta1.Query.Evidence
 */
export const QueryEvidenceService = {
  typeName: TYPE_NAME,
  method: "Evidence",
  Request: QueryEvidenceRequest,
  Response: QueryEvidenceResponse,
} as const;

/**
 * AllEvidence queries all evidence.
 *
 * @generated from rpc cosmos.evidence.v1beta1.Query.AllEvidence
 */
export const QueryAllEvidenceService = {
  typeName: TYPE_NAME,
  method: "AllEvidence",
  Request: QueryAllEvidenceRequest,
  Response: QueryAllEvidenceResponse,
} as const;

