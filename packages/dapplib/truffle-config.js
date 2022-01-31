require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note nominee clutch include clog old senior'; 
let testAccounts = [
"0x13ffbc838df44870a7375d51724e193fdbef68b56c9ad0e50bcce0d0cdf2a1b8",
"0x499dd37f994e336f9f83f3a7436239e1ee6ddfb4fc504e5471c31ff283686624",
"0x4708407e765cf2c857fc3912dc90a37d6730dec0cf8f50a329095a8e7c8f75cb",
"0x49c0094dca9f1836653f989083e76e266ec7b76950821799e4a95aa5059d8bbb",
"0x4dc7c53c2aeccddd6412b4b538550a701f733b526ba8920aa913549052a07363",
"0x4f0e1f8a2024ef3b99f42ec8a8e1d9717ea0f7b02a9b6fb124eeca34785f814b",
"0x4383826e2e5a87fa6317f63e675ddc0014488657d573a7416c3ffd8da6b230b5",
"0x294f95fa02d376c378f94811fced01e078a862fdde6048cca66f00a71bb0b5d6",
"0x2815259ebbd1ab13e3e00d611a26e6f6fea960ce5374f32dcd4a3ebf9653bbc4",
"0x1ddfe1ce91568144eb208335c55dc773098bdf2ce4c93c68193fd1a03670b6c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

