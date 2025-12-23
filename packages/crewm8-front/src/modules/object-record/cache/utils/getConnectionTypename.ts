import { getObjectTypename } from '@/object-record/cache/utils/getObjectTypename';
import { capitalize } from 'crewm8-shared/utils';

export const getConnectionTypename = (objectNameSingular: string) => {
  return `${capitalize(getObjectTypename(objectNameSingular))}Connection`;
};
