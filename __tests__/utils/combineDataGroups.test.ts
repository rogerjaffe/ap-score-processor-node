import combineDataGroups from "../../src/utils/combineDataGroups";

describe("combineDataGroups", () => {
  const g1: TProcessedSpread = {
    data: [
      [
        ["g1", "g2"],
        ["g3", "g4"],
      ],
      [
        ["g5", "g6"],
        ["g7", "g8"],
      ],
    ],
    header: ["head1a", "head2a"],
  };
  const g2: TProcessedSpread = {
    data: [
      [
        ["111", "222", "333"],
        ["444", "555", "666"],
      ],
      [
        ["aaa", "bbb", "ccc"],
        ["ddd", "eee", "fff"],
      ],
    ],
    header: ["head1b", "head2b", "head3b"],
  };
  const expected = {
    data: [
      [
        ["g1", "g2", "111", "222", "333"],
        ["g1", "g2", "444", "555", "666"],
        ["g3", "g4", "111", "222", "333"],
        ["g3", "g4", "444", "555", "666"],
      ],
      [
        ["g5", "g6", "aaa", "bbb", "ccc"],
        ["g5", "g6", "ddd", "eee", "fff"],
        ["g7", "g8", "aaa", "bbb", "ccc"],
        ["g7", "g8", "ddd", "eee", "fff"],
      ],
    ],
    header: ["head1a", "head2a", "head1b", "head2b", "head3b"],
  };
  it("combine these groups for two students", () => {
    expect(combineDataGroups([g1, g2])).toStrictEqual(expected);
  });
});
