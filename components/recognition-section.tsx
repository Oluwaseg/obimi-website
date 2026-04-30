'use client';

import { IMAGES } from '@/constants';
import {
  ArrowRight,
  Award,
  BookOpen,
  Camera,
  ExternalLink,
  Star,
  X,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Recognition & Awards Section Component
 * Built with Next.js and Tailwind CSS v4
 *
 * Design Concept:
 * - High-impact social proof for the landing page.
 * - Combines Magazine features and Awards into a cohesive "Trust" block.
 * - Features a high-trust "Moment of Recognition" card with the owner's photo.
 * - Premium card-based layout with unique hover states.
 * - Includes a lightbox for full-screen image viewing.
 */

export function RecognitionSection() {
  const t = useTranslations('RecognitionSection');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className='bg-background py-24 md:py-32 overflow-hidden'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16' data-aos='fade-right'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple text-brand-deep text-sm font-bold mb-6'>
            <Star className='w-4 h-4' />
            <span>{t('badge')}</span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold font-heading text-brand-deep mb-6 leading-tight'>
            {t('title')}{' '}
            <span className='text-brand-purple'>{t('titleHighlight')}</span>{' '}
            {t('titleSuffix')}
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            {t('description')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Magazine Feature Card - Large */}
          <div
            className='lg:col-span-7 group relative bg-brand-deep rounded-[3.5rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            {/* Background Glow */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

            <div className='relative z-10 w-full md:w-1/2'>
              <div
                className='relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:border-accent/30 transition-colors duration-500 cursor-pointer'
                onClick={() =>
                  setSelectedImage(
                    typeof IMAGES.MAGAZINE_2 === 'string'
                      ? IMAGES.MAGAZINE_2
                      : IMAGES.MAGAZINE_2.src
                  )
                }
              >
                <Image
                  src={IMAGES.MAGAZINE_2}
                  alt='Life In Orpington Magazine Cover'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <Camera className='text-white w-8 h-8' />
                </div>
              </div>
            </div>

            <div className='relative z-10 w-full md:w-1/2'>
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold mb-6'>
                <BookOpen className='w-3.5 h-3.5' />
                <span>{t('magazineBadge')}</span>
              </div>
              <h3 className='text-3xl font-bold font-heading text-white mb-4'>
                {t('magazineTitle')}
              </h3>
              <p className='text-white/70 text-lg mb-8 leading-relaxed'>
                {t('magazineDescription')}
              </p>
              <Link
                href='https://lifeinmagazines.co.uk/pdfs/life-in-magazines-bromley/#pdf-life-in-magazines-bromley/36/'
                target='_blank'
                className='inline-flex items-center gap-3 px-8 py-4 bg-accent text-brand-deep font-bold rounded-full hover:bg-white transition-all group/btn'
              >
                <span>{t('magazineCta')}</span>
                <ExternalLink className='w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
              </Link>
            </div>
          </div>

          {/* Awards & Proof Column */}
          <div className='lg:col-span-5 flex flex-col gap-8'>
            {/* Moment of Recognition - Owner with Award */}
            <div
              className='group relative bg-accent rounded-[3rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[320px] shadow-lg cursor-pointer'
              data-aos='fade-up'
              data-aos-delay='200'
              onClick={() =>
                setSelectedImage(
                  typeof IMAGES.AWARD === 'string'
                    ? IMAGES.AWARD
                    : IMAGES.AWARD.src
                )
              }
            >
              <Image
                src={IMAGES.AWARD}
                alt='Obimi Founder receiving award'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent flex flex-col justify-end p-8'>
                <div className='flex items-center gap-2 mb-2'>
                  <Award className='w-5 h-5 text-accent' />
                  <span className='text-accent font-bold text-sm uppercase tracking-wider'>
                    {t('awardMomentTitle')}
                  </span>
                </div>
                <h4 className='text-2xl font-bold font-heading text-white'>
                  {t('awardMomentSubtitle')}
                </h4>
              </div>
              <div className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white'>
                <Camera className='w-6 h-6' />
              </div>
            </div>

            {/* Award Card 1 */}
            <div
              className='group p-8 bg-background rounded-full border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 flex items-center gap-6'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='w-16 h-16 rounded-full bg-brand-deep text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-colors'>
                <Award className='w-8 h-8' />
              </div>
              <div>
                <div className='text-brand-purple font-bold text-sm mb-1'>
                  {t('awardCardSubtitle')}
                </div>
                <h4 className='text-lg font-bold font-heading text-brand-deep mb-1'>
                  {t('awardCardTitle')}
                </h4>
                <p className='text-gray-500 text-xs'>
                  {t('awardCardDescription')}
                </p>
              </div>
            </div>

            {/* View All Press Link */}
            <Link
              href='/press'
              className='mt-auto flex items-center justify-between p-6 bg-brand-deep/5 rounded-[2.5rem] border border-brand-deep/10 group hover:bg-brand-deep transition-all duration-500'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <span className='text-lg font-bold font-heading text-brand-deep group-hover:text-white transition-colors'>
                {t('viewAllPress')}
              </span>
              <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-purple group-hover:bg-accent group-hover:text-brand-deep transition-all'>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[100] bg-brand-deep/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300'
          onClick={() => setSelectedImage(null)}
        >
          <button
            className='absolute top-8 right-8 text-white/70 hover:text-white transition-colors cursor-pointer'
            onClick={() => setSelectedImage(null)}
          >
            <X className='w-10 h-10' />
          </button>
          <div
            className='relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt='Enlarged recognition moment'
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}
    </section>
  );
}
