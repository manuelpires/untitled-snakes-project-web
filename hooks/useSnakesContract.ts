import { useState } from "react";
import { BigNumber } from "ethers";
import {
  useContractReads,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import CONTRACT from "contracts/UntitledSnakesProject.json";

const snakesContract = {
  addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
  contractInterface: CONTRACT.abi,
};

const reads = ["isSaleActive", "price", "totalSupply"];

const useSnakesContract = () => {
  const maxSupply = 6666;
  const maxMintPerTx = 10;

  const [amount, setAmount] = useState(1);
  const [isSaleActive, setIsSaleActive] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [price, setPrice] = useState<BigNumber>();
  const [totalSupply, setTotalSupply] = useState<number>();

  const { isLoading: isStateLoading } = useContractReads({
    contracts: reads.map((functionName) => ({
      ...snakesContract,
      functionName,
    })),
    onSuccess(data) {
      setIsSaleActive(!!data[0]);
      setPrice(BigNumber.from(data[1]));
      setTotalSupply(data[2].toNumber());
      setIsSoldOut(data[2].toNumber() >= maxSupply);
    },
    watch: true,
  });

  const { config } = usePrepareContractWrite({
    ...snakesContract,
    functionName: "mint",
    args: [amount],
    overrides: {
      value: price?.mul(amount),
    },
  });

  const { writeAsync: mint, isLoading: isMintLoading } =
    useContractWrite(config);

  return {
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
  };
};

export default useSnakesContract;
