import { createState } from 'crewm8-ui/utilities';

export const showHiddenGroupVariablesState = createState<boolean>({
  key: 'showHiddenGroupVariablesState',
  defaultValue: false,
});
