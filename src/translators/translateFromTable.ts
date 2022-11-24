const translateFromTable = (
  translatorMap: TTranslatorMapItem
): TTranslatorMapFcn => {
  return (code: string): string => {
    return translatorMap[code]
      ? translatorMap[code].replace(/,/g, "")
      : "Unknown";
  };
};

export default translateFromTable;
