import { BadRequestError } from "../types/error.type";
import isObject from "../utils/isObject.utils";

export default function inputValidator(input?: unknown): asserts input is {
  symbol: string;
} {
  if (!isObject(input) || !("symbol" in input)) {
    throw new BadRequestError(
      "Input must be an object and must contain a key 'symbol'."
    );
  }

  if (
    typeof input.symbol !== "string" ||
    input.symbol.trim() === "" ||
    !/^[A-Z]{3,5}-[A-Z]{3,5}$/.test(input.symbol)
  ) {
    throw new BadRequestError(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
  }
}
