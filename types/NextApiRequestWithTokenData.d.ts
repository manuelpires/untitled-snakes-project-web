import { NextApiRequest } from "next";

export type NextApiRequestWithTokenData = NextApiRequest & {
  tokenData: {
    mintTxHash: string;
    isHumanityLover?: boolean;
  };
};
