// AP Score Preprocessor
// Usage: node main <year> <input-file> <output-folder>
//  year is between 2018 and 2022

import { readFileSync } from "fs";
import getStudents from "./parsers/getStudents";
import getEthnicities from "./parsers/getEthnicities";
import spreadAcross from "./utils/spreadAcross";
import getScores from "./parsers/getScores";
import combineDataGroups from "./utils/combineDataGroups";
import getAwards from "./parsers/getAwards";
import prepForSave from "./utils/prepForSave";
import { config2022 } from "./config/config-2022";
import { config2021 } from "./config/config-2021";
import { config2020 } from "./config/config-2020";
import { config2019 } from "./config/config-2019";
import { config2018 } from "./config/config-2018";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Papa = require("papaparse");

// Parse command line parameters
const CONFIG_YEAR = 2;
const DATA_FILE = 3;
const OUTPUT_DIR = 4;
const DEFAULT_OUTPUT_PATH = "../../output";
const configFiles = {
  "2022": config2022,
  "2021": config2021,
  "2020": config2020,
  "2019": config2019,
  "2018": config2018,
};
const USAGE_HELP = "Usage: node main <year> <data-file> <output-folder>";

console.info("AP Score Preprocessor");
console.info(USAGE_HELP);

const configYear = process.argv[CONFIG_YEAR];
const dataFileName = process.argv[DATA_FILE];

if (!configYear || !dataFileName) {
  console.error("===> Missing year (2018-2022) and/or data file.");
  process.exit(0);
}

let csv, configFile;

// Load data file and configuration information
try {
  console.info("Reading the AP data file...");
  csv = readFileSync(dataFileName, "utf-8");
  console.info(
    "Reading the " + configYear + " score report configuration file..."
  );
  configFile = configFiles[configYear];
  if (!configFile) {
    throw "BadConfigData";
  }
} catch (err) {
  console.error("===> Unable to read this file");
  process.exit(0);
}

console.info("Parse the CSV / TSV data");
// Parse data file into string[][]
const papaParseCsv = Papa.parse(csv);
let parsedCsv = papaParseCsv.data as TDataSet;

// Drop field headers in the first line then
// process each line of data
parsedCsv = parsedCsv.slice(1);

// The import will mess up the last line if there's an extra \n at the end
// of the csv data.  Remove the last line if this happens
if (parsedCsv[parsedCsv.length - 1].length < 2) {
  parsedCsv = parsedCsv.slice(0, parsedCsv.length - 2);
}

// Process the data consistent with the field definitions
console.info("Processing students");
const students = getStudents(parsedCsv, configFile.fields);
console.info("Processing ethnicity group");
const ethnicityGroup = getEthnicities(
  configFile.ethnicityData,
  configYear,
  parsedCsv
);
const ethnicities = spreadAcross(students, ethnicityGroup);
console.info("Processing score group");
const scoreGroup = getScores(configFile.scoreData, parsedCsv);
const scores = spreadAcross(students, scoreGroup);
console.info("Processing score / ethnicity group");
const scoresEthnicitiesGroup = combineDataGroups([ethnicityGroup, scoreGroup]);
const scoresEthnicities = spreadAcross(students, scoresEthnicitiesGroup);
console.info("Processing awards group");
const awardsGroup = getAwards(configFile.awardData, parsedCsv);
const awards = spreadAcross(students, awardsGroup);

const outputPath = process.argv[OUTPUT_DIR] || DEFAULT_OUTPUT_PATH;

console.info("Save all data");
prepForSave(students, "Students", outputPath);
console.info(students.data.length + " student records created");
prepForSave(ethnicities, "Ethnicities", outputPath);
console.info(ethnicities.data.length + " ethnicities records created");
prepForSave(scores, "Scores", outputPath);
console.info(scores.data.length + " scores records created");
prepForSave(scoresEthnicities, "ScoresEthnicities", outputPath);
console.info(
  scoresEthnicities.data.length + " scores and ethnicities records created"
);
prepForSave(awards, "Awards", outputPath);
console.info(awards.data.length + " awards records created");
console.info("Processing completed");
process.exit(0);
