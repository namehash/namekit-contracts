import { ethers } from "ethers";

export function getSetAddrCalldata(name: string, address: string) {
  const publicResolverAbi = ["function setAddr(bytes32 node, uint coinType, bytes memory a)"];

  const iface = new ethers.Interface(publicResolverAbi);

  const calldata = iface.encodeFunctionData("setAddr", [
    ethers.namehash(name.concat(".eth")),
    60,
    address,
  ]);

  return calldata;
}
