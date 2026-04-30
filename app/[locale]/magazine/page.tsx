'use client';

import { IMAGES } from '@/constants';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Share2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MagazineDetailPage() {
  return (
    <div className='bg-background min-h-screen pt-32 pb-24'>
      {/* Breadcrumbs & Back Button */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-12'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-gray-500 hover:text-brand-deep font-bold mb-8 transition-colors group'
        >
          <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
          <span>Back to Home</span>
        </Link>
      </section>

      {/* Article Header */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
          <div className='lg:col-span-7'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-deep/5 text-brand-deep text-sm font-bold mb-6'>
              <BookOpen className='w-4 h-4' />
              <span>Press Feature</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'>
              Featured in{' '}
              <span className='text-brand-deep'>Life In Orpington</span>{' '}
              Magazine.
            </h1>
            <div className='flex flex-wrap gap-6 mb-10'>
              <div className='flex items-center gap-2 text-gray-500 font-medium'>
                <Calendar className='w-5 h-5 text-brand-deep' />
                <span>May 2026 Edition</span>
              </div>
              <div className='flex items-center gap-2 text-gray-500 font-medium'>
                <MapPin className='w-5 h-5 text-brand-deep' />
                <span>Bromley & Orpington</span>
              </div>
            </div>
            <p className='text-2xl text-gray-600 leading-relaxed mb-12'>
              Obimi was highlighted for its impact and innovation in the local
              business community, recognized for our dedication to supporting
              SEND families.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                href='https://lifeinmagazines.co.uk/pdfs/life-in-magazines-bromley/#pdf-life-in-magazines-bromley/36/'
                target='_blank'
                className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-deep transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
              >
                <span>Read Full Digital Magazine</span>
                <ExternalLink className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
              </Link>
              <button className='px-10 py-5 bg-gray-50 text-brand-deep font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-3 border border-gray-200'>
                <Share2 className='w-5 h-5' />
                <span>Share Feature</span>
              </button>
            </div>
          </div>

          <div className='lg:col-span-5'>
            <div className='relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50'>
              <Image
                src={IMAGES.MAGAZINE}
                alt='Life In Orpington Magazine Cover'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content / Screenshots */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='bg-gray-50 rounded-[4rem] p-12 md:p-24 border border-gray-100'>
          <div className='max-w-4xl mx-auto mb-16 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-6'>
              Inside the Feature
            </h2>
            <p className='text-lg text-gray-500'>
              A closer look at the article highlighting Obimi's mission and the
              impact we're making for parents and caregivers.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
              <div className='relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 bg-white p-4'>
                <div className='relative w-full h-full rounded-xl overflow-hidden'>
                  <Image
                    src={IMAGES.MAGAZINE_2}
                    alt='Article Page 1'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <p className='text-center text-gray-500 font-medium italic'>
                Article Page 1: The Mission
              </p>
            </div>
            {/* <div className='space-y-8'>
              <div className='relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 bg-white p-4'>
                <div className='relative w-full h-full rounded-xl overflow-hidden'>
                  <Image
                    src='/api/placeholder/800/1000'
                    alt='Article Page 2'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <p className='text-center text-gray-500 font-medium italic'>
                Article Page 2: Community Impact
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-8'>
              What the feature says about Obimi
            </h2>
            <div className='space-y-6'>
              {[
                'Recognized for innovative support systems for SEND families.',
                'Highlighted as a key contributor to the local Bromley community.',
                'Praised for the "lived experience" approach to social work.',
                'Noted for excellence in business and community leadership.',
              ].map((point, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className='w-8 h-8 rounded-full bg-brand-deep/10 text-brand-deep flex items-center justify-center flex-shrink-0 mt-1'>
                    <CheckCircle2 className='w-5 h-5' />
                  </div>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-brand-deep rounded-[3rem] p-12 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
            <h3 className='text-2xl font-bold font-heading mb-6'>
              "Obimi is setting a new standard for how we support parents
              navigating complex systems."
            </h3>
            <p className='text-white/70 text-lg'>
              — Life In Orpington Magazine
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='bg-brand-yellow rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-4'>
              Inspired by our story?
            </h2>
            <p className='text-brand-deep/70 text-lg font-medium'>
              Join us in making a difference for SEND families.
            </p>
          </div>
          <Link
            href='/contact'
            className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-deep transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
          >
            <span>Get Involved</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </section>
    </div>
  );
}
