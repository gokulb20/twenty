import { type ApiConfig } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const apiConfigState = createState<ApiConfig | null>({
  key: 'apiConfigState',
  defaultValue: null,
});
