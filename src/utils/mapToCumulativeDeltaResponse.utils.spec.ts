import mapToCumulativeDeltaResponse from "./mapToCumulativeDeltaResponse.utils";

describe("mapToCumulativeDeltaResponse", () => {
  it("should map a positive delta correctly", () => {
    const result = mapToCumulativeDeltaResponse(10);
    expect(result).toEqual({ delta: 10 });
  });

  it("should map a negative delta correctly", () => {
    const result = mapToCumulativeDeltaResponse(-5.5);
    expect(result).toEqual({ delta: -5.5 });
  });

  it("should map zero delta correctly", () => {
    const result = mapToCumulativeDeltaResponse(0);
    expect(result).toEqual({ delta: 0 });
  });
});
