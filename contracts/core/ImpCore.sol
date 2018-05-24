pragma solidity ^0.4.15;


import "../zeppelin/contracts/ownership/Ownable.sol";
import '../zeppelin/contracts/math/SafeMath.sol';
import '../zeppelin/contracts/ECRecovery.sol';

import '../token/ImpToken.sol';
import '../validation/ValidationUtil.sol';

/**
 * Контракт центральной логики
 */

contract ImpCore is Ownable, ValidationUtil {
    using SafeMath for uint;
    using ECRecovery for bytes32;

    /* Токен, с которым работаем */
    ImpToken public token;

    /* Мапа адрес получателя токенов - nonce, нужно для того, чтобы нельзя было повторно запросить withdraw */
    mapping (address => uint) private withdrawalsNonce;

    event Withdraw(address receiver, uint tokenAmount);
    event WithdrawCanceled(address receiver);

    function ImpCore(address _token) {
        requireNotEmptyAddress(_token);

        token = ImpToken(_token);
    }

    function withdraw(uint tokenAmount, bytes signedData) external {
        uint256 nonce = withdrawalsNonce[msg.sender] + 1;

        bytes32 validatingHash = keccak256(msg.sender, tokenAmount, nonce);

        // Подписывать все транзакции должен owner
        address addressRecovered = validatingHash.recover(signedData);

        require(addressRecovered == owner);

        // Делаем перевод получателю
        require(token.transfer(msg.sender, tokenAmount));

        withdrawalsNonce[msg.sender] = nonce;

        Withdraw(msg.sender, tokenAmount);
    }

    function cancelWithdraw() external {
        withdrawalsNonce[msg.sender]++;

        WithdrawCanceled(msg.sender);
    }


}
