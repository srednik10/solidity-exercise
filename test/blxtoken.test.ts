import { ethers } from "hardhat";
import { expect, use } from "chai";
import { BigNumber } from "ethers";

describe("BLX Token contract", function () {

  let contract: any;

  beforeEach(async function () {
    const factory = await ethers.getContractFactory("BLXToken");
    contract = await factory.deploy("Bloxify Token", "BLX", 18);
  });

  it("meta informations test", async function () {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();

    expect(name).to.equal("Bloxify Token");
    expect(symbol).to.equal("BLX");
    expect(decimals).to.equal(18);
  });

  it("event should be emitted atfer minting", async function () {
    const [signer] = await ethers.getSigners();
    
    const amountToMint = BigNumber.from("1000000000000000000");
  
    await expect(contract.mint(amountToMint)).to.emit(contract, "Mint");

  });

  it("balance should change atfer minting", async function () {
    const [signer] = await ethers.getSigners();

    const amountToMint = BigNumber.from("1000000000000000000");
  
    await contract.mint(amountToMint);
    const balance = await contract.balanceOf(signer.getAddress());

    expect(balance).to.equal(amountToMint);

  });

  it("exception should be thrown if total supply overflow", async function () {
    const [signer] = await ethers.getSigners();
    
    const decimals = await contract.decimals();
    const amountToMint = BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639930");
  
    await contract.mint(amountToMint);
    await expect(contract.mint(amountToMint)).to.be.revertedWith("Total supply overflow");
  });

  it("exception should be thrown if mint amount is equal to 0", async function () {
    const [signer] = await ethers.getSigners();
    
    await expect(contract.mint(0)).to.be.revertedWith("Amount cannot be 0");
  });

});
