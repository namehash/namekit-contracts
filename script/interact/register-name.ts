import * as dotenv from "dotenv";
dotenv.config();
import {
  commit,
  getCommitGasCost,
  getCommitHash,
  getEthPrice,
  getNamekitFee,
  getNamePrice,
  getSetAddrCalldata,
  getWeiPerGasUnit,
  isNameAvailable,
  makeSecret,
  print,
  register,
  sleep,
} from "../helpers";
import { exit } from "process";
import { ensNormalize } from "ethers";

async function main(name: string) {
  const normalizedName = ensNormalize(name);
  const commitGasLimit = 50_000n;
  const duration = 31_536_000n; // 30 days in seconds
  const owner = "0x76a6d08b82034b397e7e09dae4377c18f132bbb8";
  const resolver = "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750";
  const data: string[] = [getSetAddrCalldata(normalizedName, owner)];
  const setPrimaryName = true;
  const fuses = 0;

  // Gas price per wei - Ideally it's updated each block (13 seconds)
  const weiPerGasUnit = await getWeiPerGasUnit();
  print("weiPerGasUnit", weiPerGasUnit);

  // ETH price in USD
  const { etherPriceInCurrency, currencyDecimals } = await getEthPrice();
  print("etherPriceInCurrency", etherPriceInCurrency);

  // Commit cost in ETH and USD
  const commitGasCost = getCommitGasCost(
    weiPerGasUnit,
    commitGasLimit,
    etherPriceInCurrency,
    currencyDecimals
  );
  print("commitGasCost in wei", commitGasCost.commitGasCostInWei);
  print("commitGasCost in USD", commitGasCost.commitGasCostInCurrency);

  // Name price in ETH and USD
  const { namePriceInWei, namePriceInCurrency } = await getNamePrice(
    normalizedName,
    duration,
    etherPriceInCurrency,
    currencyDecimals
  );
  print("namePriceInWei", namePriceInWei);
  print("namePriceInCurrency", namePriceInCurrency);

  // Namekit fee in ETH and USD
  const { namekitFeeInWei, namekitFeeInCurrency } = getNamekitFee(
    normalizedName,
    etherPriceInCurrency,
    currencyDecimals
  );
  print("namekitFeeInWei", namekitFeeInWei);
  print("namekitFeeInCurrency", namekitFeeInCurrency);

  // Verify that name is available
  const nameAvailabilityBeforeRegistration = await isNameAvailable(normalizedName);
  console.log(
    `The name "${normalizedName}" is ${
      nameAvailabilityBeforeRegistration ? "still" : "not"
    } available`
  );
  if (!nameAvailabilityBeforeRegistration) {
    exit();
  }

  // Generate secret parameter with ENSIP-14 parameter
  const secret = makeSecret();
  print("secret", secret);

  // Get hash to commit
  const commitHash = await getCommitHash(
    normalizedName,
    owner,
    duration,
    secret,
    resolver,
    data,
    setPrimaryName,
    fuses
  );
  print("commitHash", commitHash);

  // Commit
  const txCommit = await commit(commitHash);
  print("txCommit.hash", txCommit.hash);

  // Wait for 60 seconds
  console.log("Waiting 60 seconds for the commit to be valid");
  await sleep(60000);

  // // Register
  const txRegister = await register(
    normalizedName,
    owner,
    duration,
    secret,
    resolver,
    data,
    setPrimaryName,
    fuses,
    namePriceInWei + 10n
  );
  print("txRegister.hash", txRegister.hash);

  // Verify that name is not available
  const nameAvailabilityAfterRegistration = await isNameAvailable(normalizedName);
  console.log(
    `The name "${normalizedName}" is ${
      nameAvailabilityAfterRegistration ? "still" : "not"
    } available`
  );
}

main(process.env.NAME_TO_REGISTER!);
