pragma solidity ^0.4.15;


import '../zeppelin/contracts/token/StandardToken.sol';
import "../zeppelin/contracts/ownership/Ownable.sol";
import '../zeppelin/contracts/math/SafeMath.sol';

/**
 * Контракт ERC-20 токена
 */

contract ImpToken is StandardToken, Ownable {
    using SafeMath for uint;

    string public name;
    string public symbol;
    uint public decimals;
    bool public isDistributed;
    uint public distributedAmount;

    event UpdatedTokenInformation(string name, string symbol);

    /**
     * Конструктор
     *
     * @param _name - имя токена
     * @param _symbol - символ токена
     * @param _totalSupply - со сколькими токенами мы стартуем
     * @param _decimals - кол-во знаков после запятой
     */
    function ImpToken(string _name, string _symbol, uint _totalSupply, uint _decimals) {
        require(_totalSupply != 0);

        name = _name;
        symbol = _symbol;
        decimals = _decimals;

        totalSupply = _totalSupply;
    }

    /**
     * Владелец должен вызвать эту функцию, чтобы сделать начальное распределение токенов
     */
    function distribute(address toAddress, uint tokenAmount) external onlyOwner {
        require(!isDistributed);

        balances[toAddress] = tokenAmount;

        distributedAmount = distributedAmount.add(tokenAmount);

        require(distributedAmount <= totalSupply);
    }

    function closeDistribution() external onlyOwner {
        require(!isDistributed);

        isDistributed = true;
    }

    /**
     * Владелец может обновить инфу по токену
     */
    function setTokenInformation(string newName, string newSymbol) external onlyOwner {
        name = newName;
        symbol = newSymbol;

        // Вызываем событие
        UpdatedTokenInformation(name, symbol);
    }

    /**
     * Владелец может поменять decimals
     */
    function setDecimals(uint newDecimals) external onlyOwner {
        decimals = newDecimals;
    }
}
