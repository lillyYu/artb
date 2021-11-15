const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const ArtbCollection = artifacts.require("ArtbCollection");

module.exports = async function (deployer) {
  const Token = await ABCToken.deployed();
  const NFT = await ArtbCollection.deployed();

  await deployer.deploy(
    CollectionSeller,
    NFT.address,
    Token.address,
    100,
    0,
    9999999999999
  );
};
