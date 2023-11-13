import { signer } from "./getSigner";
import { addresses } from "./constants";

import {
  IChainlinkPriceFeed__factory,
  IEthRegistrarController__factory,
  NamekitEthRegistrar__factory,
} from "../../typechain-types";

const { CHAIN_ID } = process.env;

export const namekitEthRegistrar = NamekitEthRegistrar__factory.connect(
  addresses[Number(CHAIN_ID)].namekitEthRegistrar,
  signer
);

export const chainlinkPriceFeed = IChainlinkPriceFeed__factory.connect(
  addresses[Number(CHAIN_ID)].chainlinkPriceFeed,
  signer
);

export const ethRegistrarController = IEthRegistrarController__factory.connect(
  addresses[Number(CHAIN_ID)].ethRegistrarController,
  signer
);
