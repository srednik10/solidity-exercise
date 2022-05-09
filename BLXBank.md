# Bloxify - Solidity exercise - BLX Bank

## Before start
### What you should learn
- Materials from [#1 TASK](./BLXToken.md)
- Solidity
  - [types](https://docs.soliditylang.org/en/v0.8.13/types.html)
    - [structs](https://docs.soliditylang.org/en/v0.8.13/types.html?highlight=structs#structs)
  - security
    - [re-entrancy](https://docs.soliditylang.org/en/v0.8.13/security-considerations.html?highlight=re-entrancy#re-entrancy)
- OpenZeppelin
  - [Using with Hardhat](https://docs.openzeppelin.com/learn/developing-smart-contracts#using-openzeppelin-contracts) 
  - [contracts](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts)
    - [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)
    - [Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/Pausable.sol)

## Instructions

### Objective

Create a Bank contract where users create their accounts and can store `BLX` token <br/>
The bank should store information about the number of user accounts and global BLX balance. <br/>
It should be possible to get public information about any user account - date of creation, balance, and number of transactions (deposits and withdrawals). <br/>
The bank should have the owner account that is able to pause and unpause deposits

### User stories
Please, read the following user stories to implement:
1. As a user I want to get a global bank balance of `BLX` token
2. As a user I want to get the address of the owner of the bank
3. As a user I want to be able to deposit any number of `BLX` tokens to my bank account
4. As a user I want to be able to withdraw any number of `BLX` tokens that is available in my account
5. As a user I want to be able to check that the global bank balance of `BLX` token changes after the deposit or withdrawal
6. As a user I want to get information about my account - date of creation, balance, number of transaction if account is active
7. As a user I want to be able to deactivate my account
8. As a user I want to be able to transfer funds from my bank account to another existing bank account
9. As a user I want to be unable to transfer funds from my bank account to an inactive bank account
10. As an owner I want to be able to pause and unpause deposits to the bank
11. As a user I want to be unable to deposit tokens when deposits are paused

### Data structures
Here is the data shape of the user account object you'll have to implement. This structure is only a base that you can modify and extend as you wish. Feel free to make your own implementation.

```solidity
struct BankAccount {
    uint256 createdAt;
    uint256 balance;
    uint256 transactionsCount;
    bool isActive;
}
```

### Additional rules
- User can only withdraw tokens from his bank account
- User can only transfer tokens from his bank account
- For Owner and Pausable features use Ownable and Pausable contracts from OpenZeppelin (more in materials above)

### Extra points
- Deploy BLX Bank contract to testnet network of your choice
- Verify contract on blockchain explorer
- Test all functions manually

## Notes
### General
- You can use additional libraries but you can be asked to justify your choices
- Take time to construct a readable contract
- Keep in mind that your smart contract should be usable by anyone (frontend, dapps...)
- Testing is very important for us, so your app should be tested
- At Bloxify we really focus on details. Verify your work before sending it to us

## How to submit finished task?
Please document your code or modify this file to describe your choices, practices, etc. <br/>
Share your code with [our Github account](https://github.com/bloxify-dev) using a **private** repository - [GitHub](https://github.com/). <br/>
Email us back with the link to your repository. We appreciate your feedback about the task.

---

**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Bloxify](https://www.bloxify.gg/)**
