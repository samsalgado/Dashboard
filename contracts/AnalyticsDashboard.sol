pragma solidity ^0.8.0;

contract AnalyticsDashboard {
    struct SpreadsheetData {
        uint256 val1;
        string val2;
        string var3;
        string var4;
        //Add more variables as needed, dependent on data in the Spreadsheet.  
    }
    mapping(address => SpreadsheetData) public userSpreadsheets;
    function updateSpreadsheetData(uint256 _val1, string memory _val2, string memory _val3, string memory _val4) external {
        userSpreadsheets[msg.sender] = 
            SpreadsheetData(_val1, _val2, _val3, _val4);
    } 
}