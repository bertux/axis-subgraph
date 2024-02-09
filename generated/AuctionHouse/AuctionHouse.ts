// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  BigInt,
  Bytes,
  Entity,
  ethereum,
  JSONValue,
  TypedMap,
} from "@graphprotocol/graph-ts";

export class AuctionCancelled extends ethereum.Event {
  get params(): AuctionCancelled__Params {
    return new AuctionCancelled__Params(this);
  }
}

export class AuctionCancelled__Params {
  _event: AuctionCancelled;

  constructor(event: AuctionCancelled) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auctionRef(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auctionRef(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get baseToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get quoteToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Bid extends ethereum.Event {
  get params(): Bid__Params {
    return new Bid__Params(this);
  }
}

export class Bid__Params {
  _event: Bid;

  constructor(event: Bid) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CancelBid extends ethereum.Event {
  get params(): CancelBid__Params {
    return new CancelBid__Params(this);
  }
}

export class CancelBid__Params {
  _event: CancelBid;

  constructor(event: CancelBid) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Curated extends ethereum.Event {
  get params(): Curated__Params {
    return new Curated__Params(this);
  }
}

export class Curated__Params {
  _event: Curated;

  constructor(event: Curated) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get curator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ModuleInstalled extends ethereum.Event {
  get params(): ModuleInstalled__Params {
    return new ModuleInstalled__Params(this);
  }
}

export class ModuleInstalled__Params {
  _event: ModuleInstalled;

  constructor(event: ModuleInstalled) {
    this._event = event;
  }

  get keycode(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get version(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get location(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ModuleSunset extends ethereum.Event {
  get params(): ModuleSunset__Params {
    return new ModuleSunset__Params(this);
  }
}

export class ModuleSunset__Params {
  _event: ModuleSunset;

  constructor(event: ModuleSunset) {
    this._event = event;
  }

  get keycode(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Purchase extends ethereum.Event {
  get params(): Purchase__Params {
    return new Purchase__Params(this);
  }
}

export class Purchase__Params {
  _event: Purchase;

  constructor(event: Purchase) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get referrer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get payout(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Settle extends ethereum.Event {
  get params(): Settle__Params {
    return new Settle__Params(this);
  }
}

export class Settle__Params {
  _event: Settle;

  constructor(event: Settle) {
    this._event = event;
  }

  get lotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class AuctionHouse__auctionInputRouting_Struct extends ethereum.Tuple {
  get auctionType(): Bytes {
    return this[0].toBytes();
  }

  get baseToken(): Address {
    return this[1].toAddress();
  }

  get quoteToken(): Address {
    return this[2].toAddress();
  }

  get curator(): Address {
    return this[3].toAddress();
  }

  get hooks(): Address {
    return this[4].toAddress();
  }

  get allowlist(): Address {
    return this[5].toAddress();
  }

  get allowlistParams(): Bytes {
    return this[6].toBytes();
  }

  get payoutData(): Bytes {
    return this[7].toBytes();
  }

  get derivativeType(): Bytes {
    return this[8].toBytes();
  }

  get derivativeParams(): Bytes {
    return this[9].toBytes();
  }
}

export class AuctionHouse__auctionInputParams_Struct extends ethereum.Tuple {
  get start(): BigInt {
    return this[0].toBigInt();
  }

  get duration(): BigInt {
    return this[1].toBigInt();
  }

  get capacityInQuote(): boolean {
    return this[2].toBoolean();
  }

  get capacity(): BigInt {
    return this[3].toBigInt();
  }

  get implParams(): Bytes {
    return this[4].toBytes();
  }
}

export class AuctionHouse__bidInputParams_Struct extends ethereum.Tuple {
  get lotId(): BigInt {
    return this[0].toBigInt();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get referrer(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get auctionData(): Bytes {
    return this[4].toBytes();
  }

  get allowlistProof(): Bytes {
    return this[5].toBytes();
  }

  get permit2Data(): Bytes {
    return this[6].toBytes();
  }
}

export class AuctionHouse__calculateQuoteFeesResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getToReferrer(): BigInt {
    return this.value0;
  }

  getToProtocol(): BigInt {
    return this.value1;
  }
}

export class AuctionHouse__feesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getProtocol(): BigInt {
    return this.value0;
  }

  getReferrer(): BigInt {
    return this.value1;
  }

  getMaxCuratorFee(): BigInt {
    return this.value2;
  }
}

export class AuctionHouse__getModuleStatusResult {
  value0: i32;
  value1: boolean;

  constructor(value0: i32, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0)),
    );
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getLatestVersion(): i32 {
    return this.value0;
  }

  getSunset(): boolean {
    return this.value1;
  }
}

export class AuctionHouse__lotCurationResult {
  value0: Address;
  value1: boolean;

  constructor(value0: Address, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getCurator(): Address {
    return this.value0;
  }

  getCurated(): boolean {
    return this.value1;
  }
}

export class AuctionHouse__lotRoutingResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: Bytes;
  value7: Bytes;
  value8: boolean;
  value9: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: Bytes,
    value7: Bytes,
    value8: boolean,
    value9: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromFixedBytes(this.value6));
    map.set("value7", ethereum.Value.fromBytes(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }

  getAuctionReference(): Bytes {
    return this.value0;
  }

  getOwner(): Address {
    return this.value1;
  }

  getBaseToken(): Address {
    return this.value2;
  }

  getQuoteToken(): Address {
    return this.value3;
  }

  getHooks(): Address {
    return this.value4;
  }

  getAllowlist(): Address {
    return this.value5;
  }

  getDerivativeReference(): Bytes {
    return this.value6;
  }

  getDerivativeParams(): Bytes {
    return this.value7;
  }

  getWrapDerivative(): boolean {
    return this.value8;
  }

  getPrefunding(): BigInt {
    return this.value9;
  }
}

export class AuctionHouse__purchaseInputParams_Struct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get referrer(): Address {
    return this[1].toAddress();
  }

  get lotId(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get minAmountOut(): BigInt {
    return this[4].toBigInt();
  }

  get auctionData(): Bytes {
    return this[5].toBytes();
  }

  get allowlistProof(): Bytes {
    return this[6].toBytes();
  }

  get permit2Data(): Bytes {
    return this[7].toBytes();
  }
}

export class AuctionHouse extends ethereum.SmartContract {
  static bind(address: Address): AuctionHouse {
    return new AuctionHouse("AuctionHouse", address);
  }

  auction(
    routing_: AuctionHouse__auctionInputRouting_Struct,
    params_: AuctionHouse__auctionInputParams_Struct,
  ): BigInt {
    const result = super.call(
      "auction",
      "auction((bytes5,address,address,address,address,address,bytes,bytes,bytes5,bytes),(uint48,uint48,bool,uint256,bytes)):(uint96)",
      [ethereum.Value.fromTuple(routing_), ethereum.Value.fromTuple(params_)],
    );

    return result[0].toBigInt();
  }

  try_auction(
    routing_: AuctionHouse__auctionInputRouting_Struct,
    params_: AuctionHouse__auctionInputParams_Struct,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "auction",
      "auction((bytes5,address,address,address,address,address,bytes,bytes,bytes5,bytes),(uint48,uint48,bool,uint256,bytes)):(uint96)",
      [ethereum.Value.fromTuple(routing_), ethereum.Value.fromTuple(params_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bid(params_: AuctionHouse__bidInputParams_Struct): BigInt {
    const result = super.call(
      "bid",
      "bid((uint96,address,address,uint256,bytes,bytes,bytes)):(uint96)",
      [ethereum.Value.fromTuple(params_)],
    );

    return result[0].toBigInt();
  }

  try_bid(
    params_: AuctionHouse__bidInputParams_Struct,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "bid",
      "bid((uint96,address,address,uint256,bytes,bytes,bytes)):(uint96)",
      [ethereum.Value.fromTuple(params_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateQuoteFees(
    auctionType_: Bytes,
    hasReferrer_: boolean,
    amount_: BigInt,
  ): AuctionHouse__calculateQuoteFeesResult {
    const result = super.call(
      "calculateQuoteFees",
      "calculateQuoteFees(bytes5,bool,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromFixedBytes(auctionType_),
        ethereum.Value.fromBoolean(hasReferrer_),
        ethereum.Value.fromUnsignedBigInt(amount_),
      ],
    );

    return new AuctionHouse__calculateQuoteFeesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_calculateQuoteFees(
    auctionType_: Bytes,
    hasReferrer_: boolean,
    amount_: BigInt,
  ): ethereum.CallResult<AuctionHouse__calculateQuoteFeesResult> {
    const result = super.tryCall(
      "calculateQuoteFees",
      "calculateQuoteFees(bytes5,bool,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromFixedBytes(auctionType_),
        ethereum.Value.fromBoolean(hasReferrer_),
        ethereum.Value.fromUnsignedBigInt(amount_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionHouse__calculateQuoteFeesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  condensers(auctionRef: Bytes, derivativeRef: Bytes): Bytes {
    const result = super.call(
      "condensers",
      "condensers(bytes7,bytes7):(bytes7)",
      [
        ethereum.Value.fromFixedBytes(auctionRef),
        ethereum.Value.fromFixedBytes(derivativeRef),
      ],
    );

    return result[0].toBytes();
  }

  try_condensers(
    auctionRef: Bytes,
    derivativeRef: Bytes,
  ): ethereum.CallResult<Bytes> {
    const result = super.tryCall(
      "condensers",
      "condensers(bytes7,bytes7):(bytes7)",
      [
        ethereum.Value.fromFixedBytes(auctionRef),
        ethereum.Value.fromFixedBytes(derivativeRef),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  execOnModule(veecode_: Bytes, callData_: Bytes): Bytes {
    const result = super.call(
      "execOnModule",
      "execOnModule(bytes7,bytes):(bytes)",
      [
        ethereum.Value.fromFixedBytes(veecode_),
        ethereum.Value.fromBytes(callData_),
      ],
    );

    return result[0].toBytes();
  }

  try_execOnModule(
    veecode_: Bytes,
    callData_: Bytes,
  ): ethereum.CallResult<Bytes> {
    const result = super.tryCall(
      "execOnModule",
      "execOnModule(bytes7,bytes):(bytes)",
      [
        ethereum.Value.fromFixedBytes(veecode_),
        ethereum.Value.fromBytes(callData_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  fees(param0: Bytes): AuctionHouse__feesResult {
    const result = super.call("fees", "fees(bytes5):(uint48,uint48,uint48)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);

    return new AuctionHouse__feesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_fees(param0: Bytes): ethereum.CallResult<AuctionHouse__feesResult> {
    const result = super.tryCall(
      "fees",
      "fees(bytes5):(uint48,uint48,uint48)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionHouse__feesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  getModuleForId(lotId_: BigInt): Address {
    const result = super.call(
      "getModuleForId",
      "getModuleForId(uint96):(address)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return result[0].toAddress();
  }

  try_getModuleForId(lotId_: BigInt): ethereum.CallResult<Address> {
    const result = super.tryCall(
      "getModuleForId",
      "getModuleForId(uint96):(address)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getModuleForVeecode(param0: Bytes): Address {
    const result = super.call(
      "getModuleForVeecode",
      "getModuleForVeecode(bytes7):(address)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return result[0].toAddress();
  }

  try_getModuleForVeecode(param0: Bytes): ethereum.CallResult<Address> {
    const result = super.tryCall(
      "getModuleForVeecode",
      "getModuleForVeecode(bytes7):(address)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getModuleStatus(param0: Bytes): AuctionHouse__getModuleStatusResult {
    const result = super.call(
      "getModuleStatus",
      "getModuleStatus(bytes5):(uint8,bool)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return new AuctionHouse__getModuleStatusResult(
      result[0].toI32(),
      result[1].toBoolean(),
    );
  }

  try_getModuleStatus(
    param0: Bytes,
  ): ethereum.CallResult<AuctionHouse__getModuleStatusResult> {
    const result = super.tryCall(
      "getModuleStatus",
      "getModuleStatus(bytes5):(uint8,bool)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionHouse__getModuleStatusResult(
        value[0].toI32(),
        value[1].toBoolean(),
      ),
    );
  }

  isExecOnModule(): boolean {
    const result = super.call("isExecOnModule", "isExecOnModule():(bool)", []);

    return result[0].toBoolean();
  }

  try_isExecOnModule(): ethereum.CallResult<boolean> {
    const result = super.tryCall(
      "isExecOnModule",
      "isExecOnModule():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lotCounter(): BigInt {
    const result = super.call("lotCounter", "lotCounter():(uint96)", []);

    return result[0].toBigInt();
  }

  try_lotCounter(): ethereum.CallResult<BigInt> {
    const result = super.tryCall("lotCounter", "lotCounter():(uint96)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lotCuration(lotId: BigInt): AuctionHouse__lotCurationResult {
    const result = super.call(
      "lotCuration",
      "lotCuration(uint96):(address,bool)",
      [ethereum.Value.fromUnsignedBigInt(lotId)],
    );

    return new AuctionHouse__lotCurationResult(
      result[0].toAddress(),
      result[1].toBoolean(),
    );
  }

  try_lotCuration(
    lotId: BigInt,
  ): ethereum.CallResult<AuctionHouse__lotCurationResult> {
    const result = super.tryCall(
      "lotCuration",
      "lotCuration(uint96):(address,bool)",
      [ethereum.Value.fromUnsignedBigInt(lotId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionHouse__lotCurationResult(
        value[0].toAddress(),
        value[1].toBoolean(),
      ),
    );
  }

  lotRouting(lotId: BigInt): AuctionHouse__lotRoutingResult {
    const result = super.call(
      "lotRouting",
      "lotRouting(uint96):(bytes7,address,address,address,address,address,bytes7,bytes,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(lotId)],
    );

    return new AuctionHouse__lotRoutingResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBytes(),
      result[7].toBytes(),
      result[8].toBoolean(),
      result[9].toBigInt(),
    );
  }

  try_lotRouting(
    lotId: BigInt,
  ): ethereum.CallResult<AuctionHouse__lotRoutingResult> {
    const result = super.tryCall(
      "lotRouting",
      "lotRouting(uint96):(bytes7,address,address,address,address,address,bytes7,bytes,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(lotId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionHouse__lotRoutingResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBytes(),
        value[7].toBytes(),
        value[8].toBoolean(),
        value[9].toBigInt(),
      ),
    );
  }

  modules(param0: BigInt): Bytes {
    const result = super.call("modules", "modules(uint256):(bytes5)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBytes();
  }

  try_modules(param0: BigInt): ethereum.CallResult<Bytes> {
    const result = super.tryCall("modules", "modules(uint256):(bytes5)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  modulesCount(): BigInt {
    const result = super.call("modulesCount", "modulesCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_modulesCount(): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "modulesCount",
      "modulesCount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    const result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    const result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  purchase(params_: AuctionHouse__purchaseInputParams_Struct): BigInt {
    const result = super.call(
      "purchase",
      "purchase((address,address,uint96,uint256,uint256,bytes,bytes,bytes)):(uint256)",
      [ethereum.Value.fromTuple(params_)],
    );

    return result[0].toBigInt();
  }

  try_purchase(
    params_: AuctionHouse__purchaseInputParams_Struct,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "purchase",
      "purchase((address,address,uint96,uint256,uint256,bytes,bytes,bytes)):(uint256)",
      [ethereum.Value.fromTuple(params_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewards(param0: Address, param1: Address): BigInt {
    const result = super.call("rewards", "rewards(address,address):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1),
    ]);

    return result[0].toBigInt();
  }

  try_rewards(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "rewards",
      "rewards(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get protocol_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get permit2_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuctionCall extends ethereum.Call {
  get inputs(): AuctionCall__Inputs {
    return new AuctionCall__Inputs(this);
  }

  get outputs(): AuctionCall__Outputs {
    return new AuctionCall__Outputs(this);
  }
}

export class AuctionCall__Inputs {
  _call: AuctionCall;

  constructor(call: AuctionCall) {
    this._call = call;
  }

  get routing_(): AuctionCallRouting_Struct {
    return changetype<AuctionCallRouting_Struct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }

  get params_(): AuctionCallParams_Struct {
    return changetype<AuctionCallParams_Struct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }
}

export class AuctionCall__Outputs {
  _call: AuctionCall;

  constructor(call: AuctionCall) {
    this._call = call;
  }

  get lotId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AuctionCallRouting_Struct extends ethereum.Tuple {
  get auctionType(): Bytes {
    return this[0].toBytes();
  }

  get baseToken(): Address {
    return this[1].toAddress();
  }

  get quoteToken(): Address {
    return this[2].toAddress();
  }

  get curator(): Address {
    return this[3].toAddress();
  }

  get hooks(): Address {
    return this[4].toAddress();
  }

  get allowlist(): Address {
    return this[5].toAddress();
  }

  get allowlistParams(): Bytes {
    return this[6].toBytes();
  }

  get payoutData(): Bytes {
    return this[7].toBytes();
  }

  get derivativeType(): Bytes {
    return this[8].toBytes();
  }

  get derivativeParams(): Bytes {
    return this[9].toBytes();
  }
}

export class AuctionCallParams_Struct extends ethereum.Tuple {
  get start(): BigInt {
    return this[0].toBigInt();
  }

  get duration(): BigInt {
    return this[1].toBigInt();
  }

  get capacityInQuote(): boolean {
    return this[2].toBoolean();
  }

  get capacity(): BigInt {
    return this[3].toBigInt();
  }

  get implParams(): Bytes {
    return this[4].toBytes();
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get params_(): BidCallParams_Struct {
    return changetype<BidCallParams_Struct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class BidCallParams_Struct extends ethereum.Tuple {
  get lotId(): BigInt {
    return this[0].toBigInt();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get referrer(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get auctionData(): Bytes {
    return this[4].toBytes();
  }

  get allowlistProof(): Bytes {
    return this[5].toBytes();
  }

  get permit2Data(): Bytes {
    return this[6].toBytes();
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CancelBidCall extends ethereum.Call {
  get inputs(): CancelBidCall__Inputs {
    return new CancelBidCall__Inputs(this);
  }

  get outputs(): CancelBidCall__Outputs {
    return new CancelBidCall__Outputs(this);
  }
}

export class CancelBidCall__Inputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidId_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelBidCall__Outputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }
}

export class ClaimRewardsCall extends ethereum.Call {
  get inputs(): ClaimRewardsCall__Inputs {
    return new ClaimRewardsCall__Inputs(this);
  }

  get outputs(): ClaimRewardsCall__Outputs {
    return new ClaimRewardsCall__Outputs(this);
  }
}

export class ClaimRewardsCall__Inputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }

  get token_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimRewardsCall__Outputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }
}

export class CurateCall extends ethereum.Call {
  get inputs(): CurateCall__Inputs {
    return new CurateCall__Inputs(this);
  }

  get outputs(): CurateCall__Outputs {
    return new CurateCall__Outputs(this);
  }
}

export class CurateCall__Inputs {
  _call: CurateCall;

  constructor(call: CurateCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CurateCall__Outputs {
  _call: CurateCall;

  constructor(call: CurateCall) {
    this._call = call;
  }
}

export class ExecOnModuleCall extends ethereum.Call {
  get inputs(): ExecOnModuleCall__Inputs {
    return new ExecOnModuleCall__Inputs(this);
  }

  get outputs(): ExecOnModuleCall__Outputs {
    return new ExecOnModuleCall__Outputs(this);
  }
}

export class ExecOnModuleCall__Inputs {
  _call: ExecOnModuleCall;

  constructor(call: ExecOnModuleCall) {
    this._call = call;
  }

  get veecode_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get callData_(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ExecOnModuleCall__Outputs {
  _call: ExecOnModuleCall;

  constructor(call: ExecOnModuleCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class InstallModuleCall extends ethereum.Call {
  get inputs(): InstallModuleCall__Inputs {
    return new InstallModuleCall__Inputs(this);
  }

  get outputs(): InstallModuleCall__Outputs {
    return new InstallModuleCall__Outputs(this);
  }
}

export class InstallModuleCall__Inputs {
  _call: InstallModuleCall;

  constructor(call: InstallModuleCall) {
    this._call = call;
  }

  get newModule_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InstallModuleCall__Outputs {
  _call: InstallModuleCall;

  constructor(call: InstallModuleCall) {
    this._call = call;
  }
}

export class PurchaseCall extends ethereum.Call {
  get inputs(): PurchaseCall__Inputs {
    return new PurchaseCall__Inputs(this);
  }

  get outputs(): PurchaseCall__Outputs {
    return new PurchaseCall__Outputs(this);
  }
}

export class PurchaseCall__Inputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get params_(): PurchaseCallParams_Struct {
    return changetype<PurchaseCallParams_Struct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get payoutAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PurchaseCallParams_Struct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get referrer(): Address {
    return this[1].toAddress();
  }

  get lotId(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get minAmountOut(): BigInt {
    return this[4].toBigInt();
  }

  get auctionData(): Bytes {
    return this[5].toBytes();
  }

  get allowlistProof(): Bytes {
    return this[6].toBytes();
  }

  get permit2Data(): Bytes {
    return this[7].toBytes();
  }
}

export class SetCondenserCall extends ethereum.Call {
  get inputs(): SetCondenserCall__Inputs {
    return new SetCondenserCall__Inputs(this);
  }

  get outputs(): SetCondenserCall__Outputs {
    return new SetCondenserCall__Outputs(this);
  }
}

export class SetCondenserCall__Inputs {
  _call: SetCondenserCall;

  constructor(call: SetCondenserCall) {
    this._call = call;
  }

  get auctionRef_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get derivativeRef_(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get condenserRef_(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetCondenserCall__Outputs {
  _call: SetCondenserCall;

  constructor(call: SetCondenserCall) {
    this._call = call;
  }
}

export class SetCuratorFeeCall extends ethereum.Call {
  get inputs(): SetCuratorFeeCall__Inputs {
    return new SetCuratorFeeCall__Inputs(this);
  }

  get outputs(): SetCuratorFeeCall__Outputs {
    return new SetCuratorFeeCall__Outputs(this);
  }
}

export class SetCuratorFeeCall__Inputs {
  _call: SetCuratorFeeCall;

  constructor(call: SetCuratorFeeCall) {
    this._call = call;
  }

  get auctionType_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get fee_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCuratorFeeCall__Outputs {
  _call: SetCuratorFeeCall;

  constructor(call: SetCuratorFeeCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get auctionType_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get type_(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get fee_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetProtocolCall extends ethereum.Call {
  get inputs(): SetProtocolCall__Inputs {
    return new SetProtocolCall__Inputs(this);
  }

  get outputs(): SetProtocolCall__Outputs {
    return new SetProtocolCall__Outputs(this);
  }
}

export class SetProtocolCall__Inputs {
  _call: SetProtocolCall;

  constructor(call: SetProtocolCall) {
    this._call = call;
  }

  get protocol_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetProtocolCall__Outputs {
  _call: SetProtocolCall;

  constructor(call: SetProtocolCall) {
    this._call = call;
  }
}

export class SettleCall extends ethereum.Call {
  get inputs(): SettleCall__Inputs {
    return new SettleCall__Inputs(this);
  }

  get outputs(): SettleCall__Outputs {
    return new SettleCall__Outputs(this);
  }
}

export class SettleCall__Inputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SettleCall__Outputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }
}

export class SunsetModuleCall extends ethereum.Call {
  get inputs(): SunsetModuleCall__Inputs {
    return new SunsetModuleCall__Inputs(this);
  }

  get outputs(): SunsetModuleCall__Outputs {
    return new SunsetModuleCall__Outputs(this);
  }
}

export class SunsetModuleCall__Inputs {
  _call: SunsetModuleCall;

  constructor(call: SunsetModuleCall) {
    this._call = call;
  }

  get keycode_(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SunsetModuleCall__Outputs {
  _call: SunsetModuleCall;

  constructor(call: SunsetModuleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
