import { namekitEthRegistrar } from "./getContracts";

export async function commit(commitHash: string) {
  const tx = await namekitEthRegistrar.requestPermissionToRegister(commitHash);
  await tx.wait();

  return tx;
}
