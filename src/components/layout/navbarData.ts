// Navbar data - only non-translatable routes
// All text content (names) is in locale files under "Nav"

export interface NavigationLink {
  key: string; // Used to get translation key from locale files
  href: string; // Route path
}

export const navbarData = {
  navigationLinks: [
    { key: 'services', href: '/services' },
    { key: 'team', href: '/team' },
    { key: 'cases', href: '/cases' },
    { key: 'insights', href: '/insights' },
    { key: 'contact', href: '/contact' },
  ] as NavigationLink[]
};

