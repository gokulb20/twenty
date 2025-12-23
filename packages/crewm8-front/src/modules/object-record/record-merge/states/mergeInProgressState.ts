import { createState } from 'crewm8-ui/utilities';

export const isMergeInProgressState = createState<boolean>({
  key: 'isMergeInProgress',
  defaultValue: false,
});
