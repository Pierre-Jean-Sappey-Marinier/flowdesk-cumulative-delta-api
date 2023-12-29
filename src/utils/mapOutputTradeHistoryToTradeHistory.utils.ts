import { type OutputHistoryData } from "../types/outputHistoryData.type";
import { HISTORY_SIDES, type TradeHistory } from "../types/tradeHistory.type";

const mapperOutputSideToSide: Record<string, HISTORY_SIDES> = {
  buy: HISTORY_SIDES.BUY,
  sell: HISTORY_SIDES.SELL,
};

export default function mapOutputTradeHistoryToTradeHistory(
  trade: OutputHistoryData
): TradeHistory {
  return {
    size: parseFloat(trade.size),
    side: mapperOutputSideToSide[trade.side],
  };
}
