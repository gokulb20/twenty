import { type Sentry } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const sentryConfigState = createState<Sentry | null>({
  key: 'sentryConfigState',
  defaultValue: null,
});
