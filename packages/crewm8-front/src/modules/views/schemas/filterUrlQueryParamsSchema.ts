import { ViewFilterOperand } from 'crewm8-shared/types';
import { relationFilterValueSchemaObject } from 'crewm8-shared/utils';
import z from 'zod';
import { urlRecursiveFilterGroupSchema } from './urlRecursiveFilterGroupSchema';

export const filterUrlQueryParamsSchema = z.object({
  filter: z
    .record(
      z.string(),
      z.partialRecord(
        z.enum(ViewFilterOperand),
        z.string().or(z.array(z.string())).or(relationFilterValueSchemaObject),
      ),
    )
    .optional(),
  filterGroup: urlRecursiveFilterGroupSchema.optional(),
});
