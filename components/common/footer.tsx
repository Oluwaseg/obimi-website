'use client';

import { IMAGES } from '@/constants';
import { ArrowRight, ExternalLink, Heart, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className='w-5 h-5' />,
  twitter: <FaTwitter className='w-5 h-5' />,
  linkedin: <FaLinkedin className='w-5 h-5' />,
  instagram: <FaInstagram className='w-5 h-5' />,
};

export function Footer() {
  const t = useTranslations('Navigation');
  const footerT = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('aboutUs'),
      links: [
        { label: t('mission'), href: '/about' },
        { label: t('ourTeam'), href: '/team' },
        { label: t('press'), href: '/press' },
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
  ];

  const socialLinks = [
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

  return (
    <footer className='bg-brand-deep text-white/60 relative overflow-hidden pt-24 pb-12'>
      {/* Decorative Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
        <div className='absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10'>
        {/* Bento-Inspired Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 mb-16'>
          {/* Large Brand Card */}
          <div className='md:col-span-7 lg:col-span-5 bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between space-y-12 backdrop-blur-md hover:bg-white/[0.07] transition-colors duration-500'>
            <div className='space-y-8'>
              <Image
                src={IMAGES.PRIMARY_LOGO}
                alt='Obimi'
                height={48}
                width={180}
                className='w-auto h-12 brightness-0 invert'
              />
              <h2 className='text-3xl md:text-4xl font-heading font-bold text-white leading-tight'>
                Empowering families <br />
                <span className='text-primary italic'>through every step.</span>
              </h2>
              <p className='text-lg leading-relaxed text-white/60 font-sans max-w-md'>
                {footerT('subText')}
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1'
                  title={social.label}
                >
                  {SOCIAL_ICON_MAP[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Bento Grid */}
          <div className='md:col-span-5 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {footerSections.map((section, idx) => (
              <div
                key={section.title}
                className={`p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between transition-all duration-500 hover:border-primary/30 group ${idx % 3 === 0 ? 'bg-primary/5' : 'bg-white/5'}`}
              >
                <div className='space-y-6'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-bold font-heading uppercase tracking-widest text-white/40'>
                      {section.title}
                    </h3>
                    <div className='w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <ArrowRight className='w-4 h-4 text-white/40 group-hover:text-primary transition-colors' />
                    </div>
                  </div>
                  <ul className='space-y-3'>
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className='text-lg text-white/70 hover:text-white transition-all duration-200 flex items-center gap-2'
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Contact Card in Bento */}
            <div className='sm:col-span-2 p-8 rounded-[2.5rem] bg-accent/5 border border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-accent/10 transition-all duration-500'>
              <div className='flex items-center gap-6'>
                <div className='w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center'>
                  <Mail className='w-8 h-8 text-accent' />
                </div>
                <div>
                  <p className='text-sm font-bold font-heading uppercase tracking-widest text-accent/60'>
                    Get in touch
                  </p>
                  <a
                    href='mailto:hello@obimi.org'
                    className='text-xl md:text-2xl font-heading font-bold text-white hover:text-accent transition-colors'
                  >
                    hello@obimi.org
                  </a>
                </div>
              </div>
              <button className='px-8 py-4 bg-accent text-accent-foreground rounded-full font-heading font-bold text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center gap-2'>
                <span>Contact Us</span>
                <ExternalLink className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className='pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-sans text-white/30'>
            <p>
              &copy; {currentYear} Obimi. {footerT('rights')}
            </p>
            <div className='flex items-center gap-2'>
              <span>Made with</span>
              <Heart className='w-4 h-4 text-primary fill-primary animate-pulse' />
              <span>for families</span>
            </div>
          </div>

          <div className='flex items-center gap-8 text-xs font-bold font-heading uppercase tracking-[0.2em] text-white/20'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-primary' />
              <span>Education</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-accent' />
              <span>Health</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-secondary' />
              <span>Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
