const { Client } = require('@bandprotocol/bandchain.js');

const grpcUrl = 'https://laozi-testnet6.bandchain.org/grpc-web' // ex.https://laozi-testnet6.bandchain.org/grpc-web
const client = new Client(grpcUrl);

async function getChainID() {
    console.log(await client.getChainId());
}

async function getLatestBlck() {
    console.log(await client.getLatestBlock());
}

async function getBalance() {
    // console.log( JSON.stringify(await client.getAllBalances('band14ffvsq6z4sl3cez66thaxqavlhm38kntqfpquf')) )

    console.log( JSON.stringify(await client.getAllBalances('band1f3akd0pj0ejeqq7pjtumav2u8dekwj5wxxra6m')) )
}

getBalance();