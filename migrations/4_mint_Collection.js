const ArtbCollection = artifacts.require("ArtbCollection");
const Address = {
  development: "0x787FCeBEa97AB4e3B07C84713aF686eF4E50f0D1",
  ropsten: "0x6F052Fc672D33061972ebe3CB0C509Fba13858fF",
  ethereum: "0x6F052Fc672D33061972ebe3CB0C509Fba13858fF",
};

module.exports = async function (deployer, network, accounts) {
  const nft = await ArtbCollection.deployed();
  nft.mint(accounts[0], 0, 100000, "0x0"); // 가을 축제
};
