import { type CoreViewWithRelations } from '@/views/types/CoreViewWithRelations';
import { createState } from 'crewm8-ui/utilities';

export const coreViewsState = createState<CoreViewWithRelations[]>({
  key: 'coreViewsState',
  defaultValue: [],
});
