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
    }
  }
};
