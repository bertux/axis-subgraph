// import { BigInt } from "@graphprotocol/graph-ts";
// import {
//   afterAll,
//   assert,
//   beforeAll,
//   clearStore,
//   describe,
//   test,
// } from "matchstick-as/assembly/index";

// import { handleBidDecrypted } from "../src/handleEncryptedMarginalPrice";
// import { createBidDecryptedEvent } from "./empam-utils";

// // Tests structure (matchstick-as >=0.5.0)
// // https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

// describe("Describe entity assertions", () => {
//   beforeAll(() => {
//     const lotId = BigInt.fromI32(234);
//     const bidId = BigInt.fromI32(234);
//     const amountIn = BigInt.fromI32(234);
//     const amountOut = BigInt.fromI32(234);
//     const newBidDecryptedEvent = createBidDecryptedEvent(
//       lotId,
//       bidId,
//       amountIn,
//       amountOut,
//     );
//     handleBidDecrypted(newBidDecryptedEvent);
//   });

//   afterAll(() => {
//     clearStore();
//   });

//   // For more test scenarios, see:
//   // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

//   test("BidDecrypted created and stored", () => {
//     assert.entityCount("BidDecrypted", 1);

//     // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
//     assert.fieldEquals(
//       "BidDecrypted",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "lotId",
//       "234",
//     );
//     assert.fieldEquals(
//       "BidDecrypted",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "bidId",
//       "234",
//     );
//     assert.fieldEquals(
//       "BidDecrypted",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "amountIn",
//       "234",
//     );
//     assert.fieldEquals(
//       "BidDecrypted",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "amountOut",
//       "234",
//     );

//     // More assert options:
//     // https://thegraph.com/docs/en/developer/matchstick/#asserts
//   });
// });
