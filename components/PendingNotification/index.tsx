import { formatEtherscanLink, EtherscanLinkType } from "utils/etherscan";
import { ExternalLink } from "components";
import styles from "./PendingNotification.module.css";

interface Props {
  txHash: string;
}

const PendingNotification = ({ txHash }: Props) => (
  <div className={styles.container}>
    <span>Transaction pending...</span>
    <ExternalLink
      url={formatEtherscanLink(EtherscanLinkType.Transaction, [
        Number(process.env.NEXT_PUBLIC_CHAIN_ID),
        txHash,
      ])}
    >
      <span className={styles.link}>View on Etherscan</span>
    </ExternalLink>
  </div>
);

export default PendingNotification;
