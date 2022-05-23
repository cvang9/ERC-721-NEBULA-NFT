// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NebulaNFT is ERC721URIStorage , Ownable{

using Counters for Counters.Counter;


// This gets you a simple counter that can be incremented or decremented. It will allow us to issue ids to our ERC721 tokens.
Counters.Counter private _tokenIds;

//we'll initialise its constructor in the BasicNFT constructor. It requires two parameters i.e. a name and a symbol.
constructor() ERC721("Nebula","NBL"){

}


// Now comes the most important function in this contract i.e the motherf*cking mint function.
function mintNFT( address receipient, string memory tokenURI ) public onlyOwner returns(uint256){

    // Increment the the token Ids by one
    _tokenIds.increment();

    // Get the current Id (the first id will be 1)
    uint newId = _tokenIds.current();

     // Call the `_safeMint` function provided by OpenZeppelin
    _mint(receipient,newId);

    // Call the `_setTokenURI` function provided by OpenZeppelin.
    // This is one of my favourite methods provided by OpenZeppelin. 
    // You can set the metadata for your token through this function.
    // You know the kind of metadata you see on OpenSea - a name, description, and even an image. 
    // It takes in a token id and uri as arguments.
     _setTokenURI(newId, tokenURI);

    return newId;
}


}

//https://dev.to/lilcoderman/how-to-create-a-motherfcking-nft-using-solidity-5b5d