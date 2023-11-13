import { BigNumber } from "ethers";

export const isValidBigNumber = (value: string): boolean => {
  try {
    BigNumber.from(value);
    return true;
  } catch (e) {
    return false;
  }
};
