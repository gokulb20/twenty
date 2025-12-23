import { RecordTableComponentInstanceContext } from '@/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentState } from '@/ui/utilities/state/component-state/utils/createComponentState';
import { type Nullable } from 'crewm8-shared/types';

export const resizedFieldMetadataIdComponentState = createComponentState<
  Nullable<string>
>({
  key: 'resizedFieldMetadataIdComponentState',
  defaultValue: null,
  componentInstanceContext: RecordTableComponentInstanceContext,
});
