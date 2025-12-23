import { isDefined } from 'crewm8-shared/utils';
import { type Nullable } from 'crewm8-ui/utilities';

// TODO: we should create a custom eslint rule that enforces the use of this function
// instead of using the `===` operator where a and b are | undefined | null
export const compareStrictlyExceptForNullAndUndefined = <A, B>(
  valueA: Nullable<A>,
  valueB: Nullable<B>,
) => {
  if (!isDefined(valueA) && !isDefined(valueB)) {
    return true;
  }

  return valueA === valueB;
};
