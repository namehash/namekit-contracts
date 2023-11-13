import { chainlinkPriceFeed } from "./getContracts";

export const getEthPrice = async () => {
  const latestRoundData = await chainlinkPriceFeed.latestRoundData();
  const etherPriceInCurrency = latestRoundData.answer;
  const currencyDecimals = await chainlinkPriceFeed.decimals();
  return {
    etherPriceInCurrency,
    currencyDecimals,
  };
};
