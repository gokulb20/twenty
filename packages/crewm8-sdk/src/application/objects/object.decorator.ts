import { type ObjectManifest } from 'crewm8-shared/application';

type ObjectMetadataOptions = Omit<ObjectManifest, 'fields'>;

export const Object = (_: ObjectMetadataOptions): ClassDecorator => {
  return () => {};
};
