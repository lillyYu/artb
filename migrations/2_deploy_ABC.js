const ABCToken = artifacts.require("ABCToken");

module.exports = function (deployer) {
  deployer.deploy(ABCToken, 100000000);
};
