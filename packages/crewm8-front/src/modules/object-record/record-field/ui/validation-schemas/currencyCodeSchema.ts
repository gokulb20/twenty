import { z } from 'zod';

import { CurrencyCode } from 'crewm8-shared/constants';

export const currencyCodeSchema = z.enum(CurrencyCode);
