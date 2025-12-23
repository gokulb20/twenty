import { createState } from 'crewm8-ui/utilities';
export const currentPageLocationState = createState<string>({
  key: 'currentPageLocationState',
  defaultValue: '',
});
