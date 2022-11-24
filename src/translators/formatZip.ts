const formatZip = (data: TField): TField => {
  if (!data) return "";
  return data.length > 5
    ? data.substring(0, 5) + "-" + data.substring(5)
    : data;
};

export default formatZip;
