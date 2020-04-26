import pad2Digits from "../pad2Digits";

describe("pad2Digits", () => {
  it("returns a correct result with a 1-digit number", () => {
    expect(pad2Digits(9)).toBe("09");
  });

  it("returns a correct result with a 2-digit number", () => {
    expect(pad2Digits(12)).toBe("12");
  });
});
