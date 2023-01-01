const Web3 = require('web3');

// console.log(Web3); // { version, utils, modules, givenProvider, providers }
// console.log(Web3.version); // 1.8.1

const web3 = new Web3( new Web3.providers.HttpProvider("https://goerli.infura.io/v3/634ca95ff92d4828b0040cc7c970698d") );
// console.log(web3); // { currentProvider, givenProvider, providers, setProvider, setRequestManager, BatchRequest, extend, version, eth, shh, bzz }
// console.log(web3.currentProvider); // { ..., host:[... goerli.infura ...], httpsAgent, ... }
web3.eth.getBlockNumber().then(console.log);



/*
## JSON-RPC over HTTPS POST
## Replace YOUR-API-KEY with the API key from your Infura Dashboard
## You can also replace mainnet with a different supported network
curl https://mainnet.infura.io/v3/YOUR-API-KEY \
curl https://goerli.infura.io/v3/634ca95ff92d4828b0040cc7c970698d \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'

## JSON-RPC over WSS
## Replace YOUR-API-KEY with the API key from your Infura Dashboard
## You can also replace mainnet with a different supported network
wscat -c wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID
>{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
 */