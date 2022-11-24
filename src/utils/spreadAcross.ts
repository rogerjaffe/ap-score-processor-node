const spreadAcross = (
  students: TProcessed,
  spread: TProcessedSpread
): TProcessed => {
  const mergedData: TDataSet = [];

  for (let i = 0; i < students.data.length; i++) {
    const stu = students.data[i];
    const spr = spread.data[i];
    spr.forEach((sprRec) => {
      mergedData.push(stu.concat(sprRec));
    });
  }

  const mergedHeader = students.header.concat(spread.header);
  return { data: mergedData, header: mergedHeader };
};

export default spreadAcross;
