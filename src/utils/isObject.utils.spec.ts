import isObject from "./isObject.utils";

describe("isObject", () => {
  it("should return false if nothing is passed", () => {
    const result = isObject();

    expect(result).toBe(false);
  });

  it("should return false if an array is passed", () => {
    const result = isObject([]);

    expect(result).toBe(false);
  });

  it("should return false if null is passed", () => {
    const result = isObject(null);

    expect(result).toBe(false);
  });

  it("should return true if an empty object is passed", () => {
    const result = isObject({});

    expect(result).toBe(true);
  });

  it("should return true if an object is passed", () => {
    const result = isObject({ symbol: "BTC-USDT" });

    expect(result).toBe(true);
  });
});
