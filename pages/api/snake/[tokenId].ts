import { NextApiResponse } from "next";
import type { NextApiRequestWithTokenData } from "types";
import {
  withErrorWrapper,
  withGetMethod,
  withValidTokenId,
  withIsHumanityLover,
} from "middleware";

/*
 * GET /api/snake/:tokenId
 */
const handler = async (
  req: NextApiRequestWithTokenData,
  res: NextApiResponse
) => {
  const { tokenId } = req.query;

  const response = await fetch(
    `${process.env.IPFS_METADATA_BASE_URI}${tokenId}`
  );
  const json = await response.json();
  json.image = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URI}${tokenId}`;

  if (req.tokenData.isHumanityLover) {
    json.attributes.push({ value: "Humanity Lover" });
  }

  res
    .setHeader("Cache-Control", "max-age=0, s-maxage=31536000")
    .status(200)
    .json(json);
};

export default withErrorWrapper(
  withGetMethod(withValidTokenId(withIsHumanityLover(handler)))
);
