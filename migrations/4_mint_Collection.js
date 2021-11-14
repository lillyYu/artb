const ArtbCollection = artifacts.require("ArtbCollection");
const Address = {
  development: "0x55294a02d91F4DA8DeEb619692DeFe1005DA8A4A",
};

module.exports = async function (deployer, network) {
  const nft = await ArtbCollection.deployed();
  nft.mint(Address[network], 0, 100000, "0x0"); // 가을 축제
};
