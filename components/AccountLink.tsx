import { useAccount, useEnsName, etherscanBlockExplorers } from "wagmi";
import { Button, ExternalLink } from "components";
import shortenAddress from "utils/shortenAddress";
import CHAIN_NAME from "utils/chainName";

const AccountLink = () => {
  const { address } = useAccount();

  const { data: ensName } = useEnsName({ address });

  const accountLink = `${etherscanBlockExplorers[CHAIN_NAME].url}/address/${address}`;

  const shortenedAddress = address ? shortenAddress(address) : undefined;

  return (
    <ExternalLink url={accountLink}>
      <Button isSmall>{ensName || shortenedAddress}</Button>
    </ExternalLink>
  );
};

export default AccountLink;
