import { ethers } from "hardhat";
import { expect } from "chai";

describe("BLX Token contract", function () {
  it("meta informations test", async function () {
    // const [owner] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("BLXToken");
    const contract = await factory.deploy("Bloxify Token", "BLX", 18);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();

    expect(name).to.equal("Bloxify Token");
    expect(symbol).to.equal("BLX");
    expect(decimals).to.equal(18);

  });

});
