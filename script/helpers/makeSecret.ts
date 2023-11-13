import { namehash } from "ethers";

export function makeSecret(): string {
  var platformHex = "";

  if (process.env.PLATFORM_URL != undefined) {
    const platformNamehash = namehash(process.env.PLATFORM_URL! || "");
    platformHex = platformNamehash.slice(2, 10);
  }

  const randomHex = [...Array(64 - platformHex.length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

  return "0x" + platformHex + randomHex;
}
