import { createState } from 'crewm8-ui/utilities';

export const qrCodeState = createState<string | null>({
  key: 'qrCodeState',
  defaultValue: null,
});
