const CollectionSeller = artifacts.require("CollectionSeller");

module.exports = async function (deployer) {
  await deployer.deploy(CollectionSeller);
};
