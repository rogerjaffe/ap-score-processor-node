const permute = function (
  finalData: TDataSet,
  spreads: TSpread[],
  localIdx: number,
  temp: TRecord
) {
  if (localIdx === spreads.length) {
    finalData.push(temp);
  } else {
    const arr = spreads[localIdx];
    for (let i = 0; i < arr.length; i++) {
      let _temp = JSON.parse(JSON.stringify(temp));
      _temp = _temp.concat(arr[i]);
      permute(finalData, spreads, localIdx + 1, _temp);
    }
  }
};

const combineDataGroups = function (
  spreadData: TProcessedSpread[]
): TProcessedSpread {
  const header = spreadData.reduce((arr: TRecord, spread) => {
    arr = arr.concat(spread.header);
    return arr;
  }, []);
  let buffer: TDataSet = [];
  const finalData: TDataSpread = [];
  for (let stuIdx = 0; stuIdx < spreadData[0].data.length; stuIdx++) {
    const spreads = spreadData.map((arr) => {
      return arr.data[stuIdx];
    });
    const temp: TRecord = [];
    permute(buffer, spreads, 0, temp);
    finalData.push(buffer);
    buffer = [];
  }
  return {
    header: header,
    data: finalData,
  };
};

export default combineDataGroups;
