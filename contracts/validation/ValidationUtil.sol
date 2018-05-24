pragma solidity ^0.4.15;

/**
 * Различные валидаторы
 */

contract ValidationUtil {
    function requireNotEmptyAddress(address value){
        require(isAddressNotEmpty(value));
    }

    function isAddressNotEmpty(address value) internal returns (bool result){
        return value != 0;
    }
}
