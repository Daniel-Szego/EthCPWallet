
loadScript("CommandPrommptWallet.js");

createNewAccount("testwallet", "testpsw");
createNewAccount("testwallet", "testpsw");
createNewAccount("testwallet", "testpsw");

var walletAccounts = listMyAccounts("testwallet");

var tx = eth.sendTransaction({from:"0x627306090abab3a6e1400e9345bc60c78a8bef57", to: "0x1fcd57af5e187303bbcaa6a3ad2fe0b76248c0ad", value: 20000000})
var tx = eth.sendTransaction({from:"0x627306090abab3a6e1400e9345bc60c78a8bef57", to: "0x1fcd57af5e187303bbcaa6a3ad2fe0b76248c0ad", value: 50000000})
var retVal = TestTokenContract.transfer.sendTransaction("0x1fcd57af5e187303bbcaa6a3ad2fe0b76248c0ad",2000, {
    from:"0x627306090abab3a6e1400e9345bc60c78a8bef57",
    gas:4000000});

getEtherBalances("testwallet");
getTokenBalances("testwallet");



