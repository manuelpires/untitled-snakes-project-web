import { NextApiResponse } from "next";
import type { NextApiRequestWithTokenData } from "types";
import { contract, provider } from "./connection";

/*
 * withIsHumanityLover middleware.
 * Validates if the token should have the Humanity Lover atttribute.
 * If it should, adds {isHumanityLover} to the req object.
 */
function withIsHumanityLover(
  handler: (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) => Promise<void>
) {
  return async function (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) {
    // Get event logs from the mint transaction
    const { logs } = await provider.getTransactionReceipt(
      req.tokenData.mintTxHash
    );

    // Verify if there's a HumanityLover event in the logs
    req.tokenData.isHumanityLover = logs.some(
      (log) =>
        contract.interface.parseLog(log).signature ===
        "HumanityLover(address,uint256[])"
    );

    return handler(req, res);
  };
}

export default withIsHumanityLover;
