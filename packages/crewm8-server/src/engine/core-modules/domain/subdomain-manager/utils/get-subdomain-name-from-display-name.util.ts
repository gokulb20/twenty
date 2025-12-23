import { isDefined } from 'crewm8-shared/utils';
export const getSubdomainNameFromDisplayName = (displayName?: string) => {
  if (!isDefined(displayName)) return;
  const displayNameWords = displayName.match(/(\w|\d)+/g);

  if (displayNameWords) {
    return displayNameWords.join('-').replace(/ /g, '').toLowerCase();
  }
};
