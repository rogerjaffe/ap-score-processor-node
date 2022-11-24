import getDataFromField from "../utils/getDataFromField";

const getStudents = (
  rawData: TDataSet,
  configFields: TConfigFields
): TProcessed => {
  const data = rawData.map((line: TRecord) => {
    return configFields.map((configField: TConfigField) => {
      return getDataFromField(configField, line);
    });
  });
  const header = configFields.map((configField: TConfigField) => {
    return configField.fieldName;
  });
  return { data, header };
};

export default getStudents;
