type TTranslatorMapItem = { [key: string]: TField };
type TTranslatorMapFcn = (code: TField) => TField;
type TTranslatorMapArrayFcn = (code: TField) => TRecord;
