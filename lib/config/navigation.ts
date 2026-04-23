export interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    items: [
      { label: 'Mission', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Why Us', href: '/why-obimi' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Education', href: '/services/education' },
      { label: 'Health', href: '/services/health' },
      { label: 'Benefits', href: '/services/social-care' },
      { label: 'Wellness', href: '/services/community' },
      { label: 'Consulting', href: '/services/consultancy' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  {
    label: 'Community',
    items: [
      { label: 'Forums', href: '/community/forums' },
      { label: 'Events', href: '/community/events' },
      { label: 'Support', href: '/community/support-groups' },
    ],
  },
  {
    label: 'Knowledge',
    items: [
      { label: 'Articles', href: '/knowledge/articles' },
      { label: 'Resources', href: '/knowledge/resources' },
      { label: 'Guides', href: '/knowledge/guides' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Education Support', href: '/services/education' },
      { label: 'Health Navigation', href: '/services/health' },
      { label: 'Benefits Support', href: '/services/social-care' },
      { label: 'Wellness', href: '/services/community' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Forums', href: '/community/forums' },
      { label: 'Events', href: '/community/events' },
      { label: 'Support Groups', href: '/community/support-groups' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com/obimi', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com/obimi', icon: 'twitter' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/obimi',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/obimi',
    icon: 'instagram',
  },
];
