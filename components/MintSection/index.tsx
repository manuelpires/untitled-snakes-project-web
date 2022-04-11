import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { utils } from "ethers";
import { toast } from "react-toastify";
import useSnakesContract from "../../hooks/useSnakesContract";
import Button from "../Button";
import LessIcon from "../../public/icons/less-icon.svg";
import MoreIcon from "../../public/icons/more-icon.svg";
import styles from "./MintSection.module.css";

const MintSection = () => {
  const [amount, setAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);

  const {
    contract,
    isLoading,
    maxSupply,
    maxMintPerTx,
    price,
    isSaleActive,
    currentSupply,
    getContractVariables,
  } = useSnakesContract();

  const currentPrice = useMemo(() => {
    if (price) return utils.formatEther(price.mul(amount));
  }, [amount, price]);

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
          error: "Failed 💀",
        });
        await tx.wait();
        console.log("Minted -- Tx hash:", tx.hash);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsMinting(false);
      getContractVariables();
    }
  };

  const onLessAmountPress = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const onMoreAmountPress = () => {
    if (maxMintPerTx && amount < maxMintPerTx) {
      setAmount(amount + 1);
    }
  };

  if (isLoading) {
    return null;
  }

  if (!isSaleActive) {
    return <h1>Sale will be active soon</h1>;
  }

  return (
    <section className={styles.section}>
      <h2>
        <span className={styles.currentSupply}>{currentSupply}</span>
        {` / ${maxSupply} minted`}
      </h2>
      <div className={styles.buttonsContainer}>
        <Button
          isRound
          onClick={onLessAmountPress}
          disabled={isMinting || currentSupply === maxSupply}
        >
          <Image src={LessIcon} alt="less" width={40} height={40} />
        </Button>

        <Button
          onClick={mint}
          disabled={isMinting || currentSupply === maxSupply}
        >
          {`Mint ${amount} - ${currentPrice} Ξ`}
        </Button>

        <Button
          isRound
          onClick={onMoreAmountPress}
          disabled={isMinting || currentSupply === maxSupply}
        >
          <Image src={MoreIcon} alt="more" width={40} height={40} />
        </Button>
      </div>
    </section>
  );
};

export default MintSection;
