export enum HISTORY {
  SIZE = "size",
  SIDE = "side",
}

export enum HISTORY_SIDES {
  SELL = "sell",
  BUY = "buy",
}

export interface TradeHistory {
  size: number;
  side: HISTORY_SIDES;
}
