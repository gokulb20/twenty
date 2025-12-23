import { type Billing } from '~/generated/graphql';
import { createState } from 'crewm8-ui/utilities';

export const billingState = createState<Billing | null>({
  key: 'billingState',
  defaultValue: null,
});
