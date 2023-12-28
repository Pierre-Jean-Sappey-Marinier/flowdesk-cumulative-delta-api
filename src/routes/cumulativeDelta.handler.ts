import { type Request, type Response } from "express";
import getCumulativeDeltaController from "../controllers/getCumulativeDeltaController";
import Logger from "../services/logger";
import { HttpError } from "../types/error.type";

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

    res.status(getHttpStatus(error)).send(getErrorMessage(error));
  }
}

function getHttpStatus(error: unknown): number {
  if (error instanceof HttpError) {
    return error.statusCode;
  }

  return 500;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof HttpError) {
    return error.message;
  }

  return "Internal server error";
}
