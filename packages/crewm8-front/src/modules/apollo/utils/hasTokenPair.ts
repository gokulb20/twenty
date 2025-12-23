import { getTokenPair } from '@/apollo/utils/getTokenPair';
import { isDefined } from 'crewm8-shared/utils';

export const hasTokenPair = () => {
  const tokenPair = getTokenPair();
  return isDefined(tokenPair);
};
