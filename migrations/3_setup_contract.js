const Storage = require("../lib/storage.js");
const Converter = require("../lib/converter.js");

const ImpToken = artifacts.require("./token/ImpToken.sol");
const ImpCore = artifacts.require("./core/ImpCore.sol");

module.exports = function (deployer, network, accounts) {

    const ownerAddress = Storage.ownerAddress;

    let impTokenInstance = null;

    let impCoreInstance = null;

    ImpToken.deployed().then((instance) => {
        impTokenInstance = instance;

        return ImpCore.deployed().then((instance) => {
            impCoreInstance = instance;

            return impTokenInstance.distribute(impCoreInstance.address, Converter.getTokenValue(Storage.commonTokenAmount, Storage.tokenDecimals), {from: ownerAddress});
        });

    }).then((result) => {
        return impTokenInstance.distribute(Storage.teamAccountAddress, Converter.getTokenValue(Storage.teamTokenAmount, Storage.tokenDecimals), {from: ownerAddress});
    }).then((result) => {
        return impTokenInstance.distribute(Storage.devAccountAddress, Converter.getTokenValue(Storage.devTokenAmount, Storage.tokenDecimals), {from: ownerAddress});
    }).then((result) => {
        return impTokenInstance.closeDistribution({from: ownerAddress});
    });

};