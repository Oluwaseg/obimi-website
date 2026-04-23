'use client';

import { IMAGES } from '@/constants';
import { NAV_ITEMS } from '@/lib/config/navigation';
import { ChevronDown, Globe, Menu, Moon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-2.5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0 flex items-center'>
            <div className='relative w-auto'>
              <Image
                src={isScrolled ? IMAGES.PRIMARY_LOGO : IMAGES.SECONDARY_LOGO}
                alt='Obimi'
                height={isScrolled ? 32 : 40}
                width={isScrolled ? 64 : 160}
                priority
                className='w-auto h-auto transition-all duration-300'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-0.5'>
            {NAV_ITEMS.map((item) => (
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
              Donate
            </Link>

            {/* Divider */}
            <div className='hidden lg:block w-px h-5 bg-gray-200'></div>

            {/* Theme Toggle Icon */}
            <button
              className='hidden lg:inline-flex p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200'
              title='Toggle dark mode'
            >
              <Moon className='w-4 h-4' />
            </button>

            {/* Translation Icon */}
            <button
              className='hidden lg:inline-flex p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200'
              title='Change language'
            >
              <Globe className='w-4 h-4' />
            </button>

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
            {NAV_ITEMS.map((item) => (
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
                Donate
              </Link>
              <div className='flex gap-2'>
                <button className='flex-1 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2'>
                  <Moon className='w-4 h-4' />
                  Dark
                </button>
                <button className='flex-1 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2'>
                  <Globe className='w-4 h-4' />
                  Language
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
