import { provider } from "./getSigner";

export const getWeiPerGasUnit = async (): Promise<bigint> => {
  const blockDetails = await provider.getBlock("latest");
  const baseFeeWei: bigint = blockDetails!.baseFeePerGas!;
  return baseFeeWei + BigInt(2 * Math.pow(10, 9));
};
