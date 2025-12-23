import { createState } from 'crewm8-ui/utilities';
export const shouldAppBeLoadingState = createState<boolean>({
  key: 'shouldAppBeLoadingState',
  defaultValue: false,
});
