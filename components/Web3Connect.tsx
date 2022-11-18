import { ReactNode, useState, useEffect } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { Button } from "components";

interface Props {
  children?: ReactNode;
  isSmall?: boolean;
}

const Web3Connect = ({ children, isSmall = false }: Props) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const [wrongChain, setWrongChain] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setWrongChain(chain?.id !== chains[0].id);
    }
  }, [isConnected, chain, chains, switchNetwork]);

  if (isConnected && wrongChain) {
    return (
      <Button onClick={() => switchNetwork?.(chains[0].id)} isSmall={isSmall}>
        {`Switch to ${chains[0].name}`}
      </Button>
    );
  }

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show }) => (
        <>
          {isConnected ? (
            children
          ) : (
            <Button onClick={show} disabled={isConnecting} isSmall={isSmall}>
              Connect Wallet
            </Button>
          )}
        </>
      )}
    </ConnectKitButton.Custom>
  );
};

export default Web3Connect;
