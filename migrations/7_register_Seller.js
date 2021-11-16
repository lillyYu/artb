const CollectionSeller = artifacts.require("CollectionSeller");
const ABCToken = artifacts.require("ABCToken");
const ArtbCollection = artifacts.require("ArtbCollection");

module.exports = async function (deployer, network, accounts) {
  // return;
  console.log(accounts[0]);
  const Token = await ABCToken.deployed();
  const NFT = await ArtbCollection.deployed();
  const Seller = await CollectionSeller.deployed();

  const result = await Seller.GoodsRegistration(Token.address, NFT.address);
  console.log("result: ", result.logs[0].args.id);

  await Promise.all([
    Seller.GoodsRegCollection(0, 0, 100000),
    Seller.GoodsRegPayment(0, 100, accounts[0]),
    Seller.GoodsSetTime(0, 0, 9999999999999),
    Seller.GoodsSetOpen(0, true),
  ]);

  const goods = await Seller.Goods(0);
  console.log("Goods", goods);
  return;
};
