import nextItem from "../nextItem";

describe("nextItem", () => {
  it("returns a correct result with an empty `items`params", () => {
    expect(nextItem(1, [])).toBe(null);
  });

  it("returns a correct result without `items`params", () => {
    expect(nextItem(1)).toBe(null);
  });

  it("returns a correct result with a nullable `item`params", () => {
    expect(nextItem(null, [2, 3])).toBe(2);
  });

  it("returns a correct result with a known `item`params", () => {
    expect(nextItem(0, [0, 1, 2])).toBe(1);
  });

  it("returns a correct result with a known `item`params", () => {
    expect(nextItem(1, [1, 2, 3])).toBe(2);
  });

  it("returns a correct result with an unkonwn `item`params", () => {
    expect(nextItem(1, [2, 3])).toBe(2);
  });
});
