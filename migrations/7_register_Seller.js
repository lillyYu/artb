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
