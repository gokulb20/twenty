import { type ObjectRecord } from 'crewm8-shared/types';

export const mockPersonRecords: Partial<ObjectRecord>[] = [
  {
    name: {
      firstName: 'Testfirst',
      lastName: 'Testlast',
    },
    emails: {
      primaryEmail: 'test@test.fr',
      additionalEmails: [],
    },
    linkedinLink: {
      primaryLinkLabel: '',
      primaryLinkUrl: '',
      secondaryLinks: [],
    },
    jobTitle: 'Test job',
  },
];
