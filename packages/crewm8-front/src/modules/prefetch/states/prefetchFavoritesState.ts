import { type Favorite } from '@/favorites/types/Favorite';
import { createState } from 'crewm8-ui/utilities';

export const prefetchFavoritesState = createState<Favorite[]>({
  key: 'prefetchFavoritesState',
  defaultValue: [],
});
