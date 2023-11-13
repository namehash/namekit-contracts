import { Wallet } from "ethers";

export const isValidPrivateKey = (value: string): boolean => {
  try {
    new Wallet(value);
    return true;
  } catch (e) {
    return false;
  }
};
