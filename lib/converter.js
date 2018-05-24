const BigNumber = require('bignumber.js');

var converter = {
    getTokenValue : function(count, decimals){
        var value = new BigNumber(count);

        var multiplier = Math.pow(10, decimals);

        return value.times(multiplier).toString(10);
    }
};

module.exports = converter;