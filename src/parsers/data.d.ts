// Basic data structures
type TField = string; // Data field
type TRecord = TField[]; // Data record of fields
type TDataSet = TRecord[]; // Many data records

// Spread data structures
type TSpread = TRecord[];
type TDataSpread = TSpread[];

// Data group like Ethnicity values for a student
type TProcessedSpread = { data: TDataSpread; header: TRecord };

// Processed data will contain the data and a header
type TProcessed = { data: TDataSet; header: TRecord };

// Return value to App
type TPackage = {
  students: TProcessed;
  ethnicities: TProcessed;
  scores: TProcessed;
  scoresEthnicities: TProcessed;
  awards: TProcessed;
};
