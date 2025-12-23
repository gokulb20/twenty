import { capitalize } from 'crewm8-shared/utils';

export const getMergeManyRecordsMutationResponseField = (
  objectNamePlural: string,
): string => {
  return `merge${capitalize(objectNamePlural)}`;
};
