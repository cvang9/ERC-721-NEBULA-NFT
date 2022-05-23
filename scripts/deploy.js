

async function main() {

  const myNFT = await hre.ethers.getContractFactory("NebulaNFT");
  const myNft = await myNFT.deploy();
  

  console.log("NFT deployed to:", myNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // Deployed address -> 0x13B3DCEC9cB9c40dE1660840821cF7e6A4d5777e


// PINATA
// STEP1: UPLOAD YOUR NFT 
// STEP2: MAKE METADATA INCLUDING LINK OF IMAGE
// STEP3: UPLOAD YOUR METADATA
// STEP4: PASTE THE LINK OF METADATA IN PARAMETER OF mintNFT("") FUNCTION