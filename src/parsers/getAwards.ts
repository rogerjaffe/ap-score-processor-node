import getDataFromField from "../utils/getDataFromField";

const getAwards = (
  configFields: TConfigDataGroup,
  rawData: TDataSet
): TProcessedSpread => {
  const data: TDataSpread = rawData.map((line) => {
    let scoreData = [];
    for (let i = 0; i < configFields.count; i++) {
      const scores: TRecord = configFields.fields.map((field) => {
        return getDataFromField(
          field,
          line,
          configFields.position + i * configFields.fields.length
        );
      });
      scoreData.push(scores);
    }
    scoreData = scoreData.filter((arr) => arr.join("").length > 0);
    return scoreData;
  });
  return { data, header: configFields.fields.map((field) => field.fieldName) };
};

export default getAwards;
