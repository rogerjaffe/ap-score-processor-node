import formatCBCode from "../../src/translators/formatCBCode";

describe("formatCBCode", () => {
  it("5-digit college code", () => {
    expect(formatCBCode("52867")).toBe("052867");
  });
  it("6-digit college code", () => {
    expect(formatCBCode("152867")).toBe("152867");
  });
});
