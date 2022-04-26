import { NextApiResponse } from "next";
import type { NextApiRequestWithTokenData } from "types";

/*
 * withErrorWrapper middleware.
 * Returns 500 and hides any response body if there's an error.
 */
function withErrorWrapper(
  handler: (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) => Promise<void>
) {
  return async function (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) {
    try {
      return handler(req, res);
    } catch (err) {
      res.status(500).end();
    }
  };
}

export default withErrorWrapper;
