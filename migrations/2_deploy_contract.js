const Storage = require("../lib/storage.js");
const Converter = require("../lib/converter.js");

// Подключение смарт контрактов
const ImpToken = artifacts.require("./token/ImpToken.sol");
const ImplItem = artifacts.require("./token/ImpItem.sol");
const ImpCore = artifacts.require("./core/ImpCore.sol");

const ECRecovery = artifacts.require("./zeppelin/contracts/ECRecovery.sol");

module.exports = function (deployer, network, accounts) {

    Storage.setDevMode();

    deployer.deploy(ECRecovery);

    // Указываем, где она линкуется
    deployer.link(ECRecovery, [ImpCore]);

    // Деплоим контракт токена
    return deployer.deploy(ImpToken, Storage.tokenName, Storage.tokenSymbol, Converter.getTokenValue(Storage.tokenTotalSupply, Storage.tokenDecimals), Storage.tokenDecimals).then(() => {
        return deployer.deploy(ImplItem, Storage.tokenItemSymbol, Storage.tokenItemName).then(() => {
            // Деплоим контракт центральной логики
            return deployer.deploy(ImpCore, ImpToken.address);
        });
    });


};