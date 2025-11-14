export const contactData = {
  header: {
    title: "Get in touch with our team",
    description: [
      "Our team is highly dedicated to help you with your queries.",
      "Just drop an 'hi' through the form & our team will be in touch with you with-in same day."
    ]
  },
  trustedSection: {
    title: "Trusted by Leaders",
    description: "Join hundreds of companies that trust us for top-tier nearshore development solutions with speed, quality, and scalability."
  },
  trustedCompanies: [
    { name: 'Hourglass', icon: '/HourglassIcon.svg' },
    { name: 'Command+R', icon: '/deafultOrangeIcon.svg' },
    { name: 'Sisyphus', icon: '/SisyphusIcon.svg' },
    { name: 'Catalog', icon: '/CatalogIcon.svg' },
    { name: 'Layers', icon: '/LayersIcon.svg' },
    { name: 'Layers', icon: '/LayersIcon.svg' }
  ],
  form: {
    fields: [
      {
        id: 'fullName',
        name: 'fullName',
        label: 'Full name',
        type: 'text',
        placeholder: 'Full name',
        required: true
      },
      {
        id: 'profileLink',
        name: 'profileLink',
        label: 'Profile link (any social media)',
        type: 'url',
        placeholder: 'Example Instagram, Tik tok etc.',
        required: false
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        required: true
      },
      {
        id: 'phoneNumber',
        name: 'phoneNumber',
        label: 'Phone number (with country code)',
        type: 'tel',
        placeholder: '+1 (000) 000-0000',
        required: false
      },
      {
        id: 'query',
        name: 'query',
        label: 'Your Query',
        type: 'textarea',
        placeholder: 'Provide any details regarding your query...',
        required: true,
        rows: 4
      }
    ],
    privacyPolicy: {
      text: "By reaching out to us, you agree to our",
      linkText: "Privacy Policy",
      linkUrl: "#"
    },
    submitButton: {
      text: "Send message"
    }
  }
};
