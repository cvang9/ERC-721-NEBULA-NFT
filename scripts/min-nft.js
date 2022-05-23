require('dotenv').config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } =require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract  =require("../artifacts/contracts/myNFT.sol/NebulaNFT.json");


const contractAddress = "0x13B3DCEC9cB9c40dE1660840821cF7e6A4d5777e";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); //creating instance of contract


//create transaction
async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
  
    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    };
  
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
            }
          }
        );
      })
      .catch((err) => {
        console.log(" Promise failed:", err);
      });
  }
  mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmPkqDxzuDY468ZEkMgrYZ9jfanGBaWMXzrwVVnAqyZsXb" //METADATA URL
  );
// 0xe8b851935f150e4a696f2ddc93edf52275e4390f44b1db9d78a704aa7a87e08c


