import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

let ownerWallet: string;

describe("LESKO token", function () {
  it("Should return owner of token", async function () {
    const [owner] = await ethers.getSigners();
    ownerWallet = await owner.getAddress();
    const contractFactory = await ethers.getContractFactory("LESKOtoken");
    const LESKO: any = await contractFactory.deploy();
    const ownerAddress = await LESKO.getOwner();
    expect(ownerAddress).to.equal(ownerWallet);
  });
});
