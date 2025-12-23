import { localStorageEffect } from '~/utils/recoil/localStorageEffect';
import { createState } from 'crewm8-ui/utilities';

export const lastVisitedObjectMetadataItemIdState = createState<string | null>({
  key: 'lastVisitedObjectMetadataItemIdState',
  defaultValue: null,
  effects: [localStorageEffect()],
});
