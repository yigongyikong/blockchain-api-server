const { Client } = require('@bandprotocol/bandchain.js');

const grpcUrl = 'https://laozi-testnet6.bandchain.org/grpc-web' // ex.https://laozi-testnet6.bandchain.org/grpc-web
const client = new Client(grpcUrl);
 
// console.log(client);

async function chainId () {
    const result = await client.getChainId();
    console.log(result);
}

chainId();