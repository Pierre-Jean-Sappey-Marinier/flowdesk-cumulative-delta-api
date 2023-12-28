import inputValidation from "./cumulativeDelta.inputValidation";

describe("GetTrade input validation", () => {
  it("should not throw if input is valid and an object", () => {
    expect(() => {
      inputValidation({ symbol: "BTC-USDT" });
    }).not.toThrow();
  });

  it("should throw if input is not an object", () => {
    expect(() => {
      inputValidation();
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
    expect(() => {
      inputValidation(null);
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
    expect(() => {
      inputValidation("not an object");
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
    expect(() => {
      inputValidation(42);
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
  });

  it("should throw if input does not contain 'symbol' key", () => {
    expect(() => {
      inputValidation({});
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
    expect(() => {
      inputValidation({ otherKey: "some value" });
    }).toThrow("Input must be an object and must contain a key 'symbol'.");
  });

  it("should throw if 'symbol' is not a non-empty string", () => {
    expect(() => {
      inputValidation({ symbol: 42 });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: null });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
  });

  it("should throw if 'symbol' does not match the required format", () => {
    expect(() => {
      inputValidation({ symbol: "InvalidSymbol" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "BTCUSDT" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "BTC-USD-T" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "BTC-USDTTT" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "btc-usdt" });
    }).toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
  });

  it("should not throw if input is valid and 'symbol' is a non-empty string with the correct format", () => {
    expect(() => {
      inputValidation({ symbol: "BTC-USDT" });
    }).not.toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "ETH-BTC" });
    }).not.toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
    expect(() => {
      inputValidation({ symbol: "XRP-USDT" });
    }).not.toThrow(
      "The value of 'symbol' must be a non-empty string in the format 'XXX-XXX', where X is a capital letter."
    );
  });
});
