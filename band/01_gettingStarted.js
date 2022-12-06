/**
 * Step 1: create a new instance of grpcUrl as a parameter
 * and you can get <GRPC_WEB> endpoint from here.
 */
const { Client } = require('@bandprotocol/bandchain.js');

const grpcUrl = 'https://laozi-testnet6.bandchain.org/grpc-web' // ex.https://laozi-testnet6.bandchain.org/grpc-web
const client = new Client(grpcUrl);

/**
 * Checking For Step1
 */
async function getChainID() {
    console.log(await client.getChainId());
}
getChainID();

/**
 * Step 2: This can be done by import PrivateKey
 * from Wallet module and input a 24-words mnemonic string as a seed.
 */
const { Wallet } = require('@bandprotocol/bandchain.js');

const privKey = Wallet.PrivateKey.fromMnemonic('length raise warrior wood kidney love million dove require alter segment tag');

const pubkey = privKey.toPubkey();
const address = pubkey.toAddress().toAccBech32();
console.log( 'address : '+ address );

/**
 * Step 3: we can now construct a transaction by importing Transaction and MsgRequestData.
 */