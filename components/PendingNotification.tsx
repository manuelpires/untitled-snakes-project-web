import { etherscanBlockExplorers } from "wagmi";
import { ExternalLink } from "components";
import CHAIN_NAME from "utils/chainName";

interface Props {
  txHash?: string;
}

const PendingNotification = ({ txHash }: Props) => (
  <div className="flex flex-col gap-1">
    <span>Transaction pending...</span>
    {txHash && (
      <ExternalLink
        url={`${etherscanBlockExplorers[CHAIN_NAME].url}/tx/${txHash}`}
      >
        <span className="text-green-500">View on Etherscan</span>
      </ExternalLink>
    )}
  </div>
);

export default PendingNotification;
