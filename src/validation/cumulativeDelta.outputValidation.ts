import { HISTORY } from "../types/tradeHistory.type";
import { type OutputHistoryData } from "../types/outputHistoryData.type";
import isArrayOfObjects from "../utils/isArrayOfObjects.utils";

function validateOutputTradeHistory(
  obj: Record<string, unknown>
): asserts obj is OutputHistoryData {
  const requiredFields = [HISTORY.SIZE, HISTORY.SIDE];

  const missingFields = requiredFields.filter(
    (field) => obj[field] === undefined
  );

  if (missingFields.length > 0) {
    const missingFieldsMessage = missingFields.join(", ");
    throw new Error(
      `Field(s) ${missingFieldsMessage} are/is missing in one of the objects.`
    );
  }

  if (typeof obj.size !== "string" || !/^\d+(\.\d+)?$/.test(obj.size)) {
    throw new Error(
      `Field ${HISTORY.SIZE} must be a string representing a decimal number in one of the objects.`
    );
  }

  if (typeof obj.side !== "string" || !/^(buy|sell)$/.test(obj.side)) {
    throw new Error(
      `Field ${HISTORY.SIDE} must be a string with value "buy" or "sell" in one of the objects.`
    );
  }
}

export default function outputValidator(
  input: unknown
): asserts input is OutputHistoryData[] {
  if (!isArrayOfObjects(input)) {
    throw new Error("Input must be an array of objects.");
  }

  input.forEach((obj) => {
    validateOutputTradeHistory(obj);
  });
}
