import getCharacterMap from "../../src/utils/getCharacterMap";

describe("getCharacterMap", () => {
  const cm1 = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "11",
  };
  const code = "YYNNYNYYNYN";
  it("position 1 returns character map data", () => {
    expect(getCharacterMap(cm1)(code)).toStrictEqual([
      "1",
      "2",
      "5",
      "7",
      "8",
      "10",
    ]);
  });
});
