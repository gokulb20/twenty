import { RATING_VALUES } from 'crewm8-shared/constants';
import { type FieldRatingValue } from 'crewm8-shared/types';

export const isFieldRatingValue = (
  fieldValue: unknown,
): fieldValue is FieldRatingValue =>
  RATING_VALUES.includes(fieldValue as NonNullable<FieldRatingValue>);
