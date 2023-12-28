import { type Request, type Response } from "express";
import getCumulativeDeltaController from "../controllers/getCumulativeDeltaController";
import Logger from "../services/logger";

const logger = new Logger();

export default async function getCumulativeDeltaHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const processedResult = await getCumulativeDeltaController(req.query);

    res.json(processedResult);
  } catch (error) {
    logger.error("Error handling request:", error);
  }
}
