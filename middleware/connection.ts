import { ethers } from "ethers";
import type { UntitledSnakesProject } from "types";
import CONTRACT from "contracts/UntitledSnakesProject.json";

const provider = new ethers.providers.InfuraProvider(
  Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  [process.env.INFURA_KEY]
);

const wallet = new ethers.Wallet(
  process.env.BURNER_WALLET_PRIVATE_KEY as string,
  provider
);

const signer = wallet.connect(provider);

const contract = new ethers.Contract(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
  CONTRACT.abi,
  signer
) as UntitledSnakesProject;

export { provider, contract };
