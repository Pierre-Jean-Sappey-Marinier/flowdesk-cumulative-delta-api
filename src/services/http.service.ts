import axios from "axios";
import config from "../config";

export default async function fetchData<T = unknown>(
  url: string,
  params: Record<string, string>
): Promise<T> {
  try {
    const apiUrl = `${config.API_URL}${url}`;
    const response = await axios.get<T>(apiUrl, { params });

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from API: `);
  }
}
