import { type AppPath } from 'crewm8-shared/types';

export const buildAppPathWithQueryParams = (
  path: AppPath,
  queryParams: Record<string, string>,
) => {
  const searchParams = [];
  for (const [key, value] of Object.entries(queryParams)) {
    searchParams.push(`${key}=${value}`);
  }
  return `${path}?${searchParams.join('&')}`;
};
