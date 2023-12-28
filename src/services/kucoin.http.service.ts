import fetchData from "./http.service";
import config from "../config";
import { type RawOutputHistoryData } from "../types/outputHistoryData.type";

export default async function fetchKucoinData(
  symbol: string
): Promise<unknown> {
  const apiUrl = config.API_PATH;

  if (!apiUrl) {
    throw new Error("API_PATH is not defined in the environment variables.");
  }

  const params = { symbol };

  try {
    const response = await fetchData<RawOutputHistoryData>(apiUrl, params);

    if (!response?.data) {
      throw new Error(`Error fetching data from Kucoin API.`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from Kucoin API.`);
  }
}
