import * as dotenv from "dotenv";
dotenv.config();
import { namekitEthRegistrar, print } from "../helpers";

async function main() {
  const tx = await namekitEthRegistrar.withdraw();
  await tx.wait();
  print("txWithdraw.hash", tx.hash);
}
main();
