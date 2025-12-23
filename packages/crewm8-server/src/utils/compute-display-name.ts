import { isDefined } from 'crewm8-shared/utils';
import { type FullNameMetadata } from 'crewm8-shared/types';

export const computeDisplayName = (
  name: FullNameMetadata | null | undefined,
) => {
  if (!name) {
    return '';
  }

  return Object.values(name).filter(isDefined).join(' ');
};
