import { etherscanBlockExplorers } from "wagmi";
import { ExternalLink } from "components";
import type { ChainName } from "types";

interface Props {
  txHash?: string;
}

const PendingNotification = ({ txHash }: Props) => (
  <div className="flex flex-col gap-1">
    <span>Transaction pending...</span>
    {txHash && (
      <ExternalLink
        url={`${
          etherscanBlockExplorers[
            process.env.NEXT_PUBLIC_CHAIN_NAME as ChainName
          ].url
        }/tx/${txHash}`}
      >
        <span className="text-green-500">View on Etherscan</span>
      </ExternalLink>
    )}
  </div>
);

export default PendingNotification;
