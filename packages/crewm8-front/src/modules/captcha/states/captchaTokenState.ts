import { createState } from 'crewm8-ui/utilities';
export const captchaTokenState = createState<string | undefined>({
  key: 'captchaTokenState',
  defaultValue: undefined,
});
