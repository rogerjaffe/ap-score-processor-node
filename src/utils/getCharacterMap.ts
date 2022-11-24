export default (characterMap: TTranslatorMapItem): TTranslatorMapArrayFcn => {
  return (code: TField): TRecord => {
    let flags = code.split("");
    flags = flags.map((flag: string, idx: number) => {
      return flag === "Y" ? characterMap[idx + 1] : "";
    });
    flags = flags.filter((f) => f.length > 0);
    return flags;
  };
};
