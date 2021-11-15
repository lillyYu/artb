const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const ArtbCollection = artifacts.require("ArtbCollection");

module.exports = async function (deployer) {
  const Token = await ABCToken.deployed();
  const NFT = await ArtbCollection.deployed();
  const Seller = await CollectionSeller.deployed();

  NFT.setApprovalForAll(Seller.address, true);
  Seller.register(0, 100000);
};
