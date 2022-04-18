import { useState, useCallback, useEffect } from "react";
import { BigNumber } from "ethers";
import { useContract } from "hooks";
import CONTRACT from "contracts/UntitledSnakesProject.json";
import type { UntitledSnakesProject } from "types";

const useSnakesContract = () => {
  const contract = useContract<UntitledSnakesProject>(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
    CONTRACT.abi
  );

  const [isContractStateLoading, setIsContractStateLoading] = useState(true);
  const [isSoldOut, setIsSoldOut] = useState(false);

  // CONTRACT CONSTANTS
  const maxSupply = 6666;
  const maxMintPerTx = 10;
  const [price, setPrice] = useState<BigNumber>();

  const getPrice = useCallback(async () => {
    if (contract) {
      const contractPrice = await contract.price();
      setPrice(contractPrice);
    }
  }, [contract]);

  // CONTRACT VARIABLES
  const [isSaleActive, setIsSaleActive] = useState(false);
  const [currentSupply, setCurrentSupply] = useState<number>();

  const getContractVariables = useCallback(async () => {
    if (contract) {
      const contractIsSaleActive = await contract.isSaleActive();
      setIsSaleActive(contractIsSaleActive);
      const contractCurrentSupply = await contract.totalSupply();
      setCurrentSupply(contractCurrentSupply.toNumber());
      setIsSoldOut(contractCurrentSupply.toNumber() === maxSupply);
    }
  }, [contract, maxSupply]);

  // FIRST LOAD
  const runFirstLoad = useCallback(async () => {
    await getPrice();
    await getContractVariables();
    setIsContractStateLoading(false);
  }, [getPrice, getContractVariables]);

  useEffect(() => {
    runFirstLoad();
  }, [runFirstLoad]);

  // SUBSEQUENT INTERVAL LOADS
  useEffect(() => {
    const interval = setInterval(() => {
      getContractVariables();
    }, 10000);
    return () => clearInterval(interval);
  }, [getContractVariables]);

  return {
    contract,
    currentSupply,
    isContractStateLoading,
    isSaleActive,
    isSoldOut,
    maxSupply,
    maxMintPerTx,
    price,
    getContractVariables,
  };
};

export default useSnakesContract;
