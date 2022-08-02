import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { shortenHex, formatEtherscanLink, EtherscanLinkType } from "utils/etherscan";
import { useENSName } from "hooks";
import { Button, ExternalLink } from "components";

const AccountLink = () => {
  const { account, chainId } = useWeb3React();

  const ENSName = useENSName(account);

  const accountLink = useMemo(
    () =>
      account && chainId
        ? formatEtherscanLink(EtherscanLinkType.Account, [chainId, account])
        : undefined,
    [account, chainId]
  );

  const accountShort = useMemo(
    () => (account ? shortenHex(account) : undefined),
    [account]
  );

  return (
    <ExternalLink url={accountLink}>
      <Button isSmall>{ENSName || accountShort}</Button>
    </ExternalLink>
  );
};

export default AccountLink;
