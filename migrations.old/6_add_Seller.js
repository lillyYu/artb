const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const ArtbCollection = artifacts.require("ArtbCollection");

module.exports = async function (deployer, network, accounts) {
  console.log(accounts[0]);
  const Token = await ABCToken.deployed();
  const NFT = await ArtbCollection.deployed();
  const Seller = await CollectionSeller.deployed();

  await NFT.setApprovalForAll(Seller.address, true);
  await Seller.addSeller(accounts[0]);

  return;
};
