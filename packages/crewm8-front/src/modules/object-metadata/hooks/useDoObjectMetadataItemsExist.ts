import { useRecoilValue } from 'recoil';

import { objectMetadataItemsBySingularNameSelector } from '@/object-metadata/states/objectMetadataItemsBySingularNameSelector';

import { isDefined } from 'crewm8-shared/utils';

export const useDoObjectMetadataItemsExist = (
  objectNameSingulars: string[],
) => {
  const objectMetadataItems = useRecoilValue(
    objectMetadataItemsBySingularNameSelector(objectNameSingulars),
  );

  return objectMetadataItems.every((objectMetadataItem) =>
    isDefined(objectMetadataItem),
  );
};
