import { Wallet, InfuraProvider } from "ethers";

const { CHAIN_ID, INFURA_API_KEY, PRIVATE_KEY } = process.env;
export const provider = new InfuraProvider(Number(CHAIN_ID), INFURA_API_KEY);
export const signer = new Wallet(PRIVATE_KEY!, provider);
