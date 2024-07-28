const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require("web3");

const {interface,bytecode} = require("./compile");

const provider = new HDWalletProvider(
    'smart electric local whisper cactus future keen cart worth beauty guilt unfold',
    'https://sepolia.infura.io/v3/ac8c4d5f05d84e599feef025a34be490'
);
const web3 = new Web3(provider);

const deploy = async()=>{

    const accounts = await web3.eth.getAccounts();

    console.log('hesaptan dağıtılıyor ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000' , from: accounts[0]});
    
    console.log('sözleşme şu adrese dağıtıldı => ',result.options.address);

    provider.engine.stop();



};
deploy();
