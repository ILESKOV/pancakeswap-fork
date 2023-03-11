import { ethers, run } from "hardhat";
import { LESKOtoken__factory } from "../typechain-types";

async function main() {
  const [owner] = await ethers.getSigners();
  const LESKOtoken = await new LESKOtoken__factory(owner).deploy();
  const LESKO = await LESKOtoken.deployed();

  console.log(`LESKOtoken deployed to ${LESKO.address}`);

  //Wait few block in order to verify successfully in one script
  await new Promise((f) => setTimeout(f, 60000));

  await run("verify:verify", {
    address: LESKO.address,
    contract: "contracts/LESKOtoken.sol:LESKOtoken",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
