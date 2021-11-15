const ArtbCollection = artifacts.require("ArtbCollection");

module.exports = async function (deployer, network, accounts) {
  const nft = await ArtbCollection.deployed();
  nft.mint(accounts[0], 0, 100000, "0x0"); // 가을 축제
};
