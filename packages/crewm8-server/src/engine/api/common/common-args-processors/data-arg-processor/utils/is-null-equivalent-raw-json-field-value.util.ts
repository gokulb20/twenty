import { isNull } from '@sniptt/guards';
import { isEmptyObject } from 'crewm8-shared/utils';

export const isNullEquivalentRawJsonFieldValue = (value: unknown): boolean => {
  if (isNull(value)) return true;

  return isEmptyObject(value);
};
