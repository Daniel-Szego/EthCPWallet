
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545/"));

    var TestTokenABI = [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "INITIAL_SUPPLY",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseApproval",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseApproval",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      ];
    
    var TestTokenAddress = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";
    var TestTokenContract = web3.eth.contract(TestTokenABI).at(TestTokenAddress);

    $("#btnCreateWallet").click(function(){
        createAccount();
     });

     $("#btnGetAccountBalances").click(function(){
        getEtherBalances();
     });

     $("#btnGetTokenBalances").click(function(){
        getTokenBalances();
     });

     var WalletList = [];

    function createAccount(){
        var walletName = $('#walletname').val();
        var walletPassword = $('#walletpassword').val();
        
        web3.personal.newAccount(walletPassword, function (error, result) {
            $( "#outputCreateWallet" ).append("<div>" + result + "</div>");
            WalletList[result] = walletName;
            alert("creating account succeded" + result);
          });
    }

    function listMyAccounts (walletName) {
        var walletAccounts = [];
        for (var account in WalletList){
            if (WalletList[account] == walletName){
                walletAccounts.push(account);
            }
        }    
        return walletAccounts;
    }

    function getEtherBalances(){
        var walletName = $('#walletname2').val();
        
        var walletAccounts = listMyAccounts(walletName);
        var walletBalances = [];
        for (var i = 0; i < walletAccounts.length; i++){
            var account = walletAccounts[i];
            var balance = web3.eth.getBalance(account);        
            console.log("account balance ", account, " - ", balance);
            $( "#outputAccounts" ).append("<div>" + account + " - " + balance + "</div>");
            walletBalances[account] = balance;
        }
        return walletBalances;
    }

    function getTokenBalances () {
        var walletName = $('#walletname3').val();
        
        var walletAccounts = listMyAccounts(walletName);
        var walletBalances = [];
        for (var i = 0; i < walletAccounts.length; i++){
            var account = walletAccounts[i];
            var balance = TestTokenContract.balanceOf(account, function(error, result){
                walletBalances[account] = result;
                $("#outputAccountsToken").append("<div>" + account + " - " + result + "</div>");                
            });       
        }
        return walletBalances;
    }