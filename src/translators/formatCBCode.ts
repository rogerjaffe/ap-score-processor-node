const formatCBCode = (code: TField): TField =>
  code.length < 6 ? "0" + code : code;

export default formatCBCode;
