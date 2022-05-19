//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// TODO: Implement IERC20.sol interface and make the token mintable
contract BLXToken {
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;

    mapping(address => uint256) private _balances;

    event Mint(address indexed to , uint256 amount);
    event Transfer(address indexed to , uint256 amount);

    constructor(string memory name_, string memory symbol_, uint8 decimals_) {
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_;
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    function mint(uint256 amount) public {
        require(2**256 - 1 - _totalSupply >= amount, "Total supply overflow");
        require(amount > 0, "Amount cannot be 0");
        
        _totalSupply += amount;
        _balances[msg.sender] += amount;
        emit Mint(msg.sender, amount);
    }

    function transfer(address addressTo, uint256 amount) public {
        require(_balances[msg.sender] >= amount, "Sender does not have enough funds");
        require(addressTo != address(0), "Zero address cannot be recipient");
        require(amount > 0, "Amount cannot be 0");

        _balances[msg.sender] -= amount;
        _balances[addressTo] += amount;
        emit Transfer(addressTo, amount);
    }


}
