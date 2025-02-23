//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BLXToken is IERC20 {
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    event Mint(address indexed to, uint256 amount);

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

    function transfer(address addressTo, uint256 amount) public returns (bool) {
        require(msg.sender != addressTo, "Sender cannot transfer to himself");
        require(_balances[msg.sender] >= amount, "Sender does not have enough funds");
        require(addressTo != address(0), "Zero address cannot be a recipient");
        require(amount > 0, "Amount cannot be 0");

        _balances[msg.sender] -= amount;
        _balances[addressTo] += amount;
        emit Transfer(msg.sender, addressTo, amount);
        return true;
    }
    
    function approve(address approvedAddress, uint256 amount) public returns (bool) {
        require(amount > 0, "Amount cannot be 0");
        require(msg.sender != approvedAddress, "Sender cannot set allowance for himself");
        require(approvedAddress != address(0), "Zero address cannot be set as approvedAddress");
        _allowances[msg.sender][approvedAddress] = amount;
        emit Approval(msg.sender, approvedAddress, amount);
        return true;
    }

    function allowance(address allowedFrom, address allowedTo) public view returns (uint256) {
        return _allowances[allowedFrom][allowedTo];
    }

    function transferFrom(address addressFrom, address addressTo, uint256 amount) public returns (bool) {
        require(amount > 0, "Amount cannot be 0");
        require(_balances[addressFrom] >=  amount, "Sender does not have enough funds");
        require(_allowances[addressFrom][addressTo] >=  amount, "Amount is greater than sender has allowed");

        _balances[addressFrom] -= amount;
        _balances[addressTo] += amount;
        _allowances[addressFrom][addressTo] -= amount;
        emit Transfer(addressFrom, addressTo, amount);
        return true;
    }

}
