import { etherscanBlockExplorers } from "wagmi";
import OpenSeaLogo from "public/icons/opensea-logo.svg";
import EtherscanLogo from "public/icons/etherscan-logo.svg";
import TwitterLogo from "public/icons/twitter-logo.svg";
import CHAIN_NAME from "utils/chainName";

export const navBarLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#mint",
    label: "Mint",
  },
  {
    href: "#species",
    label: "Species",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#team",
    label: "Team",
  },
];

export const externalLinks = [
  {
    url: "https://twitter.com/snakesproject",
    image: TwitterLogo,
    alt: "Twitter",
  },
  {
    url: "https://opensea.io/collection/snakesproject",
    image: OpenSeaLogo,
    alt: "OpenSea",
  },
  {
    url: `${etherscanBlockExplorers[CHAIN_NAME].url}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
    image: EtherscanLogo,
    alt: "Etherscan",
  },
];
