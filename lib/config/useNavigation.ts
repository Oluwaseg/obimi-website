'use client';

import { useTranslations } from 'next-intl';
import { FooterSection, NavItem, SocialLink } from './types';

export function useNavItems(): NavItem[] {
  const t = useTranslations('Navigation');

  return [
    { label: t('home'), href: '/' },
    {
      label: t('about'),
      items: [
        { label: t('mission'), href: '/about' },
        { label: t('team'), href: '/team' },
        { label: t('whyUs'), href: '/why-obimi' },
      ],
    },
    {
      label: t('services'),
      items: [
        { label: t('education'), href: '/services/education' },
        { label: t('health'), href: '/services/health' },
        { label: t('benefits'), href: '/services/social-care' },
        { label: t('wellness'), href: '/services/community' },
        { label: t('consulting'), href: '/services/consultancy' },
      ],
    },
    { label: t('faq'), href: '/faq' },
    {
      label: t('community'),
      items: [
        { label: t('forums'), href: '/community/forums' },
        { label: t('events'), href: '/community/events' },
        { label: t('support'), href: '/community/support-groups' },
      ],
    },
    {
      label: t('knowledge'),
      items: [
        { label: t('articles'), href: '/knowledge/articles' },
        { label: t('resources'), href: '/knowledge/resources' },
        { label: t('guides'), href: '/knowledge/guides' },
      ],
    },
    { label: t('contact'), href: '/contact' },
  ];
}

export function useFooterSections(): FooterSection[] {
  const t = useTranslations('Navigation');
  const footerT = useTranslations('Footer');

  return [
    {
      title: footerT('quickLinks'),
      links: [
        { label: t('home'), href: '/' },
        { label: t('faq'), href: '/faq' },
        { label: t('contact'), href: '/contact' },
        { label: 'Sitemap', href: '/sitemap' },
      ],
    },
    {
      title: t('services'),
      links: [
        { label: 'Education Support', href: '/services/education' },
        { label: 'Health Navigation', href: '/services/health' },
        { label: 'Benefits Support', href: '/services/social-care' },
        { label: t('wellness'), href: '/services/community' },
      ],
    },
    {
      title: t('community'),
      links: [
        { label: t('forums'), href: '/community/forums' },
        { label: t('events'), href: '/community/events' },
        { label: t('support'), href: '/community/support-groups' },
        { label: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      title: footerT('legal'),
      links: [
        { label: footerT('privacy'), href: '/privacy' },
        { label: footerT('terms'), href: '/terms' },
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
