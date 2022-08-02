import rgbDataURL from "../blur";

describe("date utils", () => {
  it("should be return valid value", () => {
    const result = rgbDataURL(0, 0, 0);
    const expected =
      "data:image/gif;base64,R0lGODlhAQABAPAAAAAAAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    expect(result).toBe(expected);
  });
});
