# Bloxify - Solidity exercise

## Introduction
The goal of this exercise is to start your journey with Blockchain, Ethereum, and Smart Contracts world. <br />
It's better if you get familiar with some definitions and topics first:
- [How does Bitcoin work?](https://learnmeabitcoin.com/) - first steps in the blockchain world on the example of Bitcoin
- [Ethereum introduction](https://ethereum.org/en/developers/docs/intro-to-ethereum/)
- [Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/)

## Objective
This exercise aims to:
1. Dive into Smart Contracts
2. Test your engineering skills
3. Test your thinking process when you're creating something from scratch

## Before start
Keep in mind that:
- You only have to be focused on the smart contract, not on the UI
- You do not necessarily have to find the perfect gasless solution, we are interested in the way you'll conceive the program
- You do not have to write code out of the `/contracts` and `/test` folders, nevertheless you can if you think it's necessary
- Keep in mind your code quality might be evaluated
- Keep in mind your git history might be evaluated

## Environment

### Engines versions
- [Node](https://nodejs.org/en/): **16.X.X** (`node -v`)
- [npm](https://www.npmjs.com/): **8.X.X** (`npm -v`)

### Installation
```sh
npm install # or yarn
```

### Scripts
You will need to use [npm](https://www.npmjs.com/) scripts to run, test and build this application.

#### Environment
This exercise **must be done in [Solidity](https://docs.soliditylang.org/)**. The development environment to compile, deploy, test and run the code provided by [hardhat](https://hardhat.org/) is already configured.

#### Tools and libraries
The tools and libraries listed below are already set-up for you. However, feel free to modify the configuration or even the stack to fit your needs.
- [Hardhat](https://hardhat.org/getting-started/): development environment to compile, deploy, test, and debug your Ethereum software
- [Ethers.js](https://docs.ethers.io/v5/): a JavaScript library to interact with Ethereum
- [Waffle](https://getwaffle.io/): a library for testing smart contracts.
- [Chai](https://chaijs.com): a BDD/TDD assertion library
- [Solhint](https://protofire.github.io/solhint/): a Solidity linter
- [Typescript](https://www.typescriptlang.org/): a strongly typed programming language that builds on JavaScript
- [Typechain](https://github.com/dethcrypto/TypeChain): a TypeScript blinders for Ethereum smart contracts

## Tasks

<!--⚠️ There will be 3 tasks that should be solved one by one.<br />-->
⚠️ All user stories have to be implemented in Solidity.

You will have to implement them in the `/contracts` folder.<br />
All tests should be placed in the `/test` folder in proper files.

The definition of done for a user story is:
- [x] Feature work as expected
- [x] Tests have been written
- [x] Quality controls are passed

### #1 - BLX Token [easy]

Create ERC20 token contract with `BLX` symbol, `Bloxify Token` name, and `18` decimals. <br />
Token should be transferable and mintable. <br />

Check the instructions [HERE](./BLXToken.md)

### #2 - BLX Bank [easy+]

Create a Bank contract where users create their accounts and can store `BLX` token <br/>
The bank should store information about the number of user accounts and global BLX balance. <br/>
It should be possible to get public information about any user account - date of creation, balance, and number of transactions (deposits and withdrawals). <br/>
The bank should have the owner account that is able to pause and unpause deposits

Check the instructions [HERE](./BLXBank.md)

### #3 - BLX Locker [moderate]

---


**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Bloxify](https://www.bloxigy.gg/)**
