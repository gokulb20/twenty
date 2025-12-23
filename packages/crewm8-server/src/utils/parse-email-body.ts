import { type JSONContent } from 'crewm8-emails';

export const parseEmailBody = (body: string): JSONContent | string => {
  try {
    const json = JSON.parse(body);

    return json;
  } catch {
    return body;
  }
};
