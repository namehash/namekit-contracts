import hre, { ethers } from "hardhat";
import { addresses, verify } from "../helpers";

async function main() {
  const [deployer] = await ethers.getSigners();
  const chainId = Number((await ethers.provider.getNetwork()).chainId);
  const treasury = addresses[chainId].treasury;
  const ensController = addresses[chainId].ethRegistrarController;

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer)).toString());

  const contractFactory = await ethers.getContractFactory("NamekitEthRegistrar");
  const contract = await contractFactory.deploy(treasury);
  const contractAddress = await contract.getAddress();
  console.log("Contract deployed at:", contractAddress);

  await contract.setEthRegistrarController(ensController);

  await verify(hre, contractAddress, [treasury]);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
