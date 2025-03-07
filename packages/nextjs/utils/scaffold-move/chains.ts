import { Network, NetworkToChainId } from "@aptos-labs/ts-sdk";

export type Chain = {
  id: number;
  name: string;
  network: Network;
  fullnode?: string;
  indexer?: string;
  faucet?: string;
  block_explorer?: string;
  explorer_network_param?: string;
  native_token_symbol?: string;
};

type Chains = {
  [key: string]: Chain;
};

export const defaultChains: Chains = {
  mainnet: {
    id: NetworkToChainId[Network.MAINNET],
    name: "Aptos Mainnet",
    network: Network.MAINNET,
  },
  testnet: {
    id: NetworkToChainId[Network.TESTNET],
    name: "Aptos Testnet",
    network: Network.TESTNET,
    faucet: "https://aptos.dev/en/network/faucet",
  },
  local: {
    id: NetworkToChainId[Network.LOCAL],
    name: "Local",
    network: Network.LOCAL,
  },
};
