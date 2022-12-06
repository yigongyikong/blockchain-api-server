const IconService = require('icon-sdk-js').default;
const HttpProvider = IconService.HttpProvider;
const fetch = require('node-fetch');

const httpProvider = new HttpProvider('https://sejong.net.solidwallet.io/api/v3');
const iconService = new IconService(httpProvider);

console.log(iconService);
async function bal() {
    try {
        // const balance = await iconService.getBalance('hx151dfaefdda20397a1351978954f5aa93cd99c3a').execute();
        const balance = await fetchiconService.getTotalSupply().execute();
        console.log(balance);    
    } catch (error) {
        console.log(error);
    }
}

bal();

// const 

// iconService.getTotalSupply().execute()


// gb();

