'use client';

import { IMAGES } from '@/constants/image';
import {
  ArrowRight,
  Heart,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

export default function OurTeamPage() {
  const t = useTranslations('OurTeamPage');

  const coreTeam = [
    {
      name: t('teamMember1Name'),
      role: t('teamMember1Role'),
      bio: t('teamMember1Bio'),
      image: IMAGES.TATUM_HASLOP,
    },
    {
      name: t('teamMember2Name'),
      role: t('teamMember2Role'),
      bio: t('teamMember2Bio'),
      image: IMAGES.FUNMI,
    },
  ];

  return (
    <div className='bg-background min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-24'>
        <div className='max-w-3xl'>
          <div
            data-aos='fade-down'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-deep/5 text-brand-purple text-sm font-bold mb-6'
          >
            <Users className='w-4 h-4' />
            <span>{t('badge')}</span>
          </div>
          <h1
            data-aos='fade-right'
            className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'
          >
            {t('titlePrefix')}
            <span className='text-brand-purple'>{t('titleHighlight')}</span>
            {t('titleSuffix')}
          </h1>
          <p className='text-xl text-gray-600 leading-relaxed'>
            {t('description')}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div data-aos='fade-up' className='flex items-center gap-3 mb-12'>
          <div className='w-12 h-1 bg-accent rounded-full' />
          <h2 className='text-3xl font-bold font-heading text-brand-deep'>
            {t('founderSectionTitle')}
          </h2>
        </div>

        <div className='group relative bg-brand-deep rounded-[4rem] overflow-hidden'>
          {/* Background Decorative Elements */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2' />
          <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2' />

          <div className='relative z-10 flex flex-col lg:flex-row items-center'>
            {/* Founder Image Container */}
            <div data-aos='zoom-in' className='w-full lg:w-1/2 p-8 lg:p-12'>
              <div className='relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 group-hover:border-accent/30 transition-colors duration-500'>
                <Image
                  src={IMAGES.HELEN_EWUMI}
                  alt={t('founderName')}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>

            {/* Founder Content */}
            <div
              data-aos='fade-left'
              className='w-full lg:w-1/2 p-8 lg:p-20 lg:pl-0'
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-sm font-bold mb-6'>
                <Sparkles className='w-4 h-4' />
                <span>{t('founderBadge')}</span>
              </div>
              <h3 className='text-4xl md:text-5xl font-bold font-heading text-white mb-4'>
                {t('founderName')}
              </h3>
              <p className='text-xl text-accent font-bold mb-8'>
                {t('founderRole')}
              </p>

              <div className='space-y-6 text-lg text-white/70 leading-relaxed mb-10'>
                <p>{t('founderBio1')}</p>
                <p>{t('founderBio2')}</p>
              </div>

              <div className='flex items-center gap-4'>
                <Link
                  href='https://web.facebook.com/profile.php?id=61579146742661#'
                  className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-brand-deep transition-all'
                >
                  <FaFacebook className='w-5 h-5' />
                </Link>
                <Link
                  href='mailto:info@obimii.com'
                  className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-brand-deep transition-all'
                >
                  <Mail className='w-5 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='flex items-center gap-3 mb-16'>
          <div className='w-12 h-1 bg-brand-purple rounded-full' />
          <h2 className='text-3xl font-bold font-heading text-brand-deep'>
            {t('coreTeamTitle')}
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {coreTeam.map((member, idx) => (
            <div
              key={idx}
              data-aos='fade-up'
              data-aos-delay={idx * 100}
              className='group p-8 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500'
            >
              <div className='relative w-full aspect-square rounded-[2.5rem] overflow-hidden mb-8'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
              </div>
              <h3 className='text-2xl font-bold font-heading text-brand-deep mb-2'>
                {member.name}
              </h3>
              <p className='text-brand-purple font-bold mb-4'>{member.role}</p>
              <p className='text-gray-500 leading-relaxed'>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Support Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div
          data-aos='zoom-in'
          className='bg-brand-purple/5 rounded-[4rem] p-12 md:p-20 border border-brand-purple/10 relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

          <div className='relative z-10 max-w-4xl'>
            <div data-aos='fade-right' className='flex items-center gap-3 mb-8'>
              <div className='w-12 h-1 bg-brand-purple rounded-full' />
              <h2 className='text-3xl font-bold font-heading text-brand-deep'>
                {t('communityTitle')}
              </h2>
            </div>
            <p
              data-aos='fade-right'
              data-aos-delay='200'
              className='text-2xl md:text-3xl text-brand-deep font-medium leading-relaxed mb-12'
            >
              {t('communityDescription')}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div
                data-aos='fade-up'
                data-aos-delay='300'
                className='flex items-start gap-4'
              >
                <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center text-brand-purple shadow-sm flex-shrink-0'>
                  <Heart className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-brand-deep mb-2'>
                    {t('communityFeature1Title')}
                  </h4>
                  <p className='text-gray-600'>{t('communityFeature1Desc')}</p>
                </div>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='flex items-start gap-4'
              >
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-purple shadow-sm flex-shrink-0'>
                  <ShieldCheck className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-brand-deep mb-2'>
                    {t('communityFeature2Title')}
                  </h4>
                  <p className='text-gray-600'>{t('communityFeature2Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div
          data-aos='zoom-in'
          className='bg-accent rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'
        >
          <div>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-4'>
              {t('finalCtaTitle')}
            </h2>
            <p className='text-brand-deep/70 text-lg font-medium'>
              {t('finalCtaDesc')}
            </p>
          </div>
          <Link
            href='/contact'
            className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-purple transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
          >
            <span>{t('finalCtaButton')}</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </section>
    </div>
  );
}
