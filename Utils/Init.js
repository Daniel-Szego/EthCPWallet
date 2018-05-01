
loadScript("CommandPrommptWallet.js");

createNewAccount("testwallet", "testpsw");
createNewAccount("testwallet", "testpsw");
createNewAccount("testwallet", "testpsw");

var walletAccounts = listMyAccounts("testwallet");

var tx = eth.sendTransaction({from:"0x627306090abab3a6e1400e9345bc60c78a8bef57", to: walletAccounts[0], value: 200000})
var tx = eth.sendTransaction({from:"0x627306090abab3a6e1400e9345bc60c78a8bef57", to: walletAccounts[1], value: 500000})
var retVal = TestTokenContract.transfer.sendTransaction(walletAccounts[0],2000, {
    from:"0x627306090abab3a6e1400e9345bc60c78a8bef57",
    gas:4000000});

getEtherBalances("testwallet");
getTokenBalances("testwallet");


