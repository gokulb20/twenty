import {
  type FieldMetadataType,
  type CompositeProperty,
} from 'crewm8-shared/types';

export const computeCompositePropertyTarget = (
  type: FieldMetadataType,
  compositeProperty: CompositeProperty,
): string => {
  return `${type.toString()}->${compositeProperty.name}`;
};
