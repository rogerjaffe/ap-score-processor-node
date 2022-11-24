import formatDob from "../../src/translators/formatDob";

describe("formatDob", () => {
  it("good date 1", () => {
    expect(formatDob("110399")).toBe("11/3/1999");
  });
  it("good date 2", () => {
    expect(formatDob("081301")).toBe("8/13/2001");
  });
  it("good date 3", () => {
    expect(formatDob("080301")).toBe("8/3/2001");
  });
  it("good date 3 - 5-digit", () => {
    expect(formatDob("80301")).toBe("8/3/2001");
  });
  it("bland date", () => {
    expect(formatDob("")).toBe("");
  });
});
