import { ethers } from "ethers";

export const getCommitGasCost = (
  gasPerWei: bigint,
  commitGasLimit: bigint,
  currencyExchangeRateInWei: bigint,
  currencyDecimals: bigint
) => {
  const commitGasCostInWei = gasPerWei * commitGasLimit;
  const commitGasCostInCurrency =
    ((commitGasCostInWei * currencyDecimals) / currencyExchangeRateInWei) * ethers.WeiPerEther; // TODO fix logic
  return {
    commitGasCostInWei,
    commitGasCostInCurrency,
  };
};

export const getRegisterGasCost = (
  gasPerWei: bigint,
  registerGasLimit: bigint,
  currencyExchangeRateInWei: bigint,
  currencyDecimals: bigint
) => {
  const registerGasCostInWei = gasPerWei * registerGasLimit;
  const registerGasCostInCurrency = (registerGasCostInWei * currencyDecimals) / currencyExchangeRateInWei; // TODO fix logic
  return {
    registerGasCostInWei,
    registerGasCostInCurrency,
  };
};

10;
