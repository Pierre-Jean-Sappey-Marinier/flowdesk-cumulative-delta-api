export interface RawOutputHistoryData {
  code: string;
  data: unknown;
}

export interface OutputHistoryData {
  size: string;
  side: "buy" | "sell";
  [key: string]: unknown;
}
