import getDataFromField from "../../src/utils/getDataFromField";

describe("getDataFromField", () => {
  const configField1 = { position: 1, fieldName: "Field 1", ifBlank: "abc" };
  const configField2 = {
    position: 5,
    fieldName: "Field 5",
    ifBlank: "Unknown",
  };
  const configField3 = { position: 3, fieldName: "Field 5", ifBlank: "" };
  const configField4 = {
    position: 4,
    fieldName: "Field 5",
    ifBlank: "",
    translate: (code: string) => "20" + code,
  };
  const testDataNoBlank = [
    "441714Y8",
    "Abel",
    "Golf",
    "A",
    "857 K Dr",
    "San Diego	CA",
    "921147085",
  ];
  const testDataWithBlank = [
    "",
    "Abel",
    "Golf",
    "A",
    "857 K Dr",
    "San Diego	CA",
    "921147085",
  ];
  it("position 1 returns data", () => {
    expect(getDataFromField(configField1, testDataNoBlank)).toBe("441714Y8");
  });
  it("position 1 returns ifBlank in config", () => {
    expect(getDataFromField(configField1, testDataWithBlank)).toBe("abc");
  });
  it("position 5 returns data", () => {
    expect(getDataFromField(configField2, testDataNoBlank)).toBe("857 K Dr");
  });
  it("position 3 returns data", () => {
    expect(getDataFromField(configField3, testDataNoBlank)).toBe("Golf");
  });
  it("position translates two-digit year to four-digit year", () => {
    expect(getDataFromField(configField4, testDataNoBlank)).toBe("20A");
  });
  it("position 3, offset 2 returns data", () => {
    expect(getDataFromField(configField3, testDataNoBlank, 2)).toBe("857 K Dr");
  });
});
