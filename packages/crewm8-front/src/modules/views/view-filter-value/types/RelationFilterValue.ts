import { type jsonRelationFilterValueSchema } from 'crewm8-shared/utils';
import { type z } from 'zod';

export type RelationFilterValue = z.infer<typeof jsonRelationFilterValueSchema>;
