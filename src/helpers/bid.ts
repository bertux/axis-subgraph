import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts";

import {
  EncryptedMarginalPrice__bidsResult,
  EncryptedMarginalPrice__encryptedBidsResult,
} from "../../generated/BatchAuctionHouse/EncryptedMarginalPrice";
import { BatchAuctionLot, BatchBid } from "../../generated/schema";
import {
  getEncryptedMarginalPriceModule,
  updateBidAmount,
} from "../modules/encryptedMarginalPrice";

export const BidStatus_Submitted = "submitted";
export const BidStatus_Decrypted = "decrypted";
export const BidStatus_Claimed = "claimed";

export const BidOutcome_Won = "won";
export const BidOutcome_WonPartialFill = "won - partial fill";
export const BidOutcome_Lost = "lost";

export function getBidId(lot: BatchAuctionLot, bidId: BigInt): string {
  return lot.id.concat("-").concat(bidId.toString());
}

export function getBidRecordNullable(
  lot: BatchAuctionLot,
  bidId: BigInt,
): BatchBid | null {
  const bidRecordId = getBidId(lot, bidId);
  const entity = BatchBid.load(bidRecordId);

  return entity;
}

export function getBidRecord(lot: BatchAuctionLot, bidId: BigInt): BatchBid {
  const entity = getBidRecordNullable(lot, bidId);

  if (!entity) {
    const bidRecordId = getBidId(lot, bidId);
    throw new Error("Bid not found: " + bidRecordId);
  }

  return entity as BatchBid;
}

export function getEncryptedBid(
  auctionHouseAddress: Address,
  auctionRef: Bytes,
  lotId: BigInt,
  bidId: BigInt,
): EncryptedMarginalPrice__encryptedBidsResult {
  const auctionModule = getEncryptedMarginalPriceModule(
    auctionHouseAddress,
    auctionRef,
  );

  return auctionModule.encryptedBids(lotId, bidId);
}

export function getBid(
  auctionHouseAddress: Address,
  auctionRef: Bytes,
  lotId: BigInt,
  bidId: BigInt,
): EncryptedMarginalPrice__bidsResult {
  const auctionModule = getEncryptedMarginalPriceModule(
    auctionHouseAddress,
    auctionRef,
  );

  return auctionModule.bids(lotId, bidId);
}

export function getBidStatus(status: i32): string {
  switch (status) {
    case 0:
      return BidStatus_Submitted;
    case 1:
      return BidStatus_Decrypted;
    case 2:
      return BidStatus_Claimed;
    default:
      throw new Error("Unknown bid status: " + status.toString());
  }
}

export function updateBidStatus(
  auctionHouseAddress: Address,
  auctionRef: Bytes,
  lotRecord: BatchAuctionLot,
  bidId: BigInt,
): void {
  // Fetch the existing bid record
  const entity = getBidRecordNullable(lotRecord, bidId);
  if (!entity) {
    log.debug("updateBidStatus: Skipping non-existent bid id {} on lot {}", [
      bidId.toString(),
      lotRecord.id,
    ]);
    return;
  }

  const bid = getBid(auctionHouseAddress, auctionRef, lotRecord.lotId, bidId);

  entity.status = getBidStatus(bid.getStatus());

  entity.save();

  log.debug("Updated bid status to {} for bid id {}", [
    entity.status,
    entity.id,
  ]);
}

export function updateBidsStatus(
  auctionHouseAddress: Address,
  auctionRef: Bytes,
  lotRecord: BatchAuctionLot,
): void {
  // Fetch the auction lot
  const maxBidId = lotRecord.maxBidId;

  for (
    let i = BigInt.fromI32(1);
    i.le(maxBidId);
    i = i.plus(BigInt.fromI32(1))
  ) {
    updateBidStatus(auctionHouseAddress, auctionRef, lotRecord, i);
  }
}

export function updateBidsAmounts(
  auctionHouseAddress: Address,
  auctionRef: Bytes,
  lotRecord: BatchAuctionLot,
): void {
  const maxBidId = lotRecord.maxBidId;

  for (
    let i = BigInt.fromI32(1);
    i.le(maxBidId);
    i = i.plus(BigInt.fromI32(1))
  ) {
    updateBidAmount(auctionHouseAddress, auctionRef, lotRecord, i);
  }
}
