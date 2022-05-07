import { ethers } from "hardhat";
import { expect } from "chai";

describe("BLX Token contract", function () {
  it("default test", async function () {
    // const [owner] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("BLXToken");
    const contract = await factory.deploy();

    const greeting = await contract.greeting();

    expect(greeting).to.equal("Hello you");
  });
});
