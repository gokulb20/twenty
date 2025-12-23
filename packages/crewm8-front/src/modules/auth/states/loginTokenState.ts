import { createState } from 'crewm8-ui/utilities';
import { type AuthToken } from '~/generated/graphql';

export const loginTokenState = createState<AuthToken['token'] | null>({
  key: 'loginTokenState',
  defaultValue: null,
});
