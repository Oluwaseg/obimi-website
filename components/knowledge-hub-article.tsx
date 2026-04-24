'use client';

import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Share2,
  Sparkles,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/**
 * Knowledge Hub Article Detail Component
 * Built with Next.js and Tailwind CSS v4
 */

export type SectionType = 'text' | 'list' | 'steps' | 'alert';

export interface ArticleSection {
  title: string;
  content: string | string[];
  type?: SectionType;
}

export interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
  cta: {
    text: string;
    buttonText: string;
    href: string;
  };
}

interface ArticleProps {
  article: ArticleData;
}

export function KnowledgeHubArticle({ article }: ArticleProps) {
  const t = useTranslations('KnowledgeHub');
  return (
    <article className='bg-white min-h-screen pt-32 pb-24'>
      {/* Breadcrumbs & Meta */}
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 mb-12'>
        <div className='flex flex-wrap items-center gap-3 text-sm font-bold text-gray-400 mb-8'>
          <Link
            href='/knowledge-hub'
            className='hover:text-brand-purple transition-colors'
          >
            {t('articleKnowledgeHub')}
          </Link>
          <ChevronRight className='w-4 h-4' />
          <Link
            href={`/knowledge-hub/${article.category.toLowerCase()}`}
            className='hover:text-brand-purple transition-colors'
          >
            {article.category}
          </Link>
          <ChevronRight className='w-4 h-4' />
          <span className='text-brand-deep truncate max-w-[200px] md:max-w-none'>
            {article.title}
          </span>
        </div>

        <div className='max-w-4xl'>
          <h1 className='text-4xl md:text-6xl font-bold font-heading text-brand-deep mb-8 leading-tight'>
            {article.title}
          </h1>

          <div className='flex flex-wrap items-center gap-6 pb-12 border-b border-gray-100'>
            <div className='flex items-center gap-2 text-gray-500'>
              <Calendar className='w-5 h-5 text-brand-purple' />
              <span className='font-bold'>{article.date}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-500'>
              <Clock className='w-5 h-5 text-brand-purple' />
              <span className='font-bold'>{article.readTime}</span>
            </div>
            <div className='flex-1' />
            <div className='flex items-center gap-4'>
              <button className='p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-brand-purple hover:text-white transition-all'>
                <Share2 className='w-5 h-5' />
              </button>
              <button className='p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-brand-purple hover:text-white transition-all'>
                <Bookmark className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
          {/* Main Content */}
          <div className='lg:col-span-8'>
            {/* Intro */}
            <div className='bg-brand-purple/5 p-8 md:p-10 rounded-[2.5rem] mb-16 border-l-4 border-brand-purple'>
              <p className='text-xl md:text-2xl text-brand-deep font-medium leading-relaxed italic'>
                "{article.intro}"
              </p>
            </div>

            {/* Dynamic Sections */}
            <div className='space-y-16'>
              {article.sections.map((section, idx) => (
                <section key={idx} className='scroll-mt-32'>
                  <h2 className='text-3xl font-bold font-heading text-brand-deep mb-8 flex items-center gap-4'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-xl bg-brand-purple text-white text-lg'>
                      {idx + 1}
                    </span>
                    {section.title}
                  </h2>

                  {section.type === 'list' && Array.isArray(section.content) ? (
                    <ul className='space-y-4'>
                      {section.content.map((item, i) => (
                        <li
                          key={i}
                          className='flex items-start gap-4 text-lg text-gray-600 leading-relaxed'
                        >
                          <CheckCircle2 className='w-6 h-6 text-brand-purple flex-shrink-0 mt-1' />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : section.type === 'steps' &&
                    Array.isArray(section.content) ? (
                    <div className='space-y-6'>
                      {section.content.map((step, i) => (
                        <div
                          key={i}
                          className='flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100'
                        >
                          <span className='text-4xl font-bold text-brand-purple/20'>
                            {i + 1}
                          </span>
                          <p className='text-lg text-gray-700 font-medium pt-1'>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : section.type === 'alert' ? (
                    <div className='p-8 bg-red-50 rounded-[2rem] border border-red-100 flex items-start gap-6'>
                      <AlertCircle className='w-8 h-8 text-red-500 flex-shrink-0' />
                      <div>
                        <p className='text-lg text-red-900 leading-relaxed'>
                          {section.content}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                      {typeof section.content === 'string' ? (
                        <p>{section.content}</p>
                      ) : (
                        section.content.map((p, i) => (
                          <p key={i} className='mb-4'>
                            {p}
                          </p>
                        ))
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaway */}
            <div className='mt-20 p-10 bg-brand-deep rounded-[3rem] text-white relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
              <div className='relative z-10'>
                <h3 className='text-2xl font-bold font-heading mb-4 flex items-center gap-3'>
                  <Sparkles className='w-6 h-6 text-brand-yellow' />
                  {t('articleKeyTakeaway')}
                </h3>
                <p className='text-xl text-white/80 leading-relaxed'>
                  {article.takeaway}
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className='mt-12 p-12 bg-brand-yellow rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='text-center md:text-left'>
                <h3 className='text-2xl font-bold font-heading text-brand-deep mb-2'>
                  {article.cta.text}
                </h3>
                <p className='text-brand-deep/70 font-medium'>
                  {t('articleResponseTime')}
                </p>
              </div>
              <Link
                href={article.cta.href}
                className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-purple transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
              >
                <span>{article.cta.buttonText}</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-4'>
            <div className='sticky top-32 space-y-8'>
              {/* Table of Contents */}
              <div className='p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100'>
                <h4 className='text-xl font-bold font-heading text-brand-deep mb-6'>
                  {t('articleInThisGuide')}
                </h4>
                <nav className='space-y-4'>
                  {article.sections.map((section, idx) => (
                    <button
                      key={idx}
                      className='flex items-center gap-3 text-gray-500 hover:text-brand-purple font-medium transition-colors text-left'
                    >
                      <span className='w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs font-bold'>
                        {idx + 1}
                      </span>
                      <span className='line-clamp-1'>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Related Articles */}
              <div className='p-8 bg-brand-purple/5 rounded-[2.5rem] border border-brand-purple/10'>
                <h4 className='text-xl font-bold font-heading text-brand-deep mb-6'>
                  {t('articleRelatedResources')}
                </h4>
                <div className='space-y-6'>
                  <Link href='#' className='group block'>
                    <p className='text-sm font-bold text-brand-purple mb-1'>
                      Education
                    </p>
                    <h5 className='font-bold text-brand-deep group-hover:text-brand-purple transition-colors line-clamp-2'>
                      Annual Reviews of EHCPs: What Parents Need to Know
                    </h5>
                  </Link>
                  <Link href='#' className='group block'>
                    <p className='text-sm font-bold text-brand-purple mb-1'>
                      Health
                    </p>
                    <h5 className='font-bold text-brand-deep group-hover:text-brand-purple transition-colors line-clamp-2'>
                      Understanding the SEN Support System
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
