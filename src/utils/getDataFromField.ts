const getDataFromField = (
  configField: TConfigField,
  line: TRecord,
  offset?: number
): TField => {
  const d = line[configField.position + (offset ?? 0) - 1];
  if (d.length === 0) {
    return configField.ifBlank;
  } else {
    return configField.translate ? configField.translate(d) : d;
  }
};

export default getDataFromField;
