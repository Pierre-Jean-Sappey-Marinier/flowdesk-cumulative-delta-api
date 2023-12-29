import isArrayOfObjects from "./isArrayOfObjects.utils";

describe("isArrayOfObjects", () => {
  it("should return true if input is an array of objects", () => {
    const input = [
      {
        size: "0.00062012",
        side: "buy",
      },
    ];

    expect(isArrayOfObjects(input)).toBe(true);
  });

  it("should return true if input is an array", () => {
    expect(isArrayOfObjects([])).toBe(true);
  });

  it("should return false if input is an object", () => {
    expect(isArrayOfObjects({})).toBe(false);
  });

  it("should return false if input is an array of arrays", () => {
    expect(isArrayOfObjects([[]])).toBe(false);
  });

  it("should return false if input is an array of objects and other types", () => {
    const input = [
      {
        size: "0.00062012",
        side: "buy",
      },
      [],
      "other type",
    ];

    expect(isArrayOfObjects(input)).toBe(false);
  });

  it("should return false if input is null", () => {
    expect(isArrayOfObjects(null)).toBe(false);
  });

  it("should return false if input is a string", () => {
    expect(isArrayOfObjects("not an array")).toBe(false);
  });

  it("should return false if input is a number", () => {
    expect(isArrayOfObjects(42)).toBe(false);
  });
});
