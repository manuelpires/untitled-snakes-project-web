import { ReactNode } from "react";
import { createClient, WagmiConfig, chain, configureChains } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import CHAIN_NAME from "utils/chainName";

const supportedChains = [chain[CHAIN_NAME]];

const { chains, provider } = configureChains(supportedChains, [
  infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID }),
  publicProvider(),
]);

const client = createClient(
  getDefaultClient({
    appName: "Untitled Snakes Project",
    autoConnect: true,
    chains,
    provider,
  })
);

interface Props {
  children?: ReactNode;
}

const Web3Provider = ({ children }: Props) => (
  <WagmiConfig client={client}>
    <ConnectKitProvider mode="dark">{children}</ConnectKitProvider>
  </WagmiConfig>
);

export default Web3Provider;
