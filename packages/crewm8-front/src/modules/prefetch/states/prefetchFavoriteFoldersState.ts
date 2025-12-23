import { type FavoriteFolder } from '@/favorites/types/FavoriteFolder';
import { createState } from 'crewm8-ui/utilities';

export const prefetchFavoriteFoldersState = createState<FavoriteFolder[]>({
  key: 'prefetchFavoriteFoldersState',
  defaultValue: [],
});
