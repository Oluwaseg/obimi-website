'use client';

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Filter,
  Search,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface CategoryPageProps {
  category: {
    title: string;
    desc: string;
    slug: string;
  };
  articles: Array<{
    title: string;
    desc: string;
    date: string;
    readTime: string;
    href: string;
  }>;
}

export function KnowledgeHubCategory({
  category,
  articles,
}: CategoryPageProps) {
  const t = useTranslations('KnowledgeHub');

  return (
    <div className='bg-white min-h-screen pt-32 pb-24'>
      {/* Header Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-16'>
        <Link
          href='/knowledge-hub'
          className='inline-flex items-center gap-2 text-gray-500 hover:text-brand-purple font-bold mb-8 transition-colors group'
        >
          <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
          <span>{t('categoryBackLink')}</span>
        </Link>

        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl font-bold font-heading text-brand-deep mb-6'>
            {category.title}
          </h1>
          <p className='text-xl text-gray-600 leading-relaxed'>
            {category.desc}
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-12'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-gray-50 rounded-[2rem] border border-gray-100'>
          <div className='relative w-full md:max-w-md group'>
            <Search className='absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-purple transition-colors' />
            <input
              type='text'
              placeholder={t('categorySearchPlaceholder', {
                category: category.title,
              })}
              className='w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all'
            />
          </div>
          <div className='flex items-center gap-3 w-full md:w-auto'>
            <button className='flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 font-bold text-gray-600 hover:border-brand-purple hover:text-brand-purple transition-all'>
              <Filter className='w-5 h-5' />
              <span>{t('categoryFilter')}</span>
            </button>
            <div className='hidden md:block h-8 w-px bg-gray-200 mx-2' />
            <p className='hidden md:block text-sm font-bold text-gray-400'>
              {t('categoryShowingArticles', { count: articles.length })}
            </p>
          </div>
        </div>
      </section>

      {/* Article List */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 gap-6'>
          {articles.map((article, idx) => (
            <Link
              key={idx}
              href={article.href}
              className='group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-brand-purple/20 transition-all duration-500'
            >
              <div className='max-w-2xl'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex items-center gap-1.5 text-gray-400 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{article.date}</span>
                  </div>
                  <div className='w-1 h-1 bg-gray-300 rounded-full' />
                  <div className='flex items-center gap-1.5 text-gray-400 text-sm'>
                    <Clock className='w-4 h-4' />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h2 className='text-2xl md:text-3xl font-bold font-heading text-brand-deep group-hover:text-brand-purple mb-3 transition-colors'>
                  {article.title}
                </h2>
                <p className='text-gray-500 text-lg line-clamp-1'>
                  {article.desc}
                </p>
              </div>

              <div className='mt-8 md:mt-0 flex items-center gap-3 text-brand-purple font-bold group-hover:gap-5 transition-all'>
                <span className='text-lg'>{t('categoryReadMore')}</span>
                <div className='w-12 h-12 rounded-full bg-brand-purple/5 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all'>
                  <ArrowRight className='w-6 h-6' />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Placeholder */}
        {/* <div className='mt-16 flex justify-center'>
          <button className='px-10 py-4 bg-gray-50 text-gray-500 font-bold rounded-full hover:bg-brand-purple hover:text-white transition-all'>
            {t('categoryLoadMore')}
          </button>
        </div> */}
      </section>
    </div>
  );
}
