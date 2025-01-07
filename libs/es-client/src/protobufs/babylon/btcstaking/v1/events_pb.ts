// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/btcstaking/v1/events.proto (package babylon.btcstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BTCDelegationStatus, FinalityProvider, SelectiveSlashingEvidence } from "./btcstaking_pb.js";

/**
 * EventNewFinalityProvider is the event emitted when a finality provider is created
 *
 * @generated from message babylon.btcstaking.v1.EventNewFinalityProvider
 */
export class EventNewFinalityProvider extends Message<EventNewFinalityProvider> {
  /**
   * @generated from field: babylon.btcstaking.v1.FinalityProvider fp = 1;
   */
  fp?: FinalityProvider;

  constructor(data?: PartialMessage<EventNewFinalityProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btcstaking.v1.EventNewFinalityProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fp", kind: "message", T: FinalityProvider },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewFinalityProvider {
    return new EventNewFinalityProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewFinalityProvider {
    return new EventNewFinalityProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewFinalityProvider {
    return new EventNewFinalityProvider().fromJsonString(jsonString, options);
  }

  static equals(a: EventNewFinalityProvider | PlainMessage<EventNewFinalityProvider> | undefined, b: EventNewFinalityProvider | PlainMessage<EventNewFinalityProvider> | undefined): boolean {
    return proto3.util.equals(EventNewFinalityProvider, a, b);
  }
}

/**
 * EventBTCDelegationStateUpdate is the event emitted when a BTC delegation's state is
 * updated. There are the following possible state transitions:
 * - non-existing -> pending, which happens upon `MsgCreateBTCDelegation`
 * - pending -> active, which happens upon `MsgAddCovenantSigs`
 * - active -> unbonded, which happens upon `MsgBTCUndelegate` or upon staking tx timelock expires
 *
 * @generated from message babylon.btcstaking.v1.EventBTCDelegationStateUpdate
 */
export class EventBTCDelegationStateUpdate extends Message<EventBTCDelegationStateUpdate> {
  /**
   * staking_tx_hash is the hash of the staking tx.
   * It uniquely identifies a BTC delegation
   *
   * @generated from field: string staking_tx_hash = 1;
   */
  stakingTxHash = "";

  /**
   * new_state is the new state of this BTC delegation
   *
   * @generated from field: babylon.btcstaking.v1.BTCDelegationStatus new_state = 2;
   */
  newState = BTCDelegationStatus.PENDING;

  constructor(data?: PartialMessage<EventBTCDelegationStateUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btcstaking.v1.EventBTCDelegationStateUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "staking_tx_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_state", kind: "enum", T: proto3.getEnumType(BTCDelegationStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBTCDelegationStateUpdate {
    return new EventBTCDelegationStateUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBTCDelegationStateUpdate {
    return new EventBTCDelegationStateUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBTCDelegationStateUpdate {
    return new EventBTCDelegationStateUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: EventBTCDelegationStateUpdate | PlainMessage<EventBTCDelegationStateUpdate> | undefined, b: EventBTCDelegationStateUpdate | PlainMessage<EventBTCDelegationStateUpdate> | undefined): boolean {
    return proto3.util.equals(EventBTCDelegationStateUpdate, a, b);
  }
}

/**
 * EventSelectiveSlashing is the event emitted when an adversarial 
 * finality provider selectively slashes a BTC delegation. This will
 * result in slashing of all BTC delegations under this finality provider.
 *
 * @generated from message babylon.btcstaking.v1.EventSelectiveSlashing
 */
export class EventSelectiveSlashing extends Message<EventSelectiveSlashing> {
  /**
   * evidence is the evidence of selective slashing
   *
   * @generated from field: babylon.btcstaking.v1.SelectiveSlashingEvidence evidence = 1;
   */
  evidence?: SelectiveSlashingEvidence;

  constructor(data?: PartialMessage<EventSelectiveSlashing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btcstaking.v1.EventSelectiveSlashing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence", kind: "message", T: SelectiveSlashingEvidence },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSelectiveSlashing {
    return new EventSelectiveSlashing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSelectiveSlashing {
    return new EventSelectiveSlashing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSelectiveSlashing {
    return new EventSelectiveSlashing().fromJsonString(jsonString, options);
  }

  static equals(a: EventSelectiveSlashing | PlainMessage<EventSelectiveSlashing> | undefined, b: EventSelectiveSlashing | PlainMessage<EventSelectiveSlashing> | undefined): boolean {
    return proto3.util.equals(EventSelectiveSlashing, a, b);
  }
}

/**
 * EventPowerDistUpdate is an event that affects voting power distirbution
 * of BTC staking protocol
 *
 * @generated from message babylon.btcstaking.v1.EventPowerDistUpdate
 */
export class EventPowerDistUpdate extends Message<EventPowerDistUpdate> {
  /**
   * ev is the event that affects voting power distribution
   *
   * @generated from oneof babylon.btcstaking.v1.EventPowerDistUpdate.ev
   */
  ev: {
    /**
     * slashed_fp means a finality provider is slashed
     *
     * @generated from field: babylon.btcstaking.v1.EventPowerDistUpdate.EventSlashedFinalityProvider slashed_fp = 1;
     */
    value: EventPowerDistUpdate_EventSlashedFinalityProvider;
    case: "slashedFp";
  } | {
    /**
     * btc_del_state_update means a BTC delegation's state is updated
     *
     * @generated from field: babylon.btcstaking.v1.EventBTCDelegationStateUpdate btc_del_state_update = 2;
     */
    value: EventBTCDelegationStateUpdate;
    case: "btcDelStateUpdate";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EventPowerDistUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btcstaking.v1.EventPowerDistUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "slashed_fp", kind: "message", T: EventPowerDistUpdate_EventSlashedFinalityProvider, oneof: "ev" },
    { no: 2, name: "btc_del_state_update", kind: "message", T: EventBTCDelegationStateUpdate, oneof: "ev" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventPowerDistUpdate {
    return new EventPowerDistUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventPowerDistUpdate {
    return new EventPowerDistUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventPowerDistUpdate {
    return new EventPowerDistUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: EventPowerDistUpdate | PlainMessage<EventPowerDistUpdate> | undefined, b: EventPowerDistUpdate | PlainMessage<EventPowerDistUpdate> | undefined): boolean {
    return proto3.util.equals(EventPowerDistUpdate, a, b);
  }
}

/**
 * EventSlashedFinalityProvider defines an event that a finality provider
 * is slashed
 * TODO: unify with existing slashing events
 *
 * @generated from message babylon.btcstaking.v1.EventPowerDistUpdate.EventSlashedFinalityProvider
 */
export class EventPowerDistUpdate_EventSlashedFinalityProvider extends Message<EventPowerDistUpdate_EventSlashedFinalityProvider> {
  /**
   * @generated from field: bytes pk = 1;
   */
  pk = new Uint8Array(0);

  constructor(data?: PartialMessage<EventPowerDistUpdate_EventSlashedFinalityProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btcstaking.v1.EventPowerDistUpdate.EventSlashedFinalityProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventPowerDistUpdate_EventSlashedFinalityProvider {
    return new EventPowerDistUpdate_EventSlashedFinalityProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventPowerDistUpdate_EventSlashedFinalityProvider {
    return new EventPowerDistUpdate_EventSlashedFinalityProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventPowerDistUpdate_EventSlashedFinalityProvider {
    return new EventPowerDistUpdate_EventSlashedFinalityProvider().fromJsonString(jsonString, options);
  }

  static equals(a: EventPowerDistUpdate_EventSlashedFinalityProvider | PlainMessage<EventPowerDistUpdate_EventSlashedFinalityProvider> | undefined, b: EventPowerDistUpdate_EventSlashedFinalityProvider | PlainMessage<EventPowerDistUpdate_EventSlashedFinalityProvider> | undefined): boolean {
    return proto3.util.equals(EventPowerDistUpdate_EventSlashedFinalityProvider, a, b);
  }
}

