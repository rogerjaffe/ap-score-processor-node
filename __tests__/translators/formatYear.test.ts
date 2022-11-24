import formatYear from "../../src/translators/formatYear";

describe("formatYear", () => {
  it("blank year", () => {
    expect(formatYear("")).toBe("");
  });
  it("2-digit year", () => {
    expect(formatYear("22")).toBe("2022");
  });
});
