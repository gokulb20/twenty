import { type ApprovedAccessDomain } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const approvedAccessDomainsState = createState<
  Omit<ApprovedAccessDomain, '__typename'>[]
>({
  key: 'ApprovedAccessDomainsState',
  defaultValue: [],
});
