'use client';

import { IMAGES } from '@/constants';
import { routing } from '@/i18n/routing';
import { ChevronDown, Globe, Heart, LayoutGrid, X } from 'lucide-react';
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

  const currentLocale = pathname.split('/')[1] || routing.defaultLocale;

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const currentPath = '/' + (segments.slice(1).join('/') || '');
    let newPath =
      currentPath === '/' ? `/${newLocale}` : `/${newLocale}${currentPath}`;
    window.location.href = newPath;
  };

  const navItems = [
    { label: t('home'), href: '/' },
    {
      label: t('aboutUs'),
      items: [
        { label: t('support'), href: '/support' },
        { label: t('mission'), href: '/mission' },
        { label: t('ourTeam'), href: '/team' },
        { label: t('press'), href: '/press' },
        { label: t('faq'), href: '/faq' },
      ],
    },
    { label: t('ourServices'), href: '/services' },
    { label: t('shop'), href: '/shop' },
    { label: t('community'), href: '/community' },
    { label: t('knowledgeHub'), href: '/knowledge-hub' },
    { label: t('contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <>
      {/* 
        RADICAL LAYOUT: Floating "Island" Navbar
        Instead of a full-width bar, this is a centered, rounded capsule that 
        adapts its size and appearance based on scroll state.
      */}
      <header className='fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none'>
        <nav
          className={`
            pointer-events-auto flex items-center justify-between
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${
              isScrolled
                ? 'w-full max-w-6xl bg-white/50 backdrop-blur-xl rounded-full px-6 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20'
                : 'w-full max-w-7xl bg-transparent px-4 py-4'
            }
          `}
        >
          {/* Left: Logo Area */}
          <div className='flex items-center gap-8'>
            <Link href='/' className='relative group shrink-0'>
              <div className='absolute -inset-2 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <Image
                src={isScrolled ? IMAGES.PRIMARY_LOGO : IMAGES.SECONDARY_LOGO}
                alt='Obimi'
                width={140}
                height={35}
                priority
                className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'}`}
              />
            </Link>

            {/* Desktop Links */}
            <div className='hidden lg:flex items-center gap-1'>
              {navItems.map((item) => (
                <div key={item.label} className='relative group'>
                  {item.items ? (
                    <div className='relative'>
                      <button className='flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-primary/5'>
                        {item.label}
                        <ChevronDown className='w-3 h-3 transition-transform group-hover:rotate-180' />
                      </button>
                      {/* Mega-style Dropdown */}
                      <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 origin-top-left scale-95 group-hover:scale-100'>
                        <div className='grid gap-1'>
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className='flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all'
                            >
                              {sub.label}
                              <div className='w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100' />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-primary/5'
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className='flex items-center gap-2'>
            {/* Language - Minimalist Circle */}
            <div className='relative hidden lg:block'>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all text-xs font-bold uppercase'
              >
                <Globe className='w-4 h-4' />
              </button>
              {isLangOpen && (
                <div className='absolute right-0 mt-3 w-32 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200'>
                  {routing.locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLocale(locale)}
                      className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-primary/5 ${currentLocale === locale ? 'text-primary' : 'text-gray-600'}`}
                    >
                      {locale.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className='hidden sm:block'>
              <Switch />
            </div>

            {/* The "Hero" Action - Floating Button */}
            <Link
              href='https://www.paypal.com/ncp/payment/MQG6ZVX59QCSY'
              className={`
                flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-500
                ${
                  isScrolled
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:scale-105 active:scale-95'
                    : 'bg-white text-primary shadow-xl shadow-black/5 hover:bg-primary hover:text-white'
                }
              `}
            >
              <Heart className='w-4 h-4 fill-current' />
              <span>{commonT('donate')}</span>
            </Link>

            {/* Mobile Trigger - Modern Burger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className='lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-primary hover:text-white transition-all'
            >
              {isMobileOpen ? <X size={20} /> : <LayoutGrid size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* 
        FULL SCREEN MOBILE OVERLAY 
        Instead of a dropdown, this is a cinematic full-screen menu
      */}
      <div
        className={`
          fixed inset-0 z-[60] bg-background transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className='h-full flex flex-col p-8'>
          <div className='flex justify-between items-center'>
            <Image
              src={IMAGES.PRIMARY_LOGO}
              alt='Logo'
              width={120}
              height={30}
            />
            <button
              onClick={() => setIsMobileOpen(false)}
              className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-900'
            >
              <X size={24} />
            </button>
          </div>

          <div className='flex-1 flex flex-col justify-center space-y-6'>
            {navItems.map((item, idx) => (
              <div key={item.label} className='overflow-hidden'>
                <div
                  className='transition-all duration-700 delay-[100ms]'
                  style={{
                    transform: isMobileOpen
                      ? 'translateY(0)'
                      : 'translateY(100%)',
                  }}
                >
                  {item.items ? (
                    <div className='space-y-4'>
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className='text-4xl font-bold hover:text-primary flex items-center gap-4'
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-8 h-8 transition-transform ${expandedMobileItem === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedMobileItem === item.label && (
                        <div className='grid grid-cols-2 gap-4 pl-4'>
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className='text-lg font-medium hover:text-primary'
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className='text-4xl font-bold hover:text-primary'
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='pt-8 border-t border-gray-100 flex items-center justify-between'>
            <div className='flex gap-4'>
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLocale(locale)}
                  className={`text-sm font-bold ${currentLocale === locale ? 'text-primary' : 'text-gray-400'}`}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
}
