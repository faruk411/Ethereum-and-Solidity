const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require("web3");

const {interface,bytecode} = require("./compile");

const provider = new HDWalletProvider(
    'Kendi kurtarma kelimelerizi buraya yazın',
    'infura linkiniz'
);
const web3 = new Web3(provider);

const deploy = async()=>{

    const accounts = await web3.eth.getAccounts();

    console.log('hesaptan dağıtılıyor ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there'] })
        .send({ gas: '1000000' , from: accounts[0]});
    
    console.log('sözleşme şu adrese dağıtıldı => ',result.options.address);

    provider.engine.stop();



};
deploy();
