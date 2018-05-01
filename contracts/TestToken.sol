pragma solidity ^0.4.21;

import "./StandardToken.sol";

contract TestToken is StandardToken {

      string public name = "TESTToken";
      string public symbol = "TST";
      uint8 public decimals = 0;
      uint public INITIAL_SUPPLY = 100000;

    function TestToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = 100000;
    }
}
