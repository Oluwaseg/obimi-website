'use client';

import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  Search,
  Sprout,
} from 'lucide-react';
import Link from 'next/link';

export function KnowledgeHubMain() {
  const categories = [
    {
      id: 'education',
      title: 'Education',
      desc: 'Guidance on EHCPs, school support, and navigating the education system.',
      icon: <GraduationCap className='w-8 h-8' />,
      color: 'bg-brand-purple/10 text-brand-purple',
      href: '/knowledge-hub/education',
    },
    {
      id: 'health',
      title: 'Health & Diagnosis',
      desc: "Understand diagnoses, therapies, and how to support your child's development.",
      icon: <Sprout className='w-8 h-8' />,
      color: 'bg-brand-yellow/10 text-brand-yellow-dark',
      href: '/knowledge-hub/health',
    },
  ];

  const featuredArticles = [
    {
      title: 'Annual Reviews of EHCPs: What Parents Need to Know',
      desc: 'A simple guide to understanding annual reviews and how to prepare effectively.',
      date: 'Oct 8, 2025',
      readTime: '5 min read',
      category: 'Education',
      href: '/knowledge-hub/education/annual-reviews',
    },
    {
      title: 'Education, Health and Care Plans (EHCPs): A Step-by-Step Guide',
      desc: 'Navigating the Education, Health and Care Plan process from start to finish.',
      date: 'Sep 24, 2025',
      readTime: '8 min read',
      category: 'Guidance',
      href: '/knowledge-hub/education/ehcp-guide',
    },
    {
      title: 'Understanding the SEN Support System',
      desc: 'How schools provide additional support for children with special educational needs.',
      date: 'Aug 15, 2025',
      readTime: '6 min read',
      category: 'Support',
      href: '/knowledge-hub/education/sen-support',
    },
  ];

  return (
    <div className='bg-background min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-20'>
        <div className='max-w-3xl'>
          <div
            data-aos='fade-down'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/5 text-brand-purple text-sm font-bold mb-6'
          >
            <BookOpen className='w-4 h-4' />
            <span>Knowledge Hub</span>
          </div>
          <h1
            data-aos='fade-right'
            className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'
          >
            Clear, practical resources to help you{' '}
            <span className='text-brand-purple'>understand SEND</span>.
          </h1>
          <p className='text-xl text-gray-600 leading-relaxed mb-10'>
            Clear, practical resources to help you understand SEND and
            confidently support your child.
          </p>
          {/* Search Bar */}
          <div
            data-aos='fade-up'
            data-aos-delay='200'
            className='relative max-w-2xl group'
          >
            <Search className='absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-brand-purple transition-colors' />
            <input
              type='text'
              placeholder='Search for guides, articles, or topics...'
              className='w-full pl-16 pr-8 py-6 bg-gray-50 border border-gray-100 rounded-[2rem] text-lg focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:bg-white transition-all'
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='flex items-end justify-between mb-12'>
          <div>
            <h2 className='text-4xl font-bold font-heading text-brand-deep mb-4'>
              Explore by Category
            </h2>
            <p className='text-gray-500'>
              Find the specific support you need across different areas.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              href={cat.href}
              data-aos='zoom-in'
              data-aos-delay={idx * 100}
              className='group relative p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 overflow-hidden'
            >
              <div
                className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {cat.icon}
              </div>
              <h3 className='text-3xl font-bold font-heading text-brand-deep mb-4'>
                {cat.title}
              </h3>
              <p className='text-lg text-gray-600 mb-8 max-w-md leading-relaxed'>
                {cat.desc}
              </p>
              <div className='flex items-center gap-2 text-brand-purple font-bold group-hover:gap-4 transition-all'>
                <span>View Articles</span>
                <ArrowRight className='w-5 h-5' />
              </div>

              {/* Decorative Background Element */}
              <div className='absolute -right-8 -bottom-8 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl group-hover:bg-brand-purple/10 transition-colors' />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='bg-brand-deep rounded-[4rem] p-12 md:p-20 relative overflow-hidden'>
          {/* Background Blobs */}
          <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2' />
          <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2' />

          <div className='relative z-10'>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
              <div>
                <h2 className='text-4xl md:text-5xl font-bold font-heading text-white mb-4'>
                  Featured Resources
                </h2>
                <p className='text-white/60 text-lg'>
                  Our most helpful guides, handpicked for you.
                </p>
              </div>
              <Link
                href='/knowledge-hub/all'
                className='inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-deep font-bold rounded-full hover:bg-brand-yellow transition-colors'
              >
                <span>{'View All Resources'}</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {featuredArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.href}
                  data-aos='fade-up'
                  data-aos-delay={idx * 100}
                  className='group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] hover:bg-white hover:border-white transition-all duration-500'
                >
                  <div className='flex items-center gap-3 mb-6'>
                    <span className='px-3 py-1 rounded-full bg-accent/80 text-background text-xs font-bold group-hover:bg-brand-purple/10'>
                      {article.category}
                    </span>
                    <div className='flex items-center gap-1.5 text-white/40 text-xs group-hover:text-gray-400'>
                      <Clock className='w-3 h-3' />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className='text-2xl font-bold font-heading text-white group-hover:text-brand-deep mb-4 leading-tight transition-colors'>
                    {article.title}
                  </h3>
                  <p className='text-white/50 group-hover:text-gray-500 mb-8 line-clamp-2 transition-colors'>
                    {article.desc}
                  </p>
                  <div className='flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-gray-100 transition-colors'>
                    <div className='flex items-center gap-2 text-white/40 text-xs group-hover:text-gray-400'>
                      <Calendar className='w-3 h-3' />
                      <span>{article.date}</span>
                    </div>
                    <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:text-accent group-hover:bg-brand-purple transition-all'>
                      <ArrowRight className='w-5 h-5' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
