import { type ObjectRecordGroupByDateGranularity } from 'crewm8-shared/types';

export type GroupByDefinition = {
  columnNameWithQuotes: string;
  expression: string;
  alias: string;
  dateGranularity?: ObjectRecordGroupByDateGranularity;
};
