import { namekitEthRegistrar } from "./getContracts";

export async function getCommitHash(
  label: string,
  owner: string,
  duration: bigint,
  secret: string,
  resolver: string,
  data: string[],
  reverseRecord: boolean,
  ownerControlledFuses: number
) {
  // TODO: calculate hash offchain
  const commitHash = await namekitEthRegistrar.generateReservationNumber(
    label,
    owner,
    duration,
    secret,
    resolver,
    data,
    reverseRecord,
    ownerControlledFuses
  );

  return commitHash;
}
