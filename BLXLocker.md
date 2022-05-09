# Bloxify - Solidity exercise - BLX Bank

## Before start
### What you should learn
- Materials from [#2 TASK](./BLXBank.md)
- OpenZeppelin
  - [upgradeability](https://docs.openzeppelin.com/contracts/4.x/upgradeable)
  - [Vesting](https://corporatefinanceinstitute.com/resources/knowledge/other/vesting/)
  - [contracts](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts)
    - [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)
    - [Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/Pausable.sol)

## Instructions

### Objective

Extend/upgrade a Bank contract and allow users to lock funds for other users.<br/>
Locked funds should be possible to unlock at a specific date or linearly over the given time (vesting).<br/>
Use the upgradeability concept from OpenZeppelin.

### User stories
Please, read the following user stories to implement:
1. As a user I want to create the lock from my bank account balance for the given address
   - I want to provide start time of the lock, end time of the lock, locked amount
2. As a user I want to get all locks that were created for me
3. As a user I want to get the amount of tokens that are unlocked in the given lock
4. As a user I want to claim the amount of tokens that is available in the given lock
5. As a user I want to get the amount of tokens that I already claimed in the given lock
6. As a user I want to get the total balance of all locked tokens from all locks that were created for me

### Data structures
Here is the data shape of the user account object you'll have to implement. These structures are only a base that you can modify and extend as you wish. Feel free to make your own implementation.

```solidity
struct BankAccount {
    uint256 createdAt;
    uint256 balance;
    uint256 transactionsCount;
    uint256 lockedBalance;
    bool isActive;
}
  
struct Lock {
  uint256 startTime;
  uint256 endTime;
  uint256 value;
  uint256 claimed;
}
```

### Additional rules
- User can only create a lock with value no exceeding his bank account balance
- User can only claim tokens from the locks created for him
- User upgradeability concept from OpenZeppelin (materials above)

### Extra points
- Deploy BLX Locker contract to testnet network of your choice
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
