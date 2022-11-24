import { format } from "date-fns";

const formatDob = (data: TField): TField => {
  if (!data) return "";
  const fixed = data.length === 5 ? "0" + data : data;
  const dobStr =
    fixed.substring(0, 2) +
    "/" +
    fixed.substring(2, 4) +
    "/" +
    fixed.substring(4);
  return format(new Date(dobStr), "M/d/yyyy");
};

export default formatDob;
