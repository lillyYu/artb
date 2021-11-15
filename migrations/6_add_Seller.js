const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const ArtbCollection = artifacts.require("ArtbCollection");

const Address = {
  development: "0x787FCeBEa97AB4e3B07C84713aF686eF4E50f0D1",
  ropsten: "0x6F052Fc672D33061972ebe3CB0C509Fba13858fF",
  rinkeby: "0x6F052Fc672D33061972ebe3CB0C509Fba13858fF",
  ethereum: "0x6F052Fc672D33061972ebe3CB0C509Fba13858fF",
};
module.exports = async function (deployer, network, accounts) {
  console.log(accounts[0]);
  const Token = await ABCToken.deployed();
  const NFT = await ArtbCollection.deployed();
  const Seller = await CollectionSeller.deployed();

  await NFT.setApprovalForAll(Seller.address, true);
  await Seller.addSeller(accounts[0]);

  return;
};
