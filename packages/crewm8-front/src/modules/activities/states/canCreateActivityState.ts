import { createState } from 'crewm8-ui/utilities';
export const canCreateActivityState = createState<boolean>({
  key: 'canCreateActivityState',
  defaultValue: false,
});
