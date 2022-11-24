type TConfigDataGroup = {
  position: number;
  count: number;
  fields: TConfigField[];
};

type TConfigField = {
  position: number;
  fieldName: string;
  ifBlank: string;
  translate?: TTranslatorMapFcn;

};
type TConfigFields = TConfigField[];

interface TConfig {
  awardData: TConfigDataGroup;
  scoreData: TConfigDataGroup;
  ethnicityData: TConfigField;
  fields: TConfigFields;
}
