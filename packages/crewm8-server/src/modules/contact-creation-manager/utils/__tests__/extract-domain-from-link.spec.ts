import { extractDomainFromLink } from 'src/modules/contact-creation-manager/utils/extract-domain-from-link.util';

describe('extractDomainFromLink', () => {
  it('should extract domain from link', () => {
    const link = 'https://www.crewm8.com';
    const result = extractDomainFromLink(link);

    expect(result).toBe('crewm8.com');
  });

  it('should extract domain from link without www', () => {
    const link = 'https://crewm8.com';
    const result = extractDomainFromLink(link);

    expect(result).toBe('crewm8.com');
  });

  it('should extract domain from link without protocol', () => {
    const link = 'crewm8.com';
    const result = extractDomainFromLink(link);

    expect(result).toBe('crewm8.com');
  });

  it('should extract domain from link with path', () => {
    const link = 'https://crewm8.com/about';
    const result = extractDomainFromLink(link);

    expect(result).toBe('crewm8.com');
  });
});
