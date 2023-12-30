import { type TradeHistory, HISTORY_SIDES } from "../types/tradeHistory.type";

export default function calculateTotalDelta(trades: TradeHistory[]): number {
  return trades.reduce((sum, trade) => {
    const { size, side } = trade;
    const sideMultiplier = side === HISTORY_SIDES.BUY ? 1 : -1;
    const deltaChange = size * sideMultiplier;

    return sum + deltaChange;
  }, 0);
}
