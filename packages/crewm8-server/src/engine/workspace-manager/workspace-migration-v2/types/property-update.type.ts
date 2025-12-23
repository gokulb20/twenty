import { type FromTo } from 'crewm8-shared/types';

export type PropertyUpdate<T, P extends keyof T> = {
  property: P;
} & FromTo<T[P]>;
