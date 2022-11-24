import translateFromTable from "../../src/translators/translateFromTable";
import { translatorMaps } from "../../src/config/config-2022";

describe("translateFromTable - local test maps", () => {
  const translatorMap = {
    "01": "AP Scholar",
    "02": "AP Scholar with Honor",
    "03": "AP Scholar with Distinction",
    "04": "State AP Scholar",
    "05": "National AP Scholar",
    "06": "National AP Scholar (Canada)",
    "07": "AP International Diploma",
    "08": "DoDEA AP Scholar",
    "09": "International AP Scholar",
    "12": "National AP Scholar (Bermuda)",
    "13": "AP Capstone Diploma",
    "14": "AP Seminar and Research Certificate",
  };
  it("code 01", () => {
    expect(translateFromTable(translatorMap)("01")).toBe("AP Scholar");
  });
  it("unknown code", () => {
    expect(translateFromTable(translatorMap)("99")).toBe("Unknown");
  });
});

describe("translateFromTable - live translator maps", () => {
  const translatorMap = translatorMaps.awards;
  it("code 01", () => {
    expect(translateFromTable(translatorMap)("01")).toBe("AP Scholar");
  });
  it("unknown code", () => {
    expect(translateFromTable(translatorMap)("99")).toBe("Unknown");
  });
});
