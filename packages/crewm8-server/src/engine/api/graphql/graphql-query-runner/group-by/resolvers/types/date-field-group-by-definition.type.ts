import { type ObjectRecordGroupByDateGranularity } from 'crewm8-shared/types';
import { type FirstDayOfTheWeek } from 'crewm8-shared/utils';

export type DateFieldGroupByDefinition = {
  granularity: ObjectRecordGroupByDateGranularity;
  weekStartDay?: FirstDayOfTheWeek;
  timeZone?: string;
};
