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

  // Fetch metadata from the IPFS gateway
  const response = await fetch(
    `${process.env.IPFS_METADATA_BASE_URI}${tokenId}`
  );
  const json = await response.json();

  // Update image url with the proxy url so we don't leak the IPFS CID
  json.image = `${process.env.NEXT_PUBLIC_IMAGES_BASE_URI}${tokenId}`;

  // Add Humanity Lover attribute when applicable
  if (req.tokenData.isHumanityLover) {
    json.attributes.push({ value: "Humanity Lover" });
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=2678400");
  res.status(200).json(json);
};

export default withErrorWrapper(
  withGetMethod(withValidTokenId(withIsHumanityLover(handler)))
);
