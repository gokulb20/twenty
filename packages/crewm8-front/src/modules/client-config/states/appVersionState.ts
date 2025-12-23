import { createState } from 'crewm8-ui/utilities';

export const appVersionState = createState<string | undefined>({
  key: 'appVersion',
  defaultValue: undefined,
});
