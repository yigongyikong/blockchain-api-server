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
    // console.log( JSON.stringify(await client.getAllBalances('band1f3akd0pj0ejeqq7pjtumav2u8dekwj5wxxra6m')) )
    console.log( JSON.stringify(await client.getAllBalances('band1kxpaq4ndcksdgvk5t4ed8jxz4ll83h83pf9xhd')) )
}

getLatestBlck();
/**

{
  blockId: {
    hash: 'CX+KiHUEt6fVjVbbe5gS09pITsv7yLvv+ZmsdC2Go7A=',
    partSetHeader: { total: 1, hash: '/8NLqw3+yt0igmlCwzRojyop4jh80OJt074Pu+IDXZw=' }
  },
  block: {
    header: {
      version: [Object],
      chainId: 'band-laozi-testnet6',
      height: 1968947,
      time: [Object],
      lastBlockId: [Object],
      lastCommitHash: 'SeLq6LTXGcxd8t8p9uC3L98bkM2LQFaIqJ789hG5g+I=',
      dataHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
      validatorsHash: 'I1BWX5Uhan/eP5hh4GcVRW2Y8g2qEOCx3tLeZuDctPM=',
      nextValidatorsHash: 'I1BWX5Uhan/eP5hh4GcVRW2Y8g2qEOCx3tLeZuDctPM=',
      consensusHash: 'sL3zQpDJv4zgZ1L9miS7JWH+7jNTpvz3+HT8gfAWc3w=',
      appHash: 'mCys7PBTkopcy7ORPTWDJtHK9pytGWlF0c5XZakWsSU=',
      lastResultsHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
      evidenceHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
      proposerAddress: 'RCvXhxo1LpUl4g+dJTf608vD/jA='
    },
    data: { txsList: [] },
    evidence: { evidenceList: [] },
    lastCommit: {
      height: 1968946,
      round: 0,
      blockId: [Object],
      signaturesList: [Array]
    }
  }
}

 */


/*
curl --location --request POST "https://laozi-testnet6.bandchain.org/faucet" \
--header 'Content-Type: application/json' \
--data-raw "{
 \"address\": \"band1kxpaq4ndcksdgvk5t4ed8jxz4ll83h83pf9xhd\"
}"
*/

/*
BAND-Wallet(MathWallet) ))
- pw : s***1***
- length raise warrior wood kidney love million dove require alter segment tag
- band1kxpaq4ndcksdgvk5t4ed8jxz4ll83h83pf9xhd
*/