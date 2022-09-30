import type { ChainName } from "types";

const getChainName = (): ChainName => {
  switch (Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
    case 1:
      return "mainnet";
    case 42:
      return "kovan";
    default:
      return "kovan";
  }
};

const CHAIN_NAME = getChainName();

export default CHAIN_NAME;
