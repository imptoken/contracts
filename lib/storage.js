const Constant = require("../lib/constant.js");
const Converter = require("../lib/converter.js");

var storage = {
    setProdMode : function(opts){
        //todo: add staking account destribution
        this.commonTokenAmount = 11 * Constant.MILLION;
        this.teamTokenAmount = 1.5 * Constant.MILLION;
        this.devTokenAmount = 0.5 * Constant.MILLION;

        this.tokenTotalSupply = this.commonTokenAmount + this.teamTokenAmount + this.devTokenAmount;

        this.ownerAddress = '0x6e83d1bba29a66fef2ed82dc46b486b46c70f29c';

        // Адрес, куда будут переведены токены
        this.teamAccountAddress = '0xc7a9bd5cbbd888b83d40a1a75c8b07c9d7c4cc0f';
        this.devAccountAddress = '0xbb0f965a4514d05eeaa7df88c9dd2692f13275f8';

        this.tokenSymbol = 'IMP';
        this.tokenName = 'Ether Kingdoms Token';
        this.tokenDecimals = 7;

        this.tokenItemSymbol = 'IMPI';
        this.tokenItemName = 'Ether Kingdoms Item Token';
    },

    setDevMode : function(opts){
        this.commonTokenAmount = 10 * Constant.MILLION;
        this.teamTokenAmount = 1 * Constant.MILLION;
        this.stakingTokenAmount = 1 * Constant.MILLION;
        this.devTokenAmount = 7 * Constant.MILLION;

        this.tokenTotalSupply = this.commonTokenAmount + this.teamTokenAmount + this.devTokenAmount + this.stakingTokenAmount;

        this.ownerAddress = '0x64486C51F3716fbEfd0d89BA1ec024f9B5ffB0eD';

        // Адрес, куда будут переведены токены
        this.teamAccountAddress = '0xF0258bFd3dce99b2ba2EF6a6F332D5dCCb769A7f';
        this.stakingAccountAddress = '0x8D5677cEC148B63d93FfADe84124849109599Fc1';
        this.devAccountAddress = '0x64486C51F3716fbEfd0d89BA1ec024f9B5ffB0eD';

        this.tokenSymbol = 'IMP';
        this.tokenName = 'Ether Kingdoms Token';
        this.tokenDecimals = 7;

        this.tokenItemSymbol = 'IMPI';
        this.tokenItemName = 'Ether Kingdoms Item Token';
    }
};

module.exports = storage;