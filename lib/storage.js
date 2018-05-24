const Constant = require("../lib/constant.js");
const Converter = require("../lib/converter.js");

var storage = {
    setProdMode : function(opts){
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
    },

    setDevMode : function(opts){
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
    }
};

module.exports = storage;