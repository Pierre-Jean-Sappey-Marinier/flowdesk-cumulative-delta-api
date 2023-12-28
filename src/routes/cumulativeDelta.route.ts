import {
  type Response,
  type Request,
  Router,
  type NextFunction,
} from "express";
import getCumulativeDeltaHandler from "./cumulativeDelta.handler";

// Handle async handler gracefully since express handler are synchronous
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => unknown) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await Promise.resolve(fn(req, res, next)).catch(next);
  };

const router = Router();

/**
 * @swagger
 * /cumulative-delta-index:
 *   get:
 *     summary: Get cumulative delta index for a pair of currency
 *     tags: [cumulative-delta-index]
 *     parameters:
 *       - in: query
 *         name: symbol
 *         required: true
 *         description: Pair of currency (e.g. BTC-USDT)
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Success, returns cumulative delta index for a pair of currency
 *       400:
 *         description: Bad request, check the request parameters
 *       500:
 *         description: Internal server error
 */
router.get("/cumulative-delta-index", asyncHandler(getCumulativeDeltaHandler));

export default router;
