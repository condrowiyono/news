import { formatNumber } from "../number";

describe("number utils", () => {
  it("formatNumber should be return valid value with rb", () => {
    const result = formatNumber(10000, true);
    expect(result).toBe("10.0rb");
  });
  it("formatNumber should be return valid value", () => {
    const result = formatNumber(10000);
    expect(result).toBe("10,000");
  });
});
