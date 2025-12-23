import { type AuthProviders } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const authProvidersState = createState<AuthProviders>({
  key: 'authProvidersState',
  defaultValue: {
    google: true,
    magicLink: false,
    password: true,
    microsoft: false,
    sso: [],
  },
});
