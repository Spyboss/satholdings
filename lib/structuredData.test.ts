import { describe, it, expect } from 'vitest';
import { createBreadcrumbSchema, organizationSchema, websiteSchema } from '@/lib/structuredData';
import { COMPANY } from '@/lib/constants';

describe('structuredData', () => {
  describe('organizationSchema', () => {
    it('should have correct organization details', () => {
      expect(organizationSchema['@type']).toBe('Corporation');
      expect(organizationSchema['@id']).toBe(`${COMPANY.domain}#organization`);
      expect(organizationSchema.name).toBe(COMPANY.name);
      expect(organizationSchema.url).toBe(COMPANY.domain);
    });

    it('should have correct contact point', () => {
      expect(organizationSchema.contactPoint[0]['@type']).toBe('ContactPoint');
      expect(organizationSchema.contactPoint[0].telephone).toBe(COMPANY.phone[0]);
    });
  });

  describe('websiteSchema', () => {
    it('should reference the organization as publisher', () => {
      expect(websiteSchema['@type']).toBe('WebSite');
      expect(websiteSchema.publisher['@id']).toBe(`${COMPANY.domain}#organization`);
    });
  });

  describe('createBreadcrumbSchema', () => {
    it('should create valid breadcrumb schema', () => {
      const items = [
        { name: 'Home', url: 'https://example.com' },
        { name: 'About', url: 'https://example.com/about' },
      ];

      const schema = createBreadcrumbSchema(items);

      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement).toHaveLength(2);
      
      expect(schema.itemListElement[0]).toEqual({
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://example.com',
      });

      expect(schema.itemListElement[1]).toEqual({
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://example.com/about',
      });
    });
  });
});
