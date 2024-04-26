const hre = require("hardhat");

async function main() {
 const nftMarketplace = await hre.ethers.deployContract("NFTMarketplace");

  await nftMarketplace.waitForDeployment();

  console.log(
    `Deployed contract address: ${nftMarketplace.target}`
  );
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
