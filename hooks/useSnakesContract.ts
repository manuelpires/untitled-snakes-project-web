import { useState, useCallback, useEffect } from "react";
import { BigNumber } from "ethers";
import useContract from "./useContract";
import type { UntitledSnakesProject } from "../types";
import CONTRACT from "../contracts/UntitledSnakesProject.json";

const useSnakesContract = () => {
  const contract = useContract<UntitledSnakesProject>(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
    CONTRACT.abi
  );

  const [isLoading, setIsLoading] = useState(true);
  const [isSoldOut, setIsSoldOut] = useState(false);

  // CONTRACT CONSTANTS
  const [maxSupply, setMaxSupply] = useState<number>();
  const [maxMintPerTx, setMaxMintPerTx] = useState<number>();
  const [price, setPrice] = useState<BigNumber>();

  const getContractConstants = useCallback(async () => {
    if (contract) {
      const contractMaxSupply = await contract.MAX_SUPPLY();
      setMaxSupply(contractMaxSupply.toNumber());
      const contractMaxMintPerTx = await contract.MAX_MINT_PER_TX();
      setMaxMintPerTx(contractMaxMintPerTx.toNumber());
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
    await getContractConstants();
    await getContractVariables();
    setIsLoading(false);
  }, [getContractConstants, getContractVariables]);

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
    isLoading,
    isSaleActive,
    isSoldOut,
    maxSupply,
    maxMintPerTx,
    price,
    getContractConstants,
    getContractVariables,
  };
};

export default useSnakesContract;
