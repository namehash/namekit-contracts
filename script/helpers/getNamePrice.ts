import { ethRegistrarController } from "./getContracts";

export const getNamePrice = async (
  name: string,
  duration: bigint,
  currencyExchangeRateInWei: bigint,
  currencyDecimals: bigint
) => {
  const { base, premium } = await ethRegistrarController.rentPrice(name, duration);
  const namePriceInWei = base + premium;
  const namePriceInCurrency = (namePriceInWei * currencyDecimals) / currencyExchangeRateInWei;

  return {
    namePriceInWei,
    namePriceInCurrency,
  };
};
