// Contact data - only non-translatable metadata (images, URLs, structure)
// All text content is in locale files

export interface ContactFormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'textarea';
  required: boolean;
  rows?: number;
}

export interface TrustedCompany {
  name: string; // Used as key for alt text
  icon: string; // Image path
}

export const contactData = {
  // Trusted companies - only image paths
  trustedCompanies: [
    { name: 'Hourglass', icon: '/HourglassIcon.svg' },
    { name: 'Command+R', icon: '/deafultOrangeIcon.svg' },
    { name: 'Sisyphus', icon: '/SisyphusIcon.svg' },
    { name: 'Catalog', icon: '/CatalogIcon.svg' },
    { name: 'Layers', icon: '/LayersIcon.svg' },
    { name: 'Layers', icon: '/LayersIcon.svg' }
  ] as TrustedCompany[],
  
  // Form field structure - only metadata (no text)
  form: {
    fields: [
      {
        id: 'fullName',
        name: 'fullName',
        type: 'text' as const,
        required: true
      },
      {
        id: 'profileLink',
        name: 'profileLink',
        type: 'url' as const,
        required: false
      },
      {
        id: 'email',
        name: 'email',
        type: 'email' as const,
        required: true
      },
      {
        id: 'phoneNumber',
        name: 'phoneNumber',
        type: 'tel' as const,
        required: false
      },
      {
        id: 'query',
        name: 'query',
        type: 'textarea' as const,
        required: true,
        rows: 4
      }
    ] as ContactFormField[],
    privacyPolicy: {
      linkUrl: "#" // Only URL, text is in locale files
    }
  }
};
