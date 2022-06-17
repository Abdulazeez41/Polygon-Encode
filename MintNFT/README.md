# NFT Mint

Deploy, mint and verify an NFT contract on polygon blockchain

## Minted NFT

The verified contract can be found [here](https://mumbai.polygonscan.com/address/0xfE8617736A39DcceaB244F55DF55522A9fcAba9A#code)
Here's also a link to view the minted NFTs on [opensea](https://testnets.opensea.io/collection/tough-guy-1)

## Usage

How to use this repository to mint your own NFT
 
### Compile

```
npx hardhat compile
```

### Deploy to mumbai testnet

```
npx hardhat run scripts/mint.js
```

### Verify on polygonscan

```
npx hardhat verify {DEPLOYED_CONTRACT_ADDRESS}
```

### Upload your NFT media to IPFS

You can also use `scripts/upload.js` to upload your nft medias to ipfs

```
npx hardhat run scripts/upload.js
```
