# NameKit contracts
- [NameKit contracts](#namekit-contracts)
  - [Getting started](#getting-started)
    - [Required](#required)
    - [Deploying your contracts](#deploying-your-contracts)
  - [Commands](#commands)
    - [For registering a name through](#for-registering-a-name-through)
    - [For withdrawing collected fees](#for-withdrawing-collected-fees)
  - [Contracts deployed](#contracts-deployed)
    - [Mainnet](#mainnet)
    - [Goerli](#goerli)

## Getting started

### Required
- Node and Yarn, to run the scripts
- Infura API key, to deploy and interact with contracts
- Etherscan API key, to verify contracts


### Deploying your contracts
1. Install all the dependencies with [Node](https://nodejs.org/en/download/) and Yarn.
   ```
   yarn
   ```

2. Copy the `sample.env` file and rename it to `.env`, then complete all missing variables.
3.  If having the same contract address in testnet and mainnet is important to you, then the following steps are needed.
    1.  Same treasury address across networks. 
        -  If it's an EOA (address that comes from private key), no worries. 
        -  If you want a Safe Multisig, then create your treasury [here](https://smold.app/safe).
    2. The deployer private key must be a fresh account, with zero transactions. Make sure to send some ETH to this account in order to pay for fees on contract deployment.
4. Deploying contracts
   - Goerli
   ```
   yarn deploy:test
   ```
   - Mainnet
   ```
   yarn deploy:mainnet
   ```
5. Fork this repo and change the NamekitController and treasury addresses on README, for internal documentation.

🎉 Congrats, now you have a new way to generate revenue!!

## Commands
Before running these commands, make sure to:
- Generate the typechain interfaces: `yarn compile`
- Change CHAIN_ID in `.env` to the desired network you want to interact with. 1 = Mainnet, 5 = Goerli.

### For registering a name through
- Make sure to fill the environment variables
  - PLATFORM_URL: For making your registrations to count on [ENSIP-14](https://docs.ens.domains/ens-improvement-proposals/ensip-14-platform-source-parameter) standard.
  - NAME_TO_REGISTER
```
yarn register-name
```

### For withdrawing collected fees
```
yarn withdraw
```
  
## Contracts deployed

### Mainnet
- [Example NamekitController](https://etherscan.io/address/0x232332263e6e4bd8a134b238975e2200c8b7dac1#code): `0x232332263e6e4bd8a134b238975e2200c8b7dac1`
- [Example NameKit Treasury](https://etherscan.io/address/0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3#code): `0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3`
- [ENS ETHRegistrarController](https://etherscan.io/address/0x253553366Da8546fC250F225fe3d25d0C782303b#code): `0x253553366Da8546fC250F225fe3d25d0C782303b`
- [ENS Public resolver](https://etherscan.io/address/0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41#code): `0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41`
- [ENS Registry with fallback](https://etherscan.io/address/0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e#code): `0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e`
- [Chainlink ETH/USD data feed](https://etherscan.io/address/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419#code) `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`

### Goerli
- [Example NamekitController](https://goerli.etherscan.io/address/0x232332263e6e4bd8a134b238975e2200c8b7dac1#code): `0x232332263e6e4bd8a134b238975e2200c8b7dac1`
- [Example NameKit Treasury](https://goerli.etherscan.io/address/0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3#code): `0xC362EB2dDCde1866b263fF59778c0a6eF69eF4F3`
- [ENS ETHRegistrarController](https://goerli.etherscan.io/address/0xCc5e7dB10E65EED1BBD105359e7268aa660f6734#code): `0xCc5e7dB10E65EED1BBD105359e7268aa660f6734`
- [ENS Public resolver](https://goerli.etherscan.io/address/0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750#code): `0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750`
- [ENS Registry with fallback](https://goerli.etherscan.io/address/0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e#code): `0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e`
- [Chainlink ETH/USD data feed](https://goerli.etherscan.io/address/0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e#code): `0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e`

_ABIs are avaiable on Etherscan_