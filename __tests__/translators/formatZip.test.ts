import formatZip from "../../src/translators/formatZip";

describe("formatZip", () => {
  it("5-digit zip code", () => {
    expect(formatZip("92119")).toBe("92119");
  });
  it("9-digit zip code", () => {
    expect(formatZip("921191234")).toBe("92119-1234");
  });
  it("blank zip code", () => {
    expect(formatZip("")).toBe("");
  });
});
