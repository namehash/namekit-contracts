import { ethRegistrarController } from "./getContracts";

export async function isNameAvailable(name: string) {
  const nameAvailability = await ethRegistrarController.available.staticCall(name);
  return nameAvailability;
}
