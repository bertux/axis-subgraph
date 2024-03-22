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

export class AuctionModule__auctionInputParams_Struct extends ethereum.Tuple {
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

export class AuctionModule__claimBidsResultBidClaimsStruct extends ethereum.Tuple {
  get bidder(): Address {
    return this[0].toAddress();
  }

  get referrer(): Address {
    return this[1].toAddress();
  }

  get paid(): BigInt {
    return this[2].toBigInt();
  }

  get payout(): BigInt {
    return this[3].toBigInt();
  }
}

export class AuctionModule__claimBidsResult {
  value0: Array<AuctionModule__claimBidsResultBidClaimsStruct>;
  value1: Bytes;

  constructor(
    value0: Array<AuctionModule__claimBidsResultBidClaimsStruct>,
    value1: Bytes,
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTupleArray(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getBidClaims(): Array<AuctionModule__claimBidsResultBidClaimsStruct> {
    return this.value0;
  }

  getAuctionOutput(): Bytes {
    return this.value1;
  }
}

export class AuctionModule__claimProceedsResult {
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

  getPurchased(): BigInt {
    return this.value0;
  }

  getSold(): BigInt {
    return this.value1;
  }

  getPayoutSent(): BigInt {
    return this.value2;
  }
}

export class AuctionModule__getLotResultValue0Struct extends ethereum.Tuple {
  get start(): BigInt {
    return this[0].toBigInt();
  }

  get conclusion(): BigInt {
    return this[1].toBigInt();
  }

  get quoteTokenDecimals(): i32 {
    return this[2].toI32();
  }

  get baseTokenDecimals(): i32 {
    return this[3].toI32();
  }

  get capacityInQuote(): boolean {
    return this[4].toBoolean();
  }

  get capacity(): BigInt {
    return this[5].toBigInt();
  }

  get sold(): BigInt {
    return this[6].toBigInt();
  }

  get purchased(): BigInt {
    return this[7].toBigInt();
  }

  get partialPayout(): BigInt {
    return this[8].toBigInt();
  }
}

export class AuctionModule__lotDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: i32;
  value3: i32;
  value4: boolean;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: i32,
    value3: i32,
    value4: boolean,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
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
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2)),
    );
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3)),
    );
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }

  getStart(): BigInt {
    return this.value0;
  }

  getConclusion(): BigInt {
    return this.value1;
  }

  getQuoteTokenDecimals(): i32 {
    return this.value2;
  }

  getBaseTokenDecimals(): i32 {
    return this.value3;
  }

  getCapacityInQuote(): boolean {
    return this.value4;
  }

  getCapacity(): BigInt {
    return this.value5;
  }

  getSold(): BigInt {
    return this.value6;
  }

  getPurchased(): BigInt {
    return this.value7;
  }

  getPartialPayout(): BigInt {
    return this.value8;
  }
}

export class AuctionModule__purchaseResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getPayout(): BigInt {
    return this.value0;
  }

  getAuctionOutput(): Bytes {
    return this.value1;
  }
}

export class AuctionModule__settleResultSettlementStruct extends ethereum.Tuple {
  get totalIn(): BigInt {
    return this[0].toBigInt();
  }

  get totalOut(): BigInt {
    return this[1].toBigInt();
  }

  get pfBidder(): Address {
    return this[2].toAddress();
  }

  get pfReferrer(): Address {
    return this[3].toAddress();
  }

  get pfRefund(): BigInt {
    return this[4].toBigInt();
  }

  get pfPayout(): BigInt {
    return this[5].toBigInt();
  }

  get auctionOutput(): Bytes {
    return this[6].toBytes();
  }
}

export class AuctionModule__settleResult {
  value0: AuctionModule__settleResultSettlementStruct;
  value1: Bytes;

  constructor(
    value0: AuctionModule__settleResultSettlementStruct,
    value1: Bytes,
  ) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    const map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getSettlement(): AuctionModule__settleResultSettlementStruct {
    return this.value0;
  }

  getAuctionOutput(): Bytes {
    return this.value1;
  }
}

