interface ContractAddresses {
  [chainId: number]: {
    namekitEthRegistrar: string;
    chainlinkPriceFeed: string;
    ethRegistrarController: string;
    publicResolver: string;
    treasury: string;
  };
}

enum Networks {
  Mainnet = 1,
  Sepolia = 11155111,
}

export const addresses: ContractAddresses = {
  [Networks.Mainnet]: {
    namekitEthRegistrar: "0x232332263e6e4bd8a134b238975e2200c8b7dac1",
    chainlinkPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    ethRegistrarController: "0x253553366Da8546fC250F225fe3d25d0C782303b",
    publicResolver: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    treasury: "0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3",
  },
  [Networks.Sepolia]: {
    namekitEthRegistrar: "0x232332263e6e4bd8a134b238975e2200c8b7dac1",
    chainlinkPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    ethRegistrarController: "0xFED6a969AaA60E4961FCD3EBF1A2e8913ac65B72",
    publicResolver: "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD",
    treasury: "0xb3C70b0FEeFfE0F3a540514C8080147c296982d3",
  },
};
