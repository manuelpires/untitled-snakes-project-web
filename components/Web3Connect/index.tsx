import { ReactNode, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { toast } from "react-toastify";
import { injected } from "../../connectors";
import useEagerConnect from "../../hooks/useEagerConnect";
import useMetaMaskOnboarding from "../../hooks/useMetaMaskOnboarding";
import Button from "../Button";

type Props = {
  children?: ReactNode;
  isSmall?: boolean;
};

const Web3Connect = ({ children, isSmall = false }: Props) => {
  const triedToEagerConnect = useEagerConnect();

  const { account, activate, active, error, setError } = useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(
        `"Find ussss on ${
          Number(process.env.NEXT_PUBLIC_CHAIN_ID) === 1 ? "Mainnet" : "Kovan"
        }." 🐍`,
        {
          toastId: "wrong-network",
        }
      );
    }
  }, [error]);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  // Case 1: Didn't try to connect yet (loading)
  if (!triedToEagerConnect) {
    return null;
  }

  // Case 2: Tried to connect but still not connected
  if (typeof account !== "string") {
    return (
      <>
        {isWeb3Available ? (
          <Button
            isSmall={isSmall}
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
          </Button>
        ) : (
          <Button isSmall={isSmall} onClick={startOnboarding}>
            Install MetaMask
          </Button>
        )}
      </>
    );
  }

  // Case 3: Connected successfully: render children
  return <>{children}</>;
};

export default Web3Connect;
