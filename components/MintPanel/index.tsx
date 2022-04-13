import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { utils } from "ethers";
import { toast } from "react-toastify";
import LessIcon from "../../public/icons/less-icon.svg";
import MoreIcon from "../../public/icons/more-icon.svg";
import useSnakesContract from "../../hooks/useSnakesContract";
import Button from "../Button";
import ExternalLink from "../ExternalLink";
import styles from "./MintPanel.module.css";

const MintPanel = () => {
  const [amount, setAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);

  const {
    contract,
    currentSupply,
    isLoading,
    isSaleActive,
    isSoldOut,
    maxSupply,
    maxMintPerTx,
    price,
    getContractVariables,
  } = useSnakesContract();

  const currentPrice = useMemo(
    () => (price ? utils.formatEther(price.mul(amount)) : null),
    [amount, price]
  );

  // Updates amount to mint based on availability
  useEffect(() => {
    if (currentSupply && maxSupply && amount + currentSupply > maxSupply) {
      setAmount(maxSupply - currentSupply);
    }
  }, [currentSupply, maxSupply, amount]);

  const mint = async () => {
    try {
      if (contract && price) {
        const tx = await contract.mint(amount, {
          value: price.mul(amount),
        });
        setIsMinting(true);
        toast.promise(tx.wait(), {
          pending: "Pending transaction...",
          success: `"Greetingsss, massster." 🐍`,
          error: "Transaction failed 💀",
        });
        await tx.wait();
        await getContractVariables();
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
      maxMintPerTx &&
      currentSupply &&
      maxSupply &&
      amount < maxMintPerTx &&
      amount + currentSupply < maxSupply
    ) {
      setAmount(amount + 1);
    }
  };

  // Case 1: Contract state is loading
  if (isLoading) {
    return null;
  }

  // Case 2: Collection is sold out
  if (isSoldOut) {
    return (
      <div className={styles.container}>
        <h2>SOLD OUT 💥</h2>
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
    <div className={styles.container}>
      <h3 className={styles.supplyInfo}>
        <span className={styles.colored}>{currentSupply}</span>
        {` / ${maxSupply} minted`}
      </h3>
      <div className={styles.buttonsContainer}>
        <Button isRound onClick={onLessAmountPress} disabled={isMinting}>
          <Image src={LessIcon} alt="less" width={40} height={40} />
        </Button>

        <Button onClick={mint} disabled={isMinting}>
          {`Mint ${amount} - ${currentPrice} Ξ`}
        </Button>

        <Button isRound onClick={onMoreAmountPress} disabled={isMinting}>
          <Image src={MoreIcon} alt="more" width={40} height={40} />
        </Button>
      </div>
    </div>
  );
};

export default MintPanel;
