import inputValidation from "../validation/cumulativeDelta.inputValidation";
import fetchKucoinData from "../services/kucoin.http.service";
import outputValidation from "../validation/cumulativeDelta.outputValidation";
import mapOutputTradeHistoryToTradeHistory from "../utils/mapOutputTradeHistoryToTradeHistory.utils";
import calculateTotalDelta from "../services/cumulativeDelta.service";
import mapToCumulativeDeltaResponse from "../utils/mapToCumulativeDeltaResponse.utils";
import { type CumulativeDeltaResponse } from "../types/cumulativeDeltaResponse.type";

export default async function getCumulativeDeltaController(
  query?: Record<string, unknown>
): Promise<CumulativeDeltaResponse> {
  inputValidation(query);

  const { symbol } = query;

  const apiResponseData = await fetchKucoinData(symbol);

  outputValidation(apiResponseData);

  const tradeHistories = apiResponseData.map((trade) =>
    mapOutputTradeHistoryToTradeHistory(trade)
  );

  const delta = calculateTotalDelta(tradeHistories);

  const mappedResponse = mapToCumulativeDeltaResponse(delta);

  return mappedResponse;
}
