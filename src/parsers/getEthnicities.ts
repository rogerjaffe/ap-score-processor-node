import getDataFromField from "../utils/getDataFromField";
import getCharacterMap from "../utils/getCharacterMap";
import { translatorMaps } from "../config/config-2022";

const getEthnicities = (
  field: TConfigField,
  rawData: TDataSet
): TProcessedSpread => {
  const data: TDataSpread = rawData.map((line) => {
    const encodedEthnicities = getDataFromField(field, line);
    const characterMapTranslator = getCharacterMap(
      translatorMaps.raceEthnicity
    );
    const decodedEthnicities = characterMapTranslator(encodedEthnicities);
    return decodedEthnicities.map((eth) => [eth]);
  });
  return { data, header: ["Ethnicity"] };
};

export default getEthnicities;
