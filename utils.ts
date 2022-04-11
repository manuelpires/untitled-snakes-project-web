export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES: { [key: number]: string } = {
  1: "",
  42: "kovan.",
};

export enum EtherscanLinkType {
  Account = "account",
  Contract = "contract",
  Transaction = "transaction",
}

export function formatEtherscanLink(
  type: EtherscanLinkType,
  data: [number, string]
) {
  switch (type) {
    case EtherscanLinkType.Account: {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
    }
    case EtherscanLinkType.Contract: {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}#code`;
    }
    case EtherscanLinkType.Transaction: {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
    }
  }
}
