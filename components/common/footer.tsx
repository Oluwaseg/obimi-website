'use client';

import { IMAGES } from '@/constants';
import { SOCIAL_LINKS } from '@/constants/socials';
import { Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className='w-5 h-5' />,
  instagram: <FaInstagram className='w-5 h-5' />,
  youtube: <FaYoutube className='w-5 h-5' />,
  tiktok: <FaTiktok className='w-5 h-5' />,
};

export function Footer() {
  const t = useTranslations('Navigation');
  const footerT = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('aboutUs'),
      links: [
        { label: t('support'), href: '/support' },
        { label: t('mission'), href: '/mission' },
        { label: t('ourTeam'), href: '/team' },
        { label: t('press'), href: '/press' },
        { label: t('faq'), href: '/faq' },
      ],
    },
    {
      title: t('ourServices'),
      links: [{ label: t('ourServices'), href: '/services' }],
    },
    {
      title: t('shop'),
      links: [{ label: t('shop'), href: '/shop' }],
    },
    {
      title: t('community'),
      links: [{ label: t('community'), href: '/community' }],
    },
    {
      title: t('knowledgeHub'),
      links: [{ label: t('knowledgeHub'), href: '/knowledge-hub' }],
    },
    {
      title: t('contact'),
      links: [{ label: t('contact'), href: '/contact' }],
    },
  ];

  return (
    <footer className='bg-brand-deep text-white/60 relative overflow-hidden pt-16 pb-8'>
      {/* Decorative Background Elements - Subtle */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
        <div className='absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]' />
        <div className='absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10'>
        {/* Main Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-12'>
          {/* Brand Section - Compact */}
          <div className='md:col-span-4 lg:col-span-3 space-y-6'>
            <div className='space-y-4'>
              <Image
                src={IMAGES.PRIMARY_LOGO}
                alt='Obimi'
                height={40}
                width={160}
                className='w-auto h-10 brightness-0 invert'
              />
              <p className='text-sm leading-relaxed text-white/60 font-sans'>
                {footerT('subText')}
              </p>
            </div>

            {/* Social Links */}
            <div className='flex gap-2'>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20'
                  title={social.label}
                >
                  {SOCIAL_ICON_MAP[social.icon] ?? null}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Compact Grid */}
          <div className='md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6'>
            {footerSections.map((section) => (
              <div key={section.title} className='space-y-3'>
                <h3 className='text-xs font-bold font-heading uppercase tracking-widest text-white/40 hover:text-primary transition-colors'>
                  {section.title}
                </h3>
                <ul className='space-y-2'>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='text-sm text-white/60 hover:text-white transition-colors duration-200'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8' />

        {/* Bottom Bar: Clean & Minimal */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40'>
          <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-6'>
            <p>
              &copy; {currentYear} Obimi. {footerT('rights')}
            </p>
            <div className='hidden sm:block w-px h-3 bg-white/10' />
            <div className='flex items-center gap-2'>
              <span>Made with</span>
              <Heart className='w-3 h-3 text-primary fill-primary animate-pulse' />
              <span>for families</span>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <Link
              href='/privacy'
              className='hover:text-primary transition-colors'
            >
              Privacy
            </Link>
            <div className='w-px h-3 bg-white/10' />
            <Link
              href='/terms'
              className='hover:text-primary transition-colors'
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
