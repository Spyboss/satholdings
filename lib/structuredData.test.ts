import { describe, it, expect } from 'vitest';
import { createBreadcrumbSchema, organizationSchema } from '@/lib/structuredData';
import { COMPANY } from '@/lib/constants';

describe('structuredData', () => {
  describe('organizationSchema', () => {
    it('should have correct organization details', () => {
      expect(organizationSchema['@type']).toBe('Organization');
      expect(organizationSchema.name).toBe(COMPANY.name);
      expect(organizationSchema.url).toBe(COMPANY.domain);
    });

    it('should have correct contact point', () => {
      expect(organizationSchema.contactPoint['@type']).toBe('ContactPoint');
      expect(organizationSchema.contactPoint.telephone).toBe(COMPANY.phone[0]);
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
