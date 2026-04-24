'use client';

import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Database,
  Eye,
  Lock,
  Mail,
  Share2,
  Shield,
  UserCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicyPage');

  const sections = [
    {
      id: 'who-we-are',
      title: t('section1Title'),
      icon: <UserCheck className='w-5 h-5' />,
    },
    {
      id: 'info-collect',
      title: t('section2Title'),
      icon: <Database className='w-5 h-5' />,
    },
    {
      id: 'how-use',
      title: t('section3Title'),
      icon: <Eye className='w-5 h-5' />,
    },
    {
      id: 'legal-basis',
      title: t('section4Title'),
      icon: <Shield className='w-5 h-5' />,
    },
    {
      id: 'sharing',
      title: t('section5Title'),
      icon: <Share2 className='w-5 h-5' />,
    },
    {
      id: 'retention',
      title: t('section6Title'),
      icon: <Clock className='w-5 h-5' />,
    },
    {
      id: 'rights',
      title: t('section7Title'),
      icon: <Lock className='w-5 h-5' />,
    },
    {
      id: 'cookies',
      title: t('section8Title'),
      icon: <Database className='w-5 h-5' />,
    },
    {
      id: 'security',
      title: t('section9Title'),
      icon: <Shield className='w-5 h-5' />,
    },
    {
      id: 'contact',
      title: t('section10Title'),
      icon: <Mail className='w-5 h-5' />,
    },
  ];

  return (
    <div className='bg-white min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-16'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-gray-500 hover:text-brand-deep font-bold mb-8 transition-colors group'
        >
          <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
          <span>{t('backHome')}</span>
        </Link>

        <div className='max-w-4xl'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-deep/5 text-brand-deep text-sm font-bold mb-6'>
            <Shield className='w-4 h-4' />
            <span>{t('badge')}</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'>
            {t('titlePrefix')}{' '}
            <span className='text-brand-deep'>{t('titleHighlight')}</span>
            {t('titleSuffix')}
          </h1>
          <div className='flex flex-wrap items-center gap-6 text-gray-500 font-medium'>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-brand-deep' />
              <span>{t('effectiveDate')}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-brand-deep' />
              <span>{t('lastUpdated')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
          {/* Sidebar Navigation */}
          <aside className='hidden lg:block lg:col-span-4'>
            <div className='sticky top-32 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100'>
              <h4 className='text-xl font-bold font-heading text-brand-deep mb-6'>
                {t('contentsTitle')}
              </h4>
              <nav className='space-y-2'>
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className='flex items-center gap-3 p-3 rounded-full text-gray-500 hover:bg-white hover:text-brand-deep hover:shadow-sm transition-all group'
                  >
                    <span className='text-gray-300 group-hover:text-brand-deep transition-colors'>
                      {section.icon}
                    </span>
                    <span className='font-bold text-sm'>{section.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <div className='lg:col-span-8'>
            <div className='bg-brand-deep/5 p-8 md:p-10 rounded-[2.5rem] mb-16 border-l-4 border-brand-deep'>
              <p className='text-xl text-brand-deep font-medium leading-relaxed italic'>
                {t('introQuote')}
              </p>
            </div>

            <div className='space-y-16'>
              {/* Section 1 */}
              <section id='who-we-are' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 text-brand-deep flex items-center justify-center'>
                    1
                  </span>
                  {t('section1Title').replace('1. ', '')}
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>{t('section1Content1')}</p>
                  <ul className='list-none space-y-2 mt-4'>
                    <li className='flex items-center gap-2'>
                      <span className='font-bold text-brand-deep'>
                        {t('section1Website')}
                      </span>{' '}
                      obimi.org
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='font-bold text-brand-deep'>
                        {t('section1Email')}
                      </span>{' '}
                      info@obimii.com
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id='info-collect' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 text-brand-deep flex items-center justify-center'>
                    2
                  </span>
                  {t('section2Title').replace('2. ', '')}
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>{t('section2Content1')}</p>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    {[
                      t('section2List1'),
                      t('section2List2'),
                      t('section2List3'),
                      t('section2List4'),
                      t('section2List5'),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100'
                      >
                        <div className='w-2 h-2 rounded-full bg-brand-deep' />
                        <span className='font-medium'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id='how-use' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 text-brand-deep flex items-center justify-center'>
                    3
                  </span>
                  {t('section3Title').replace('3. ', '')}
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>{t('section3Content1')}</p>
                  <ul className='space-y-4 mt-6'>
                    {[
                      t('section3List1'),
                      t('section3List2'),
                      t('section3List3'),
                      t('section3List4'),
                      t('section3List5'),
                    ].map((item, i) => (
                      <li key={i} className='flex items-center gap-4 text-lg'>
                        <ChevronRight className='w-5 h-5 text-brand-deep' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id='sharing' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 text-brand-deep flex items-center justify-center'>
                    5
                  </span>
                  {t('section5Title').replace('5. ', '')}
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <div className='p-6 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/20 mb-8'>
                    <p className='text-brand-deep font-bold text-xl mb-0'>
                      {t('section5Highlight')}
                    </p>
                  </div>
                  <p>{t('section5Content1')}</p>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    {[
                      t('section5List1'),
                      t('section5List2'),
                      t('section5List3'),
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100'
                      >
                        <div className='w-2 h-2 rounded-full bg-brand-yellow' />
                        <span className='font-medium'>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className='mt-8 italic text-gray-500'>
                    {t('section5Note')}
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id='rights' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 text-brand-deep flex items-center justify-center'>
                    7
                  </span>
                  {t('section7Title').replace('7. ', '')}
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>{t('section7Content1')}</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    {[
                      {
                        title: t('section7Right1Title'),
                        desc: t('section7Right1Desc'),
                      },
                      {
                        title: t('section7Right2Title'),
                        desc: t('section7Right2Desc'),
                      },
                      {
                        title: t('section7Right3Title'),
                        desc: t('section7Right3Desc'),
                      },
                      {
                        title: t('section7Right4Title'),
                        desc: t('section7Right4Desc'),
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className='p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow'
                      >
                        <h4 className='text-brand-deep font-bold mb-2'>
                          {item.title}
                        </h4>
                        <p className='text-sm text-gray-500 mb-0'>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100'>
                    <p className='text-sm mb-0'>
                      {t('section7IcoPrefix')}
                      <Link
                        href='https://www.ico.org.uk'
                        className='text-brand-deep font-bold underline'
                      >
                        www.ico.org.uk
                      </Link>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id='contact' className='scroll-mt-32'>
                <div className='p-10 bg-brand-deep rounded-[3rem] text-white relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-64 h-64 bg-brand-deep/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
                  <div className='relative z-10'>
                    <h2 className='text-3xl font-bold font-heading mb-6'>
                      {t('section10Heading')}
                    </h2>
                    <p className='text-xl text-white/70 mb-8'>
                      {t('section10Desc')}
                    </p>
                    <Link
                      href='mailto:info@obimii.com'
                      className='inline-flex items-center gap-3 px-8 py-4 bg-accent text-brand-deep font-bold rounded-full hover:bg-white transition-all'
                    >
                      <Mail className='w-5 h-5' />
                      <span>info@obimii.com</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
