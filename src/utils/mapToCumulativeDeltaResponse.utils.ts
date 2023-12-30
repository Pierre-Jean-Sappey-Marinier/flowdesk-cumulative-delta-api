import { type CumulativeDeltaResponse } from "../types/cumulativeDeltaResponse.type";

export default function mapToCumulativeDeltaResponse(
  delta: number
): CumulativeDeltaResponse {
  return { delta };
}
