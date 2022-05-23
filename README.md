# ERC-721-NEBULA-NFT
# Hardhat ERC-721 Repo

* Clone this and run `npm i` in terminal.
* Add .env file with:
```
PRIVATE_KEY:" YOUR PRIVATE KEY "
PUBLIC_KEY:" YOUR PUBLIC KEY "
ALCHEMY_URL:" ALCHEMY URL  "
```
* Edit the deploy script to pass in your name and ticker
* Edit the contractUri method in the contract and add your OpenSea collection URI 
* Edit the mint script and add your token uri, contract address and account address of the account you want to mint to.
* Deploy with `npx hardhat run --network ropsten scripts/deploy.js`
* Mint with `npx hardhat run --network ropsten scripts/mint.js`


## Screenshots

![App Screenshot](https://gateway.pinata.cloud/ipfs/Qmb3XgNzqPN9LJGkPCAwufCEprfjefvzFaBbFLRCpimMtv)


