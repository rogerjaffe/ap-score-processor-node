import getDataFromField from "../utils/getDataFromField";
import getCharacterMap from "../utils/getCharacterMap";
import { translatorMaps as tm2022 } from "../config/config-2022";
import { translatorMaps as tm2021 } from "../config/config-2021";
import { translatorMaps as tm2020 } from "../config/config-2020";
import { translatorMaps as tm2019 } from "../config/config-2019";
import { translatorMaps as tm2018 } from "../config/config-2018";

const translatorMaps = {
  "2022": tm2022,
  "2021": tm2021,
  "2020": tm2020,
  "2019": tm2019,
  "2018": tm2018,
};

const getEthnicities = (
  field: TConfigField,
  year: string,
  rawData: TDataSet
): TProcessedSpread => {
  const data: TDataSpread = rawData.map((line) => {
    const encodedEthnicities = getDataFromField(field, line);
    const characterMapTranslator = getCharacterMap(
      translatorMaps[year].raceEthnicity
    );
    const decodedEthnicities = characterMapTranslator(encodedEthnicities);
    return decodedEthnicities.map((eth) => [eth]);
  });
  return { data, header: ["Ethnicity"] };
};

export default getEthnicities;
