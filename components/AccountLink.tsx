import { useAccount, useEnsName, etherscanBlockExplorers } from "wagmi";
import shortenAddress from "utils/shortenAddress";
import { Button, ExternalLink } from "components";
import type { ChainName } from "types";

const AccountLink = () => {
  const { address } = useAccount();

  const { data: ensName } = useEnsName({ address });

  const accountLink = `${
    etherscanBlockExplorers[process.env.NEXT_PUBLIC_CHAIN_NAME as ChainName].url
  }/address/${address}`;

  const shortenedAddress = address ? shortenAddress(address) : undefined;

  return (
    <ExternalLink url={accountLink}>
      <Button isSmall>{ensName || shortenedAddress}</Button>
    </ExternalLink>
  );
};

export default AccountLink;
