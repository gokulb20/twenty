import { type CommandMenuPages } from '@/command-menu/types/CommandMenuPages';
import { type IconComponent } from 'crewm8-ui/display';
import { createState } from 'crewm8-ui/utilities';

export type CommandMenuNavigationStackItem = {
  page: CommandMenuPages;
  pageTitle: string;
  pageIcon: IconComponent;
  pageIconColor?: string;
  pageId: string;
};

export const commandMenuNavigationStackState = createState<
  CommandMenuNavigationStackItem[]
>({
  key: 'command-menu/commandMenuNavigationStackState',
  defaultValue: [],
});
