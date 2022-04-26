import { NextApiResponse } from "next";
import type { NextApiRequestWithTokenData } from "types";

/*
 * withGetMethod middleware.
 * Verifies that the request is a GET.
 * Returns 404 if it's not a GET request.
 */
function withGetMethod(
  handler: (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) => Promise<void>
) {
  return async function (
    req: NextApiRequestWithTokenData,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      return handler(req, res);
    }
    res.status(404).end();
  };
}

export default withGetMethod;
