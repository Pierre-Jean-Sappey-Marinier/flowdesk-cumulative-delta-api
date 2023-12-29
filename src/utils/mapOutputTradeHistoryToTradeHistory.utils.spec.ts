import { type OutputHistoryData } from "../types/outputHistoryData.type";
import { HISTORY_SIDES } from "../types/tradeHistory.type";
import mapOutputTradeHistoryToTradeHistory from "./mapOutputTradeHistoryToTradeHistory.utils";

describe("mapToCumulativeDeltaResponse", () => {
  it("should map an output history correctly", () => {
    const outputHistory: OutputHistoryData = {
      sequence: "6392849753063425",
      price: "42082.9",
      size: "0.00062012",
      side: "buy",
      time: 1703614553842000000,
    };

    const result = mapOutputTradeHistoryToTradeHistory(outputHistory);
    expect(result).toEqual({
      size: 0.00062012,
      side: HISTORY_SIDES.BUY,
    });
  });
});
