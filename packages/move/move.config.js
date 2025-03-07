const defaultNetwork = "testnet";

const networks = {
  testnet: {
    "rest-url": "https://api.testnet.aptoslabs.com/v1",
  },
  mainnet: {
    "rest-url": "https://api.mainnet.aptoslabs.com/v1",
  },
};

// Set to false if external modules should not be loaded via script.
// If set to true, it will load modules from all addresses declared in move.toml.
const loadExternalModules = true;

module.exports = { defaultNetwork, networks, loadExternalModules };
