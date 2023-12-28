import inputValidation from "../validation/cumulativeDelta.inputValidation";
import fetchKucoinData from "../services/kucoin.http.service";
import Logger from "../services/logger";

const logger = new Logger();

export default async function getCumulativeDeltaController(
  query?: Record<string, unknown>
): Promise<void> {
  inputValidation(query);

  const { symbol } = query;

  const apiResponseData = await fetchKucoinData(symbol);

  logger.log(JSON.stringify(apiResponseData));
}
