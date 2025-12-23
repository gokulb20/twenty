import { type SpreadsheetImportField } from '@/spreadsheet-import/types';
import { createState } from 'crewm8-ui/utilities';

export const suggestedFieldsByColumnHeaderState = createState({
  key: 'suggestedFieldsByColumnHeaderState',
  defaultValue: {} as Record<string, SpreadsheetImportField[]>,
});
