import { createState } from 'crewm8-ui/utilities';

export const forceRegisteredActionsByKeyState = createState<
  Record<string, boolean | undefined>
>({
  key: 'forceRegisteredActionsByKeyComponentState',
  defaultValue: {},
});
