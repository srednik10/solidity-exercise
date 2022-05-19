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
    const decimals = await contract.decimals();
    const amountToMint = BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639930");
  
    await contract.mint(amountToMint);
    await expect(contract.mint(amountToMint)).to.be.revertedWith("Total supply overflow");
  });

  it("exception should be thrown if mint amount is equal to 0", async function () {
    await expect(contract.mint(0)).to.be.revertedWith("Amount cannot be 0");
  });

  it("balances should change after transfer", async function () {
    const [signer, recipientAddress] = await ethers.getSigners();

    const amountToMint = BigNumber.from("1000000000000000000");
    const amountToTransfer = BigNumber.from("500000000000000000");
    await contract.mint(amountToMint);
    await contract.transfer(recipientAddress.getAddress(), amountToTransfer);

    const balnceOfRecipient = await contract.balanceOf(recipientAddress.getAddress());
    const balnceOfSigner = await contract.balanceOf(signer.getAddress());

    expect(balnceOfRecipient).to.equal(amountToTransfer);
    expect(balnceOfSigner).to.equal(amountToMint.sub(amountToTransfer));
  });

  it("exception should be thrown if sender does not have enough funds to transfer", async function () {
    const [signer, recipientAddress] = await ethers.getSigners();

    const amountToMint = BigNumber.from("100000000000000000");
    const amountToTransfer = BigNumber.from("500000000000000000");
    await contract.mint(amountToMint);

    await expect(contract.transfer(recipientAddress.getAddress(), amountToTransfer)).to.be.revertedWith("Sender does not have enough funds");
  });

  it("exception should be thrown if sender does not have enough funds to transfer", async function () {
    const [signer, recipientAddress] = await ethers.getSigners();

    const amountToMint = BigNumber.from("100000000000000000");
    const amountToTransfer = BigNumber.from("500000000000000000");
    await contract.mint(amountToMint);

    await expect(contract.transfer(recipientAddress.getAddress(), amountToTransfer)).to.be.revertedWith("Sender does not have enough funds");
  });

  it("exception should be thrown if transfer amount is equal to 0", async function () {
    const [signer, recipientAddress] = await ethers.getSigners();

    await expect(contract.transfer(recipientAddress.getAddress(), 0)).to.be.revertedWith("Amount cannot be 0");
  });

  it("exception should be thrown if recipient is zero address", async function () {
    const amountToMint = BigNumber.from("100000000000000000");

    await contract.mint(amountToMint);

    await expect(contract.transfer("0x0000000000000000000000000000000000000000", 1000)).to.be.revertedWith("Zero address cannot be a recipient");
  });

  it("event should be emitted atfer transfer", async function () {
    const [signer, recipientAddress] = await ethers.getSigners();
    
    const amountToMint = BigNumber.from("1000000000000000000");
    await contract.mint(amountToMint);
  
    await expect(contract.transfer(recipientAddress.getAddress(), amountToMint)).to.emit(contract, "Transfer");

  });

  it("transfer should throw exception if sender tranfers to himself", async function () {
  const [recipientAddress] = await ethers.getSigners();

  const amountToMint = BigNumber.from("1000000000000000000");
  await contract.mint(amountToMint);

  await expect(contract.transfer(recipientAddress.getAddress(), amountToMint)).to.be.revertedWith("Sender cannot transfer to himself");

  });

  it("approve should throw exception if amount is not positive", async function () {
    const [signer, approvedAddress] = await ethers.getSigners();
  
    await expect(contract.approve(approvedAddress.getAddress(), 0)).to.be.revertedWith("Amount cannot be 0");
  });

  it("allowace should throw exception if sender sets allowance for himself", async function () {
    const [signer] = await ethers.getSigners();
  
    await expect(contract.approve(signer.getAddress(), 1000)).to.be.revertedWith("Sender cannot set allowance for himself");
  });

  it("event should be emitted atfer approval", async function () {
    const [signer, approvedAddress] = await ethers.getSigners();
  
    await expect(contract.approve(approvedAddress.getAddress(), 1000)).to.emit(contract, "Approval");
  });

  it("approve should change allowances mapping", async function () {
    const [signer, approvedAddress] = await ethers.getSigners();
    await contract.approve(approvedAddress.getAddress(), 1000);

    const allowance = await contract.allowance(signer.getAddress(), approvedAddress.getAddress());

    expect(allowance).to.equal(1000);
    
  });

  it("transferFrom should change balances if succeded", async function () {
    const [addressFrom, addressTo] = await ethers.getSigners();

    await contract.mint(1000);
    await contract.approve(addressTo.getAddress(), 1000);
    await contract.transferFrom(addressFrom.getAddress(), addressTo.getAddress(), 1000);

    const addressFromBalance = await contract.balanceOf(addressFrom.getAddress());
    const addressToBalance = await contract.balanceOf(addressTo.getAddress());

    expect(addressFromBalance).to.equal(0);
    expect(addressToBalance).to.equal(1000);

  });

  it("transferFrom should throw exception if amount is not positive", async function () {
    const [addressFrom, addressTo] = await ethers.getSigners();

    await expect(contract.transferFrom(addressFrom.getAddress(), addressTo.getAddress(), 0)).to.be.revertedWith("Amount cannot be 0");
  });

  it("transferFrom should throw exception if sender does not have enough funds", async function () {
    const [addressFrom, addressTo] = await ethers.getSigners();

    await contract.mint(1000);
    await contract.approve(addressTo.getAddress(), 2000);

    await expect(contract.transferFrom(addressFrom.getAddress(), addressFrom.getAddress(), 1500)).to.be.revertedWith("Sender does not have enough funds");
  });

  it("transferFrom should throw exception if sender has not allowed enough funds", async function () {
    const [addressFrom, addressTo] = await ethers.getSigners();

    await contract.mint(1000);
    await contract.approve(addressTo.getAddress(), 500);

    await expect(contract.transferFrom(addressFrom.getAddress(), addressFrom.getAddress(), 1000)).to.be.revertedWith("Amount is greater than sender has allowed");
  });



});
