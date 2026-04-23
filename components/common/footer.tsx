'use client';

import { IMAGES } from '@/constants';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '@/lib/config/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-brand-deep text-muted-foreground border-t border-border'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-1 space-y-4'>
            <Image
              src={IMAGES.PRIMARY_LOGO}
              alt='Obimi'
              height={40}
              width={160}
              className='w-auto h-auto'
            />
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Empowering parents and caregivers through expert guidance,
              community support, and practical resources.
            </p>
            <div className='space-y-2 pt-4'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Mail className='w-4 h-4 flex-shrink-0' />
                <a
                  href='mailto:hello@obimi.org'
                  className='hover:text-primary transition-colors'
                >
                  hello@obimi.org
                </a>
              </div>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Phone className='w-4 h-4 flex-shrink-0' />
                <a
                  href='tel:+441234567890'
                  className='hover:text-primary transition-colors'
                >
                  +44 (0) 123 456 7890
                </a>
              </div>
              <div className='flex items-start gap-2 text-sm text-muted-foreground'>
                <MapPin className='w-4 h-4 flex-shrink-0 mt-0.5' />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h3 className='text-sm font-semibold text-foreground uppercase tracking-wide'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='border-t border-border my-8'></div>

        {/* Bottom Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          {/* Copyright */}
          <div className='text-sm text-muted-foreground'>
            <p>
              &copy; {currentYear} Obimi. All rights reserved. | Made with{' '}
              <span className='text-primary'>♥</span> for families
            </p>
          </div>

          {/* Social Links */}
          <div className='flex items-center justify-start md:justify-end gap-4'>
            <span className='text-xs text-muted-foreground uppercase tracking-wide'>
              Follow Us
            </span>
            <div className='flex gap-3'>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200'
                  title={social.label}
                >
                  {SOCIAL_ICON_MAP[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