export class AuctionModule extends ethereum.SmartContract {
  static bind(address: Address): AuctionModule {
    return new AuctionModule("AuctionModule", address);
  }

  PARENT(): Address {
    const result = super.call("PARENT", "PARENT():(address)", []);

    return result[0].toAddress();
  }

  try_PARENT(): ethereum.CallResult<Address> {
    const result = super.tryCall("PARENT", "PARENT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TYPE(): i32 {
    const result = super.call("TYPE", "TYPE():(uint8)", []);

    return result[0].toI32();
  }

  try_TYPE(): ethereum.CallResult<i32> {
    const result = super.tryCall("TYPE", "TYPE():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  VEECODE(): Bytes {
    const result = super.call("VEECODE", "VEECODE():(bytes7)", []);

    return result[0].toBytes();
  }

  try_VEECODE(): ethereum.CallResult<Bytes> {
    const result = super.tryCall("VEECODE", "VEECODE():(bytes7)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  auction(
    lotId_: BigInt,
    params_: AuctionModule__auctionInputParams_Struct,
    quoteTokenDecimals_: i32,
    baseTokenDecimals_: i32,
  ): BigInt {
    const result = super.call(
      "auction",
      "auction(uint96,(uint48,uint48,bool,uint96,bytes),uint8,uint8):(uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromTuple(params_),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(quoteTokenDecimals_)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(baseTokenDecimals_)),
      ],
    );

    return result[0].toBigInt();
  }

  try_auction(
    lotId_: BigInt,
    params_: AuctionModule__auctionInputParams_Struct,
    quoteTokenDecimals_: i32,
    baseTokenDecimals_: i32,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "auction",
      "auction(uint96,(uint48,uint48,bool,uint96,bytes),uint8,uint8):(uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromTuple(params_),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(quoteTokenDecimals_)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(baseTokenDecimals_)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionType(): i32 {
    const result = super.call("auctionType", "auctionType():(uint8)", []);

    return result[0].toI32();
  }

  try_auctionType(): ethereum.CallResult<i32> {
    const result = super.tryCall("auctionType", "auctionType():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  bid(
    lotId_: BigInt,
    bidder_: Address,
    referrer_: Address,
    amount_: BigInt,
    auctionData_: Bytes,
  ): BigInt {
    const result = super.call(
      "bid",
      "bid(uint96,address,address,uint96,bytes):(uint64)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromAddress(bidder_),
        ethereum.Value.fromAddress(referrer_),
        ethereum.Value.fromUnsignedBigInt(amount_),
        ethereum.Value.fromBytes(auctionData_),
      ],
    );

    return result[0].toBigInt();
  }

  try_bid(
    lotId_: BigInt,
    bidder_: Address,
    referrer_: Address,
    amount_: BigInt,
    auctionData_: Bytes,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "bid",
      "bid(uint96,address,address,uint96,bytes):(uint64)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromAddress(bidder_),
        ethereum.Value.fromAddress(referrer_),
        ethereum.Value.fromUnsignedBigInt(amount_),
        ethereum.Value.fromBytes(auctionData_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  capacityInQuote(lotId_: BigInt): boolean {
    const result = super.call(
      "capacityInQuote",
      "capacityInQuote(uint96):(bool)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return result[0].toBoolean();
  }

  try_capacityInQuote(lotId_: BigInt): ethereum.CallResult<boolean> {
    const result = super.tryCall(
      "capacityInQuote",
      "capacityInQuote(uint96):(bool)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  claimBids(
    lotId_: BigInt,
    bidIds_: Array<BigInt>,
  ): AuctionModule__claimBidsResult {
    const result = super.call(
      "claimBids",
      "claimBids(uint96,uint64[]):((address,address,uint96,uint96)[],bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigIntArray(bidIds_),
      ],
    );

    return new AuctionModule__claimBidsResult(
      result[0].toTupleArray<AuctionModule__claimBidsResultBidClaimsStruct>(),
      result[1].toBytes(),
    );
  }

  try_claimBids(
    lotId_: BigInt,
    bidIds_: Array<BigInt>,
  ): ethereum.CallResult<AuctionModule__claimBidsResult> {
    const result = super.tryCall(
      "claimBids",
      "claimBids(uint96,uint64[]):((address,address,uint96,uint96)[],bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigIntArray(bidIds_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionModule__claimBidsResult(
        value[0].toTupleArray<AuctionModule__claimBidsResultBidClaimsStruct>(),
        value[1].toBytes(),
      ),
    );
  }

  claimProceeds(lotId_: BigInt): AuctionModule__claimProceedsResult {
    const result = super.call(
      "claimProceeds",
      "claimProceeds(uint96):(uint96,uint96,uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return new AuctionModule__claimProceedsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_claimProceeds(
    lotId_: BigInt,
  ): ethereum.CallResult<AuctionModule__claimProceedsResult> {
    const result = super.tryCall(
      "claimProceeds",
      "claimProceeds(uint96):(uint96,uint96,uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionModule__claimProceedsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  getLot(lotId_: BigInt): AuctionModule__getLotResultValue0Struct {
    const result = super.call(
      "getLot",
      "getLot(uint96):((uint48,uint48,uint8,uint8,bool,uint96,uint96,uint96,uint96))",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return changetype<AuctionModule__getLotResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_getLot(
    lotId_: BigInt,
  ): ethereum.CallResult<AuctionModule__getLotResultValue0Struct> {
    const result = super.tryCall(
      "getLot",
      "getLot(uint96):((uint48,uint48,uint8,uint8,bool,uint96,uint96,uint96,uint96))",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<AuctionModule__getLotResultValue0Struct>(value[0].toTuple()),
    );
  }

  hasEnded(lotId_: BigInt): boolean {
    const result = super.call("hasEnded", "hasEnded(uint96):(bool)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);

    return result[0].toBoolean();
  }

  try_hasEnded(lotId_: BigInt): ethereum.CallResult<boolean> {
    const result = super.tryCall("hasEnded", "hasEnded(uint96):(bool)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isLive(lotId_: BigInt): boolean {
    const result = super.call("isLive", "isLive(uint96):(bool)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);

    return result[0].toBoolean();
  }

  try_isLive(lotId_: BigInt): ethereum.CallResult<boolean> {
    const result = super.tryCall("isLive", "isLive(uint96):(bool)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lotData(id: BigInt): AuctionModule__lotDataResult {
    const result = super.call(
      "lotData",
      "lotData(uint96):(uint48,uint48,uint8,uint8,bool,uint96,uint96,uint96,uint96)",
      [ethereum.Value.fromUnsignedBigInt(id)],
    );

    return new AuctionModule__lotDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toI32(),
      result[3].toI32(),
      result[4].toBoolean(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
    );
  }

  try_lotData(id: BigInt): ethereum.CallResult<AuctionModule__lotDataResult> {
    const result = super.tryCall(
      "lotData",
      "lotData(uint96):(uint48,uint48,uint8,uint8,bool,uint96,uint96,uint96,uint96)",
      [ethereum.Value.fromUnsignedBigInt(id)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionModule__lotDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toI32(),
        value[3].toI32(),
        value[4].toBoolean(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
      ),
    );
  }

  maxAmountAccepted(lotId_: BigInt): BigInt {
    const result = super.call(
      "maxAmountAccepted",
      "maxAmountAccepted(uint96):(uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return result[0].toBigInt();
  }

  try_maxAmountAccepted(lotId_: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "maxAmountAccepted",
      "maxAmountAccepted(uint96):(uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxPayout(lotId_: BigInt): BigInt {
    const result = super.call("maxPayout", "maxPayout(uint96):(uint96)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);

    return result[0].toBigInt();
  }

  try_maxPayout(lotId_: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall("maxPayout", "maxPayout(uint96):(uint96)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minAuctionDuration(): BigInt {
    const result = super.call(
      "minAuctionDuration",
      "minAuctionDuration():(uint48)",
      [],
    );

    return result[0].toBigInt();
  }

  try_minAuctionDuration(): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "minAuctionDuration",
      "minAuctionDuration():(uint48)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  payoutFor(lotId_: BigInt, amount_: BigInt): BigInt {
    const result = super.call("payoutFor", "payoutFor(uint96,uint96):(uint96)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
      ethereum.Value.fromUnsignedBigInt(amount_),
    ]);

    return result[0].toBigInt();
  }

  try_payoutFor(lotId_: BigInt, amount_: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "payoutFor",
      "payoutFor(uint96,uint96):(uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigInt(amount_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  priceFor(lotId_: BigInt, payout_: BigInt): BigInt {
    const result = super.call("priceFor", "priceFor(uint96,uint96):(uint96)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
      ethereum.Value.fromUnsignedBigInt(payout_),
    ]);

    return result[0].toBigInt();
  }

  try_priceFor(lotId_: BigInt, payout_: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall("priceFor", "priceFor(uint96,uint96):(uint96)", [
      ethereum.Value.fromUnsignedBigInt(lotId_),
      ethereum.Value.fromUnsignedBigInt(payout_),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  purchase(
    lotId_: BigInt,
    amount_: BigInt,
    auctionData_: Bytes,
  ): AuctionModule__purchaseResult {
    const result = super.call(
      "purchase",
      "purchase(uint96,uint96,bytes):(uint96,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigInt(amount_),
        ethereum.Value.fromBytes(auctionData_),
      ],
    );

    return new AuctionModule__purchaseResult(
      result[0].toBigInt(),
      result[1].toBytes(),
    );
  }

  try_purchase(
    lotId_: BigInt,
    amount_: BigInt,
    auctionData_: Bytes,
  ): ethereum.CallResult<AuctionModule__purchaseResult> {
    const result = super.tryCall(
      "purchase",
      "purchase(uint96,uint96,bytes):(uint96,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigInt(amount_),
        ethereum.Value.fromBytes(auctionData_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      new AuctionModule__purchaseResult(
        value[0].toBigInt(),
        value[1].toBytes(),
      ),
    );
  }

  refundBid(lotId_: BigInt, bidId_: BigInt, caller_: Address): BigInt {
    const result = super.call(
      "refundBid",
      "refundBid(uint96,uint64,address):(uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigInt(bidId_),
        ethereum.Value.fromAddress(caller_),
      ],
    );

    return result[0].toBigInt();
  }

  try_refundBid(
    lotId_: BigInt,
    bidId_: BigInt,
    caller_: Address,
  ): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "refundBid",
      "refundBid(uint96,uint64,address):(uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(lotId_),
        ethereum.Value.fromUnsignedBigInt(bidId_),
        ethereum.Value.fromAddress(caller_),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  remainingCapacity(lotId_: BigInt): BigInt {
    const result = super.call(
      "remainingCapacity",
      "remainingCapacity(uint96):(uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return result[0].toBigInt();
  }

  try_remainingCapacity(lotId_: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "remainingCapacity",
      "remainingCapacity(uint96):(uint96)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  settle(lotId_: BigInt): AuctionModule__settleResult {
    const result = super.call(
      "settle",
      "settle(uint96):((uint96,uint96,address,address,uint96,uint96,bytes),bytes)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );

    return changetype<AuctionModule__settleResult>(
      new AuctionModule__settleResult(
        changetype<AuctionModule__settleResultSettlementStruct>(
          result[0].toTuple(),
        ),
        result[1].toBytes(),
      ),
    );
  }

  try_settle(lotId_: BigInt): ethereum.CallResult<AuctionModule__settleResult> {
    const result = super.tryCall(
      "settle",
      "settle(uint96):((uint96,uint96,address,address,uint96,uint96,bytes),bytes)",
      [ethereum.Value.fromUnsignedBigInt(lotId_)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<AuctionModule__settleResult>(
        new AuctionModule__settleResult(
          changetype<AuctionModule__settleResultSettlementStruct>(
            value[0].toTuple(),
          ),
          value[1].toBytes(),
        ),
      ),
    );
  }
}

export class INITCall extends ethereum.Call {
  get inputs(): INITCall__Inputs {
    return new INITCall__Inputs(this);
  }

  get outputs(): INITCall__Outputs {
    return new INITCall__Outputs(this);
  }
}

export class INITCall__Inputs {
  _call: INITCall;

  constructor(call: INITCall) {
    this._call = call;
  }
}

export class INITCall__Outputs {
  _call: INITCall;

  constructor(call: INITCall) {
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

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get params_(): AuctionCallParams_Struct {
    return changetype<AuctionCallParams_Struct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get quoteTokenDecimals_(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get baseTokenDecimals_(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class AuctionCall__Outputs {
  _call: AuctionCall;

  constructor(call: AuctionCall) {
    this._call = call;
  }

  get capacity(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidder_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get referrer_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get auctionData_(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get bidId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class ClaimBidsCall extends ethereum.Call {
  get inputs(): ClaimBidsCall__Inputs {
    return new ClaimBidsCall__Inputs(this);
  }

  get outputs(): ClaimBidsCall__Outputs {
    return new ClaimBidsCall__Outputs(this);
  }
}

export class ClaimBidsCall__Inputs {
  _call: ClaimBidsCall;

  constructor(call: ClaimBidsCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidIds_(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ClaimBidsCall__Outputs {
  _call: ClaimBidsCall;

  constructor(call: ClaimBidsCall) {
    this._call = call;
  }

  get bidClaims(): Array<ClaimBidsCallBidClaimsStruct> {
    return this._call.outputValues[0].value.toTupleArray<ClaimBidsCallBidClaimsStruct>();
  }

  get auctionOutput(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class ClaimBidsCallBidClaimsStruct extends ethereum.Tuple {
  get bidder(): Address {
    return this[0].toAddress();
  }

  get referrer(): Address {
    return this[1].toAddress();
  }

  get paid(): BigInt {
    return this[2].toBigInt();
  }

  get payout(): BigInt {
    return this[3].toBigInt();
  }
}

export class ClaimProceedsCall extends ethereum.Call {
  get inputs(): ClaimProceedsCall__Inputs {
    return new ClaimProceedsCall__Inputs(this);
  }

  get outputs(): ClaimProceedsCall__Outputs {
    return new ClaimProceedsCall__Outputs(this);
  }
}

export class ClaimProceedsCall__Inputs {
  _call: ClaimProceedsCall;

  constructor(call: ClaimProceedsCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimProceedsCall__Outputs {
  _call: ClaimProceedsCall;

  constructor(call: ClaimProceedsCall) {
    this._call = call;
  }

  get purchased(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get sold(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get payoutSent(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
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

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get auctionData_(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get payout(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get auctionOutput(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class RefundBidCall extends ethereum.Call {
  get inputs(): RefundBidCall__Inputs {
    return new RefundBidCall__Inputs(this);
  }

  get outputs(): RefundBidCall__Outputs {
    return new RefundBidCall__Outputs(this);
  }
}

export class RefundBidCall__Inputs {
  _call: RefundBidCall;

  constructor(call: RefundBidCall) {
    this._call = call;
  }

  get lotId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidId_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get caller_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RefundBidCall__Outputs {
  _call: RefundBidCall;

  constructor(call: RefundBidCall) {
    this._call = call;
  }

  get refund(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get settlement(): SettleCallSettlementStruct {
    return changetype<SettleCallSettlementStruct>(
      this._call.outputValues[0].value.toTuple(),
    );
  }

  get auctionOutput(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class SettleCallSettlementStruct extends ethereum.Tuple {
  get totalIn(): BigInt {
    return this[0].toBigInt();
  }

  get totalOut(): BigInt {
    return this[1].toBigInt();
  }

  get pfBidder(): Address {
    return this[2].toAddress();
  }

  get pfReferrer(): Address {
    return this[3].toAddress();
  }

  get pfRefund(): BigInt {
    return this[4].toBigInt();
  }

  get pfPayout(): BigInt {
    return this[5].toBigInt();
  }

  get auctionOutput(): Bytes {
    return this[6].toBytes();
  }
}
