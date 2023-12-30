import calculateTotalDelta from "./cumulativeDelta.service";
import { type TradeHistory, HISTORY_SIDES } from "../types/tradeHistory.type";

describe("calculateTotalDelta", () => {
  it("should calculate the cumulative delta correctly for buy trades", () => {
    const trades: TradeHistory[] = [
      { size: 2, side: HISTORY_SIDES.BUY },
      { size: 3, side: HISTORY_SIDES.BUY },
      { size: 1, side: HISTORY_SIDES.BUY },
    ];

    const result = calculateTotalDelta(trades);

    expect(result).toBe(6);
  });

  it("should calculate the cumulative delta correctly for sell trades", () => {
    const trades: TradeHistory[] = [
      { size: 2, side: HISTORY_SIDES.SELL },
      { size: 3, side: HISTORY_SIDES.SELL },
      { size: 1, side: HISTORY_SIDES.SELL },
    ];

    const result = calculateTotalDelta(trades);

    expect(result).toBe(-6);
  });

  it("should calculate the cumulative delta correctly for more complex trades", () => {
    const trades: TradeHistory[] = [
      { size: 2, side: HISTORY_SIDES.SELL },
      { size: 3, side: HISTORY_SIDES.SELL },
      { size: 5, side: HISTORY_SIDES.BUY },
      { size: 0.444, side: HISTORY_SIDES.BUY },
      { size: 1, side: HISTORY_SIDES.BUY },
      { size: 0.845, side: HISTORY_SIDES.SELL },
      { size: 6, side: HISTORY_SIDES.SELL },
    ];

    const result = calculateTotalDelta(trades);

    expect(result).toBe(-5.401);
  });

  it("should return 0 for an empty array of trades", () => {
    const trades: TradeHistory[] = [];
    const result = calculateTotalDelta(trades);

    expect(result).toBe(0);
  });
});
