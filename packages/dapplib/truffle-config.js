require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain solid half clinic onion submit'; 
let testAccounts = [
"0x3fed7f4b2b14fcb06e39434216f015d89d0235f5ba4fab7801ede7b9e89ec61e",
"0xa1c99aea994da109a545b3c48951867c8daf769564fbae65a91882c1c603e425",
"0xe87483dc4f3de05a67db4529ccc4ebabe71ce208a8e7041eeadf58cf674dafa7",
"0x2488efc49f900db22d9742f8679c495110cf42afd32c8542877b5b84bb84676e",
"0xaaa2fc400024e4a971a14b4ec73316e327fac635e66cf4b49f845d76277eea1b",
"0x67a28bd8cd16971f37d64578b1df7f0dadc57ca2e470d9aab88c25fa8f82fb8d",
"0xbf26c28bd685b35caf44faf3d13e0923dbf6e0fefebf8473b5f8f324595bf1e9",
"0x7db8bb17be4a29afab09e463ec02ce14bdb9edc7fd666742c5dfc774ef0b3d88",
"0xbc597be917f1aabce0854e077c5f9841fc3bceaec1fca41dd6e6ea11f4f2f787",
"0xcd3bd6cefe7bd6020f8e7419831b14c6754c0e771cb528d0ef34c226f530a513"
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
            version: '^0.5.11'
        }
    }
};
