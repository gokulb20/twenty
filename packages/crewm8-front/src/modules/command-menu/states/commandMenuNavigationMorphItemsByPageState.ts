import { type MorphItem } from '@/object-record/multiple-objects/types/MorphItem';
import { createState } from 'crewm8-ui/utilities';

export const commandMenuNavigationMorphItemsByPageState = createState<
  Map<string, MorphItem[]>
>({
  key: 'command-menu/commandMenuNavigationMorphItemsByPageState',
  defaultValue: new Map(),
});
