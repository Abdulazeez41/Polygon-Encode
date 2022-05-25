const myNFT = artifacts.require("NFT"); 

module.exports = function (deployer) { 
    deployer.deploy(myNFT); 
};