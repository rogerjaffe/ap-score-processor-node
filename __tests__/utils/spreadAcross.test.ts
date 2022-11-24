import spreadAcross from "../../src/utils/spreadAcross";

describe("spreadAcross", () => {
  const processed: TProcessed = {
    data: [
      ["abc", "def", "ghi", "jkl"],
      ["123", "456", "789", "012"],
    ],
    header: ["f1", "f2", "f3", "f4"],
  };
  const spread: TProcessedSpread = {
    data: [
      [
        ["zzz", "yyy", "xxx"],
        ["sss", "rrr", "qqq"],
      ],
      [
        ["111", "222", "333"],
        ["666", "555", "444"],
      ],
    ],
    header: ["f5", "f6", "f7"],
  };
  const expected: TProcessed = {
    data: [
      ["abc", "def", "ghi", "jkl", "zzz", "yyy", "xxx"],
      ["abc", "def", "ghi", "jkl", "sss", "rrr", "qqq"],
      ["123", "456", "789", "012", "111", "222", "333"],
      ["123", "456", "789", "012", "666", "555", "444"],
    ],
    header: ["f1", "f2", "f3", "f4", "f5", "f6", "f7"],
  };
  it("spread with string", () => {
    expect(spreadAcross(processed, spread)).toStrictEqual(expected);
  });
});
