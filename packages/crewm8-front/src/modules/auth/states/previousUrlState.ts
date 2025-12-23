import { createState } from 'crewm8-ui/utilities';
export const previousUrlState = createState<string>({
  key: 'previousUrlState',
  defaultValue: '',
});
