import { type AllMetadataName } from 'crewm8-shared/metadata';

import { type MetadataWorkspaceMigrationActionsRecord } from 'src/engine/metadata-modules/flat-entity/types/metadata-workspace-migration-action.type';

export const getMetadataEmptyWorkspaceMigrationActionRecord = <
  T extends AllMetadataName,
>(
  _metadataName: T,
) =>
  ({
    created: [],
    deleted: [],
    updated: [],
  }) as MetadataWorkspaceMigrationActionsRecord<T>;
