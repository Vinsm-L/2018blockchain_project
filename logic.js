var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = JSON.parse('[{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "uploaded","outputs": [{"name": "blockchainAddr","type": "address"},{"name": "itemID","type": "uint256"},{"name": "warrantyCardID","type": "uint256"},{"name": "tel","type": "uint256"},{"name": "customerAddr","type": "string"},{"name": "date","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "searchRequestStatus","outputs": [{"name": "status","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "index","type": "uint256"}],"name": "searchItemInfo","outputs": [{"name": "_itemID","type": "uint256"},{"name": "_warrantyCardID","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "completeRequest","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "merchant","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_itemID","type": "uint256"},{"name": "_warrantyCardID","type": "uint256"},{"name": "_tel","type": "uint256"},{"name": "_customerAddr","type": "string"},{"name": "_date","type": "string"}],"name": "applyForRepair","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "completed","outputs": [{"name": "blockchainAddr","type": "address"},{"name": "itemID","type": "uint256"},{"name": "warrantyCardID","type": "uint256"},{"name": "tel","type": "uint256"},{"name": "customerAddr","type": "string"},{"name": "date","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_itemID","type": "uint256"},{"name": "_warrantyCardID","type": "uint256"}],"name": "uploadItemInfo","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "acceptRequest","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "accepted","outputs": [{"name": "blockchainAddr","type": "address"},{"name": "itemID","type": "uint256"},{"name": "warrantyCardID","type": "uint256"},{"name": "tel","type": "uint256"},{"name": "customerAddr","type": "string"},{"name": "date","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]');

var MyContract = web3.eth.contract(abi);

var contractInstance = MyContract.at('0xc5be8e6177fd8f220d7cb1a12ca824106a463826');

function uploadItemInfo() {
  var itemID = document.getElementById("_itemID").value;
  var warrantyCardID = document.getElementById("_warrantyCardID").value;
  var transactionObject = {from: web3.eth.accounts[1],value: web3.toWei(15, "ether"),gas: 3000000};
  contractInstance.uploadItemInfo(itemID, warrantyCardID, transactionObject);
}

function searchItemInfo() {
  var index = document.getElementById("index").value;
  var transactionObject = {from: web3.eth.accounts[1],value: web3.toWei(15, "ether"),gas: 3000000};
  var res = contractInstance.searchItemInfo(index, transactionObject);
  document.getElementById("returnItemInfo").innerHTML = 'itemID:' + res[0] + ';' + 'warrantyCardID:' + res[1];
}

function applyForRepair() {
  var itemID = document.getElementById("itemID").value;
  var warrantyCardID = document.getElementById("warrantyCardID").value;
  var tel = document.getElementById("tel").value;
  var customerAddr = document.getElementById("customerAddr").value;
  var date = document.getElementById("date").value;
  var transactionObject = {from: web3.eth.accounts[1],value: web3.toWei(15, "ether"),gas: 3000000};
  contractInstance.applyForRepair(itemID, warrantyCardID, tel, customerAddr, date, transactionObject);
}

function searchRequestStatus() {
  var transactionObject = {from: web3.eth.accounts[1],value: web3.toWei(15, "ether"),gas: 3000000};
  var res = contractInstance.searchRequestStatus(transactionObject);
  document.getElementById("returnRequestStatus").innerHTML = res;
}

function acceptRequest() {
  var transactionObject = {from: web3.eth.accounts[0],value: web3.toWei(15, "ether"),gas: 3000000};
  contractInstance.acceptRequest(transactionObject);
}

function completeRequest() {
  var transactionObject = {from: web3.eth.accounts[0],value: web3.toWei(15, "ether"),gas: 3000000};
  contractInstance.completeRequest(transactionObject);
}