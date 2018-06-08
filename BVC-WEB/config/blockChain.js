// 블록체인 설정

var Web3 = require('web3');
var solc = require('solc');
var fs = require('fs');
var web3 = new Web3();
// web3의 위치를 지정하는 함수입니다. web3의 위치는 http://yangarch.iptime.org:8545에 있습니다.
web3.setProvider(new web3.providers.HttpProvider('http://bug.lasel.kr:4211'));

var code = fs.readFileSync('BVC.sol').toString();
var compiledCode = solc.compile(code);

// sol파일의 abi 값입니다.
var abiDefinition = JSON.parse(compiledCode.contracts[':BVC'].interface);

// eth를 지불할 eth지갑을 선택합니다.
web3.eth.defaultAccount = web3.eth.accounts[0];

// sol파일의 컨트랙트 주소입니다.
var contractAddress = '0x4e3e447bb83eaf65ab6d78fe5dd7e17c6bbe4152';

// 컨트랙트를 연결합니다.
var contract = web3.eth.contract(abiDefinition);
var BVC = contract.at(contractAddress);

module.exports = BVC;