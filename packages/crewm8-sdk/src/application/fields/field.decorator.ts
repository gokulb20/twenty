import { type FieldMetadataType } from 'crewm8-shared/types';
import { type FieldManifest } from 'crewm8-shared/application';

export const Field = <T extends FieldMetadataType>(
  _: FieldManifest<T>,
): PropertyDecorator => {
  return () => {};
};
