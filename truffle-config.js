// const HDWalletProvider = require("@truffle/hdwallet-provider");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const fs = require("fs");
const privateKey = [fs.readFileSync(".secret").toString().trim()];
const ganache = fs.readFileSync(".ganache").toString().trim();

module.exports = {
  networks: {
    ethereum: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://mainnet.infura.io/v3/52f7d11b90ec45f1ac9912d0fb864695`
        ),
      network_id: 1, // Ropsten's id
      gas: 5000000, // Ropsten has a lower block limit than mainnet
      skipDryRun: true,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://ropsten.infura.io/v3/52f7d11b90ec45f1ac9912d0fb864695`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKey,
          "https://rinkeby.infura.io/v3/52f7d11b90ec45f1ac9912d0fb864695"
        );
      },
      network_id: 4,
      gas: 4700000,
      gasPrice: 10000000000,
      skipDryRun: true,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      // from: "0x5c95480166191328677caeFBB8ca4f568cd50e56",
    },
    sub: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      from: "0x5A459AebF63c804e741c8DB65457e6a98e2B1ECd",
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
