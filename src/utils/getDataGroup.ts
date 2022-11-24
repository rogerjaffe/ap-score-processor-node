import getDataFromField from "./getDataFromField";

const iterateOverFields =
  (data: TRecord, groupConfigData: TConfigDataGroup, it: number) =>
  (arr: TRecord, field: TConfigField) => {
    arr.push(
      getDataFromField(
        field,
        data,
        it * groupConfigData.fields.length + groupConfigData.position
      )
    );
    return arr;
  };

const getDataGroup = (
  groupConfigData: TConfigDataGroup,
  data: TRecord
): TProcessed => {
  let groupData = [];
  for (let it = 0; it < groupConfigData.count; it++) {
    const itemData = groupConfigData.fields.reduce(
      iterateOverFields(data, groupConfigData, it),
      []
    );
    groupData.push(itemData);
  }
  groupData = groupData.filter((rec) => {
    return rec.some((el) => el && el.length > 0);
  });
  const header = groupConfigData.fields.map(
    (field: TConfigField) => field.fieldName
  ) as TRecord;

  return { data: groupData, header };
};

export default getDataGroup;
