import { ethers } from "ethers";

export const getNamekitFee = (
  name: string,
  etherPriceInCurrency: bigint,
  currencyDecimals: bigint
) => {
  var namekitFeeInCurrency;
  // TODO: adapt to any currency, currently is only returning fee in USD
  const feeDecimals = 2n;
  if (name.length > 4) {
    namekitFeeInCurrency = 99n * 10n ** (currencyDecimals - feeDecimals);
  } else if (name.length == 4) {
    namekitFeeInCurrency = 999;
  } else {
    namekitFeeInCurrency = 999;
  }
  // console.log("namekitFeeInCurrency: ", namekitFeeInCurrency);
  // console.log("currencyDecimals: ", currencyDecimals);
  // console.log("etherPriceInCurrency: ", etherPriceInCurrency);

  const namekitFeeInWei =
    ((BigInt(namekitFeeInCurrency) * 10n ** currencyDecimals) / etherPriceInCurrency) *
    ethers.WeiPerEther;
  // nh fee USD     nh fee wei
  // ---------- =  ------------
  //  eth USD       eth in wei
  // console.log("namekitFeeInWei: ", namekitFeeInWei);
  // const namekitFeeInWei =
  //   (currencyExchangeRateInWei * BigInt(namekitFeeInCurrency)) / currencyDecimals;

  return {
    namekitFeeInWei,
    namekitFeeInCurrency,
  };
};
