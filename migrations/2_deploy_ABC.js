const ABCToken = artifacts.require("ABCToken");

module.exports = function (deployer) {
  deployer.deploy(ABCToken, "10000000000000000000000000000");
};
