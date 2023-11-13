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
  Goerli = 5,
}

export const addresses: ContractAddresses = {
  [Networks.Mainnet]: {
    namekitEthRegistrar: "0x232332263e6e4bd8a134b238975e2200c8b7dac1",
    chainlinkPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    ethRegistrarController: "0x253553366Da8546fC250F225fe3d25d0C782303b",
    publicResolver: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    treasury: "0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3",
  },
  [Networks.Goerli]: {
    namekitEthRegistrar: "0x232332263e6e4bd8a134b238975e2200c8b7dac1",
    chainlinkPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    ethRegistrarController: "0xCc5e7dB10E65EED1BBD105359e7268aa660f6734",
    publicResolver: "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750",
    treasury: "0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3",
  },
};
