import { type PublicDomain } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const selectedPublicDomainState = createState<PublicDomain | undefined>({
  key: 'selectedPublicDomainState',
  defaultValue: undefined,
});
