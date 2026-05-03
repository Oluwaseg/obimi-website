'use client';

import { FooterSection, NavItem, SocialLink } from './types';

export function useNavItems(): NavItem[] {
  return [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      items: [
        { label: 'Mission', href: '/mission' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Why Obimi', href: '/mission' },
      ],
    },
    {
      label: 'Services',
      items: [
        { label: 'Education Support', href: '/services' },
        { label: 'Health Navigation', href: '/services' },
        { label: 'Social Care & Benefits', href: '/services' },
        { label: 'Community & Wellbeing', href: '/services' },
        { label: 'Consultancy', href: '/services' },
      ],
    },
    { label: 'FAQ', href: '/faq' },
    {
      label: 'Community',
      items: [
        { label: 'Forums', href: '/community' },
        { label: 'Events', href: '/events' },
        { label: 'Support Groups', href: '/community' },
      ],
    },
    {
      label: 'Knowledge Hub',
      items: [
        { label: 'Articles', href: '/knowledge-hub' },
        { label: 'Resources', href: '/knowledge-hub' },
        { label: 'Guides', href: '/knowledge-hub' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];
}

export function useFooterSections(): FooterSection[] {
  return [
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
        { label: 'Education Support', href: '/services' },
        { label: 'Health Navigation', href: '/services' },
        { label: 'Social Care & Benefits', href: '/services' },
        { label: 'Community & Wellbeing', href: '/services' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Forums', href: '/community' },
        { label: 'Events', href: '/events' },
        { label: 'Support Groups', href: '/community' },
        { label: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];
}

export function useSocialLinks(): SocialLink[] {
  return [
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
}
