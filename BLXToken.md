# Bloxify - Solidity exercise - BLX Token

## Before start
### What you should learn
- [Ethereum introduction](https://ethereum.org/en/developers/docs/intro-to-ethereum/)
- [Solidity Smart Contracts](https://docs.soliditylang.org/en/v0.8.13/introduction-to-smart-contracts.html) basics
  - [structure of contract](https://docs.soliditylang.org/en/v0.8.13/structure-of-a-contract.html)
    - [modifiers](https://docs.soliditylang.org/en/v0.8.13/structure-of-a-contract.html?highlight=events#function-modifiers)
    - [events](https://docs.soliditylang.org/en/v0.8.13/structure-of-a-contract.html?highlight=events#events)
  - [types](https://docs.soliditylang.org/en/v0.8.13/types.html) ([mappings](https://docs.soliditylang.org/en/v0.8.13/types.html#mapping-types) especially)
  - [error handling](https://docs.soliditylang.org/en/v0.8.13/control-structures.html?highlight=require#error-handling-assert-require-revert-and-exceptions)
- [What is a Token?](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [ERC20](https://eips.ethereum.org/EIPS/eip-20) token standard
- [OpenZeppelin implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) of ERC20
- [Using Hardhat](https://hardhat.org/guides/compile-contracts.html) with contracts
- [Using Hardhat](https://hardhat.org/guides/waffle-testing.html) for tests

## Notes
### General
- ⚠️ **If you where asked to solve #2 and/or #3 tasks, you are free to use exisiting implementation of ERC20.** <br/>
  ⚠️ **otherwise: Do not inherit any of the existing implementation of the token, create your own**
- Take time to construct a readable contract
- Keep in mind that your smart contract should be usable by anyone (frontend, dapps...)
- Testing is very important for us, so your app should be tested
- At Bloxify we really focus on details. Verify your work before sending it to us

## Instructions

### Objective

Create ERC20 token contract with `BLX` symbol, `Bloxify Token` name, and `18` decimals.
Make sure to cover all User Stories below and test them.

### User stories
Please, read the following user stories to implement:
1. As a user I want to get meta-information about the token - name, symbol, total supply, and decimals
    - methods: `name()`, `symbol()`, `totalSupply()`, `decimals()`
2. As a user I want to get information about the balance of a given address
    - method: `balanceOf(address)`
3. As a user I want to be able to mint any number of tokens for myself
    - method: `mint(uint256)`
4. As a user I want to be able to transfer any number of currently owned tokens to any address
    - method: `transfer(address, uint256)`
5. As a user I want to be able to approve any other address to use the given number of my tokens
    - method: `approve(address, uint256)`
6. As a user I want to get information about the allowed number of tokens of one address that can be used by another address
    - method: `allowance(address, address)`
7. As a user that is approved to use other's tokens, I want to be able to transfer the allowed number
   of tokens from the owner to any other address
    - method: `transferFrom(address, address, uint256)`

### Additional rules
- User can not mint tokens for others
- User can not transfer other's tokens without allowance
- Any change of the contract state (balances, allowances, supply) should be fallowed by emited Events
  - eg. `Transfer(address, uint256)`, `Mint(address, uint256)`, `Approve(address, address, uint256)`
- Meta-information should be set in the constructor.
- Token contract should implement IERC20 interface

### Extra points
- Deploy BLX Token contract to testnet network of your choice

## How to submit finished task?
Please document your code or modify this file to describe your choices, practices, etc. <br/>
Share your code with [our Github account](https://github.com/bloxify-dev) using a **private** repository - [GitHub](https://github.com/). <br/>
Email us back with the link to your repository. We appreciate your feedback about the task.

---

**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Bloxify](https://www.bloxify.gg/)**
