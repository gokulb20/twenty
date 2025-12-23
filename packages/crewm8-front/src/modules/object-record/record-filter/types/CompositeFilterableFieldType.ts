import { type CompositeFieldType } from '@/settings/data-model/types/CompositeFieldType';
import { type FilterableFieldType } from 'crewm8-shared/types';

export type CompositeFilterableFieldType = FilterableFieldType &
  CompositeFieldType;
