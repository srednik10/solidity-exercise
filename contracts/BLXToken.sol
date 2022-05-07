//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

// TODO: Implement IERC20.sol interface and make the token mintable
contract BLXToken {
    string public greeting;

    constructor() {
        greeting = "Hello you";
    }
}
