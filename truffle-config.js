const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    main: {
      host: "localhost",
      port: 8548,
      network_id: 1,
	  gas: 4700036,
	  gasPrice: "50000000000",
	  from: "0x6e83d1bba29a66fef2ed82dc46b486b46c70f29c"
    },

    dev: {
      host: "localhost",
      port: 8548,
      network_id: "*",
	  gas: 4700036,
	  gasPrice: "50000000000",
	  from: "0x6e83d1bba29a66fef2ed82dc46b486b46c70f29c"
    },
    // bsc-network-crendentials
    bsc_test: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc_main: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
 }
};
