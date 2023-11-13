import { sleep } from "./sleep";

export async function verify(
  hre: any,
  address: string,
  constructorArguments: any = [],
  libraries?: Object
): Promise<void> {
  console.log("--Starting Verify Process--");
  const verifyData = {
    address,
    constructorArguments,
    libraries,
  };

  if (libraries != null) {
    verifyData.libraries = libraries;
  }

  await sleep(60000);
  await hre.run("verify:verify", verifyData);
}
