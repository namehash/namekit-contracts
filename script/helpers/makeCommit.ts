import { ethers } from "ethers";

export function makeCommitmentHash(
  name: string,
  owner: string,
  secret: string,
  resolver: string,
  addr: string
): string {
  const label = ethers.solidityPackedKeccak256(["bytes"], [ethers.hexlify(ethers.toUtf8Bytes(name))]);
  const encodedArgs = ethers.solidityPacked(
    ["bytes", "address", "address", "address", "bytes32"],
    [label, owner, resolver, addr, secret]
  );
  const commitmentHash = ethers.solidityPackedKeccak256(["bytes"], [encodedArgs]);

  return commitmentHash;
}
