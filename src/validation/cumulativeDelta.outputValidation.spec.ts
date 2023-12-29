import outputValidation from "./cumulativeDelta.outputValidation";

describe("Is an array and objects output validation", () => {
  it("should not throw if output is valid", () => {
    const validOutput = [
      {
        sequence: "6392849753063425",
        price: "42082.9",
        size: "0.00062012",
        side: "buy",
        time: 1703614553842000000,
      },
    ];

    expect(() => {
      outputValidation(validOutput);
    }).not.toThrow();
  });

  it("should throw if output is not a valid array of objects", () => {
    const validOutput = {};
    expect(() => {
      outputValidation(validOutput);
    }).toThrow("Input must be an array of objects.");
  });

  it("should throw if output is not a valid array of objects", () => {
    const validOutput = [[]];

    expect(() => {
      outputValidation(validOutput);
    }).toThrow("Input must be an array of objects.");
  });

  it("should throw if output is not an array", () => {
    expect(() => {
      outputValidation(null);
    }).toThrow("Input must be an array of objects.");
    expect(() => {
      outputValidation("not an array");
    }).toThrow("Input must be an array of objects.");
    expect(() => {
      outputValidation(42);
    }).toThrow("Input must be an array of objects.");
  });
});

describe("Missing fields output validation", () => {
  it("should return an error message if size and side fields are missing", () => {
    const invalidOutput = [
      {
        sequence: "6392856179785732",
        price: "42046.4",
        time: 1703614571432000000,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow("Field(s) size, side are/is missing in one of the objects.");
  });

  it("should return an error message if required fields are missing", () => {
    const invalidOutput = [
      {
        sequence: "6392856179785732",
        price: "42046.4",
        size: "10.5",
        time: 1703614571432000000,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow("Field(s) side are/is missing in one of the objects.");
  });
});

describe("HISTORY.SIZE output validation", () => {
  it("should not throw error message if size is a valid string", () => {
    const validOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: "10.5",
        side: "buy",
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(validOutput);
    }).not.toThrow();
  });

  it("should return an error message if size is not a valid string", () => {
    const invalidOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: "invalid_size",
        side: "buy",
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow(
      "Field size must be a string representing a decimal number in one of the objects."
    );
  });

  it("should return an error message if size is not a string", () => {
    const invalidOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: 10.5,
        side: "buy",
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow(
      "Field size must be a string representing a decimal number in one of the objects."
    );
  });
});

describe("HISTORY.SIDE output validation", () => {
  it("should not throw error message if side is a valid string", () => {
    const validOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: "10.5",
        side: "buy",
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(validOutput);
    }).not.toThrow();
  });

  it("should return an error message if side is not 'sell' or 'buy'", () => {
    const invalidOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: "10.5",
        side: "invalid_side",
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow(
      `Field side must be a string with value "buy" or "sell" in one of the objects.`
    );
  });

  it("should return an error message if side is not a string", () => {
    const invalidOutput = [
      {
        sequence: "6392849753063425",
        price: "123.45",
        size: "10.5",
        side: 123,
        time: 1630452437,
      },
    ];
    expect(() => {
      outputValidation(invalidOutput);
    }).toThrow(
      `Field side must be a string with value "buy" or "sell" in one of the objects.`
    );
  });
});
