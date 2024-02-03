const {ethers} = require("hardhat");

async function main() {
    const analyticsDashboard = await ethers.getContractFactory("AnalyticsDashboard");
    const newDashboard = await analyticsDashboard.deploy();
    const txHash = newDashboard.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("Contract deployed to address:", txReceipt.contractAddress); 
}

main()
.then(() => process.exit(0))
.catch((error) => {
    process.exit(1);
});