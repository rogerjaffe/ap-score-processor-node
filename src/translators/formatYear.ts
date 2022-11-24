const formatYear = (code: TField): TField =>
  code.length > 0 ? "20" + code : "";

export default formatYear;
