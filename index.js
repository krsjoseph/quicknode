const ethers = require("ethers");
const defaultAddress = "OxB07626Bc2fF18d680ec886c3109e9BF6ee05E6b7";
const defaultNetwork = "mainnet";

const myArgs = process.argv.slice(2);

const address = myArgs[0] || defaultAddress;
const network = myArgs[1] || defaultNetwork;

const endPoint = `http://sample-endpoint-name.${network}.quiknode.pro/${process.env.token}/`;

(async () => {
  const provider = new ethers.providers.JsonRpcProvider(endPoint);
  const balance = await provider.getBalance(address, "latest");
  console.log(balance);
})();

// Run Script with
// node index.js '0x5eC8669dAB399eE5F41786FCce4127D8301BEf19' 'ropsten'
