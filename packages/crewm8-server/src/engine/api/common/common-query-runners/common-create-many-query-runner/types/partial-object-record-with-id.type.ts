import { type ObjectRecord } from 'crewm8-shared/types';

export type PartialObjectRecordWithId = Partial<ObjectRecord> & { id: string };
