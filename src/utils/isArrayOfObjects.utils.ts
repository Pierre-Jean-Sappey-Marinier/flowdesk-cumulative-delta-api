import isObject from "./isObject.utils";

export default function isArrayOfObjects(
  arr: unknown
): arr is Array<Record<string, unknown>> {
  return Array.isArray(arr) && arr.every(isObject);
}
