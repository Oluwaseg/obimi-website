'use client';

import { IMAGES } from '@/constants';
import { routing } from '@/i18n/routing';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Switch } from './switch';

export function Navbar() {
  const t = useTranslations('Navigation');
  const commonT = useTranslations('Common');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || routing.defaultLocale;

  const switchLocale = (newLocale: string) => {
    // Get the current path without locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const currentPath = '/' + (segments.slice(1).join('/') || '');

    // Build new path - always include locale to avoid redirect issues
    let newPath: string;
    if (currentPath === '/') {
      // On root path - always include locale explicitly
      newPath = `/${newLocale}`;
    } else {
      // On other pages
      newPath = `/${newLocale}${currentPath}`;
    }

    // Use window.location for reliable navigation
    window.location.href = newPath;
    setIsLangOpen(false);
  };

  const navItems = [
    { label: t('home'), href: '/' },
    {
      label: t('aboutUs'),
      items: [
        { label: t('about'), href: '/about' },
        { label: t('support'), href: '/support' },
        { label: t('mission'), href: '/mission' },
        { label: t('vision'), href: '/vision' },
        { label: t('ourTeam'), href: '/team' },
        { label: t('press'), href: '/press' },
      ],
    },
    { label: t('ourServices'), href: '/services' },
    {
      label: t('shop'),
      items: [
        { label: t('tShirts'), href: '/shop/t-shirts' },
        { label: t('toteBags'), href: '/shop/tote-bags' },
      ],
    },
    {
      label: t('getInvolved'),
      items: [
        { label: t('fundraising'), href: '/get-involved' },
        { label: t('donate'), href: '/donate' },
      ],
    },
    { label: t('contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-heading transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-2.5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0 flex items-center'>
            <div className='relative w-auto'>
              <Image
                src={isScrolled ? IMAGES.PRIMARY_LOGO : IMAGES.SECONDARY_LOGO}
                alt='Obimi'
                width={160}
                height={40}
                priority
                className={`w-auto max-h-48 transition-all duration-300 ${isScrolled ? 'h-14' : 'h-14'}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-0.5'>
            {navItems.map((item) => (
              <div key={item.label} className='relative group'>
                {item.items ? (
                  <>
                    <button className='px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center gap-1.5 group'>
                      {item.label}
                      <ChevronDown className='w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-200' />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <div className='absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2.5 z-50'>
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className='block px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150'
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className='px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 hover:text-purple-600 transition-colors duration-200'
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className='flex items-center gap-2 lg:gap-3'>
            {/* Donate Button */}
            <Link
              href='/donate'
              className='hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold uppercase tracking-wide rounded-full hover:shadow-md hover:scale-105 transition-all duration-200'
            >
              {commonT('donate')}
            </Link>

            {/* Divider */}
            <div className='hidden lg:block w-px h-5 bg-gray-200'></div>

            {/* Theme Toggle Icon */}
            <Switch />

            {/* Language Switcher */}
            <div className='relative'>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className='hidden lg:inline-flex p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                title='Change language'
              >
                <span className='text-xs font-semibold uppercase'>
                  {currentLocale}
                </span>
              </button>

              {isLangOpen && (
                <div className='absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50'>
                  {routing.locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLocale(locale)}
                      className={`w-full px-4 py-2 text-left text-xs font-medium hover:bg-purple-50 transition-colors ${
                        currentLocale === locale
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-700'
                      }`}
                    >
                      {locale === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className='lg:hidden inline-flex items-center justify-center p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200'
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className='lg:hidden border-t border-gray-200 mt-3 pt-3 pb-4 space-y-1.5'>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <div className='space-y-1'>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className='w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors'
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          expandedMobileItem === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedMobileItem === item.label && (
                      <div className='bg-gray-50 rounded-lg ml-4 mt-1 space-y-1'>
                        {item.items.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className='block px-4 py-2 text-xs font-medium text-gray-600 hover:text-purple-600 hover:bg-white rounded transition-colors'
                            onClick={() => {
                              setIsMobileOpen(false);
                              setExpandedMobileItem(null);
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className='block px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors'
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Action Buttons */}
            <div className='border-t border-gray-200 mt-4 pt-4 space-y-2'>
              <Link
                href='/donate'
                className='block px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:shadow-md transition-all'
                onClick={() => setIsMobileOpen(false)}
              >
                {commonT('donate')}
              </Link>
              <div className='flex gap-2'>
                <Switch />
                <button
                  onClick={() => {
                    const newLocale = currentLocale === 'en' ? 'de' : 'en';
                    switchLocale(newLocale);
                    setIsMobileOpen(false);
                  }}
                  className='flex-1 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <span className='w-4 h-4 flex items-center justify-center text-xs font-bold'>
                    {currentLocale.toUpperCase()}
                  </span>
                  {currentLocale === 'en' ? 'Deutsch' : 'English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
