import { formatEtherscanLink, EtherscanLinkType } from "./etherscan";
import OpenSeaLogo from "public/icons/opensea-logo.svg";
import EtherscanLogo from "public/icons/etherscan-logo.svg";
import TwitterLogo from "public/icons/twitter-logo.svg";

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
    url: formatEtherscanLink(EtherscanLinkType.Contract, [
      Number(process.env.NEXT_PUBLIC_CHAIN_ID),
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
    ]),
    image: EtherscanLogo,
    alt: "Etherscan",
  },
];
