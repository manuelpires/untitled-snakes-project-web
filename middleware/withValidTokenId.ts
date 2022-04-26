import { NextApiResponse } from "next";
import { ethers } from "ethers";
import type { NextApiRequestWithTokenData } from "types";
import { contract } from "./connection";

/*
 * Return true if the tokenId is valid, false otherwise.
 */
const isTokenIdValid = (tokenId: string) => {
  const id = parseInt(tokenId);
  return /^\d+$/.test(tokenId) && id >= 0 && id < 6666;
};

/*
 * Returns the mint transaction hash for the given tokenId.
 * If the tokenId has not been minted yet, returns undefined.
 */
const getMintTxHash = async (tokenId: string) => {
  const eventFilter = contract.filters.Transfer(
    ethers.constants.AddressZero,
    null,
    ethers.BigNumber.from(tokenId)
  );

  const [mintTransfer] = await contract.queryFilter(
    eventFilter,
    process.env.NEXT_PUBLIC_DEPLOYMENT_BLOCK_NUMBER
  );

  return mintTransfer?.transactionHash;
};

/*
 * withValidTokenId middleware.
 * Verifies that the tokenId requested is valid and minted.
 * If valid, it adds {mintTxHash} to the req object.
 * Returns 404 if the tokenId is not valid or not minted.
 */
function withValidTokenId(
  handler: (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) => Promise<void>
) {
  return async function (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) {
    const { tokenId } = req.query;

    if (typeof tokenId === "string" && isTokenIdValid(tokenId)) {
      const mintTxHash = await getMintTxHash(tokenId);

      if (mintTxHash) {
        req.tokenData = { mintTxHash };
        return handler(req, res);
      }
    }

    res.status(404).end();
  };
}

export default withValidTokenId;
