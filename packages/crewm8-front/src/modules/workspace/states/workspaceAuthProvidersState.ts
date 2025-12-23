import { type AuthProviders } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const workspaceAuthProvidersState = createState<AuthProviders | null>({
  key: 'workspaceAuthProvidersState',
  defaultValue: null,
});
