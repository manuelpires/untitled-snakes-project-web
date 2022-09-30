import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { utils } from "ethers";
import { toast } from "react-toastify";
import LessIcon from "public/icons/less-icon.svg";
import MoreIcon from "public/icons/more-icon.svg";
import useSnakesContract from "hooks/useSnakesContract";
import {
  Button,
  RoundButton,
  ExternalLink,
  PendingNotification,
} from "components";

const MintPanel = () => {
  const [isMinting, setIsMinting] = useState(false);

  const {
    amount,
    isMintLoading,
    isStateLoading,
    isSaleActive,
    isSoldOut,
    maxMintPerTx,
    maxSupply,
    mint,
    price,
    setAmount,
    totalSupply,
  } = useSnakesContract();

  const totalPrice = useMemo(
    () => (price ? utils.formatEther(price.mul(amount)) : null),
    [amount, price]
  );

  // Updates amount to mint based on availability
  useEffect(() => {
    if (totalSupply && maxSupply && amount + totalSupply > maxSupply) {
      setAmount(maxSupply - totalSupply);
    }
  }, [totalSupply, maxSupply, amount, setAmount]);

  const handleMint = async () => {
    try {
      if (mint) {
        setIsMinting(true);
        const tx = await mint();
        toast.promise(tx.wait(), {
          pending: {
            render: <PendingNotification txHash={tx.hash} />,
          },
          success: `"Greetingsss, massster!" 🐍`,
          error: "Transaction failed 💀",
        });
        await tx.wait();
        console.log("Minted -- Tx hash:", tx.hash);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsMinting(false);
    }
  };

  const onLessAmountPress = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const onMoreAmountPress = () => {
    if (
      totalSupply &&
      amount < maxMintPerTx &&
      amount + totalSupply < maxSupply
    ) {
      setAmount(amount + 1);
    }
  };

  // Case 1: Contract state is loading
  if (isStateLoading) {
    return null;
  }

  // Case 2: Collection is sold out
  if (isSoldOut) {
    return (
      <div className="flex flex-col items-center">
        <ExternalLink url="https://opensea.io/collection/snakesproject">
          <Button>{`Buy on OpenSea 🐍`}</Button>
        </ExternalLink>
      </div>
    );
  }

  // Case 3: Sale is not active
  if (!isSaleActive) {
    return <Button>{`Sale will be active S👀N`}</Button>;
  }

  // Case 4: Sale is active and ongoing
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-0 mb-6 text-2xl">
        <span className="text-green-500">{totalSupply}</span>
        {` / ${maxSupply.toLocaleString()} minted`}
      </h3>
      <div className="flex items-center gap-4">
        <RoundButton
          disabled={isMintLoading || isMinting}
          onClick={onLessAmountPress}
        >
          <Image src={LessIcon} alt="less" width={28} height={28} />
        </RoundButton>

        <Button disabled={isMintLoading || isMinting} onClick={handleMint}>
          {`Mint ${amount} - ${totalPrice} Ξ`}
        </Button>

        <RoundButton
          disabled={isMintLoading || isMinting}
          onClick={onMoreAmountPress}
        >
          <Image src={MoreIcon} alt="more" width={28} height={28} />
        </RoundButton>
      </div>
    </div>
  );
};

export default MintPanel;
