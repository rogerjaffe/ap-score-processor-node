import getDataGroup from "../../src/utils/getDataGroup";
import translateFromTable from "../../src/translators/translateFromTable";
import formatYear from "../../src/translators/formatYear";
import { translatorMaps } from "../../src/config/config-2022";

describe("getDataGroup", () => {
  const line =
    "441714Y8\tAbanto\tStacey\tJ\t857 Carefree Dr\t\tSan Diego\tCA\t921147085\t\t\t\tF\t20904\t\t\t7\t\t\t\t3\t21\t54629\t20\t54629\t\t\t\t\t\t\t\t\t\t\t\t\t54629\tOfarrell Community Charter Sch\t6130 Skyline Dr\t\tSan Diego\tCA\t92114\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t22\t57\t1\t\t\t\t22\t90\t1\t\t\t\t21\t7\t1\t\t\t\t21\t20\t1\t\t\t\t21\t36\t1\t\t\t\t20\t93\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t62922\t111122\t402192\tNNNNYNYNNNN\t2";
  const data = line.split("\t");
  const configDataGroup = {
    position: 59,
    count: 30,
    fields: [
      {
        position: 0,
        fieldName: "Admin Year",
        ifBlank: "",
        translate: formatYear,
      },
      {
        position: 1,
        fieldName: "Exam",
        ifBlank: "",
        translate: translateFromTable(translatorMaps.exam),
      },
      { position: 2, fieldName: "Exam Grade", ifBlank: "" },
      {
        position: 3,
        fieldName: "Irregularity code #1",
        ifBlank: "",
        translate: translateFromTable(translatorMaps.irregularityCodes),
      },
      {
        position: 4,
        fieldName: "Irregularity code #2",
        ifBlank: "",
        translate: translateFromTable(translatorMaps.irregularityCodes),
      },
      {
        position: 5,
        fieldName: "Class Section Code 01",
        ifBlank: "",
      },
    ],
  };
  const expected = {
    data: [
      ["2022", "US Government and Politics", "1", "", "", ""],
      ["2022", "Statistics", "1", "", "", ""],
      ["2021", "US History", "1", "", "", ""],
      ["2021", "Biology", "1", "", "", ""],
      ["2021", "English Language and Composition", "1", "", "", ""],
      ["2020", "World History: Modern", "2", "", "", ""],
    ],
    header: [
      "Admin Year",
      "Exam",
      "Exam Grade",
      "Irregularity code #1",
      "Irregularity code #2",
      "Class Section Code 01",
    ],
  };

  it("position 1 returns data", () => {
    expect(getDataGroup(configDataGroup, data)).toStrictEqual(expected);
  });
});
