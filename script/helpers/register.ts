import { namekitEthRegistrar } from "./getContracts";

export async function register(
  label: string,
  owner: string,
  duration: bigint,
  secret: string,
  resolver: string,
  data: string[],
  reverseRecord: boolean,
  ownerControlledFuses: number,
  valueToRegister: bigint
) {
  const tx = await namekitEthRegistrar.completeRegistration(
    label,
    owner,
    duration,
    secret,
    resolver,
    data,
    reverseRecord,
    ownerControlledFuses,
    { value: valueToRegister, gasLimit: 450_000 }
  );
  await tx.wait();

  return tx;
}
