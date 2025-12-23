import { createState } from 'crewm8-ui/utilities';

export const shouldNavigateBackToMemorizedUrlOnSaveState = createState<boolean>(
  {
    key: 'shouldNavigateBackToMemorizedUrlOnSaveState',
    defaultValue: false,
  },
);
