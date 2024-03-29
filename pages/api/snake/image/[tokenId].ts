import { NextApiResponse } from "next";
import type { NextApiRequestWithTokenData } from "types";
import { withErrorWrapper, withGetMethod, withValidTokenId } from "middleware";

/*
 * GET /api/snake/image/:tokenId
 */
const handler = async (
  req: NextApiRequestWithTokenData,
  res: NextApiResponse<Buffer>
) => {
  const { tokenId } = req.query;

  // Fetch image from the IPFS gateway
  const response = await fetch(
    `${process.env.IPFS_IMAGES_BASE_URI}${tokenId}.png`
  );
  const arrayBuffer = await response.arrayBuffer();

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "s-maxage=2678400");
  res.status(200).end(Buffer.from(arrayBuffer));
};

export default withErrorWrapper(withGetMethod(withValidTokenId(handler)));
