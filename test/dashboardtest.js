const { expect } = require("chai");
const { ethers } = require("ethers");

describe("Analytics Dashboard contract", function () {
    let dashboard;

    beforeEach(async () => {
        const AnalyticsDashboard = await ethers.getContractFactory("AnalyticsDashboard");
        dashboard = await AnalyticsDashboard.deploy();
        await dashboard.deployed();
    });

    it("Should update spreadsheet data", async function () {
        const expectedValue1 = 1;
        const expectedValue2 = "Test";
        const expectedVar3 = "Test3";
        const expectedVar4 = "New Test";

        await dashboard.updateSpreadsheetData(expectedValue1, expectedValue2, expectedVar3, expectedVar4);

        // Assuming `userSpreadsheets` is a public state variable in your contract
        const userSpreadsheet = await dashboard.userSpreadsheets(await ethers.provider.getSigner(0).getAddress());

        expect(userSpreadsheet.val1).to.equal(expectedValue1);
        expect(userSpreadsheet.val2).to.equal(expectedValue2);
        expect(userSpreadsheet.var3).to.equal(expectedVar3);
        expect(userSpreadsheet.var4).to.equal(expectedVar4);
    });
});
