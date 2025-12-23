import { type Decorator } from '@storybook/react';
import { IconsProvider } from 'crewm8-ui/display';

export const IconsProviderDecorator: Decorator = (Story) => {
  return (
    <IconsProvider>
      <Story />
    </IconsProvider>
  );
};
