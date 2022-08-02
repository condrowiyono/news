import { formatCurrency, formatDate } from "../intl";

describe("intl utils", () => {
  it("formatCurrency should be return valid value", () => {
    const result = formatCurrency(10000);
    expect(result).toBeTruthy();
  });

  it("formatDate should be return valid value", () => {
    const result = formatDate.format(new Date("2022-08-02T01:12:58.781Z"));
    expect(result).toBe("2 Agustus 2022 08.12");
  });
});
