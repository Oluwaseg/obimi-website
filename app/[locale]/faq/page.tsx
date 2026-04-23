'use client';
import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import {
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Minus,
  Plus,
  Search,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const FAQPage = () => {
  const t = useTranslations('FAQPage');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = Array.from({ length: 9 }).map((_, i) => ({
    question: t(`faq${i + 1}Question`),
    answer: t(`faq${i + 1}Answer`),
  }));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 bg-primary/5 overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary rounded-full blur-[120px]' />
          <div className='absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent rounded-full blur-[120px]' />
        </div>

        <div className='container mx-auto text-center max-w-4xl space-y-8 relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
            <HelpCircle className='w-4 h-4' />
            <span>{t('badge')}</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'>
            {t('titlePrefix')} <span className='text-primary'>{t('titleHighlight')}</span>
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed'>
            {t('description')}
          </p>

          {/* Search Bar (Visual) */}
          <div className='max-w-2xl mx-auto relative mt-12'>
            <div className='absolute inset-y-0 left-6 flex items-center pointer-events-none'>
              <Search className='w-6 h-6 text-muted-foreground' />
            </div>
            <input
              type='text'
              placeholder={t('searchPlaceholder')}
              className='w-full py-6 pl-16 pr-8 bg-background border-2 border-border rounded-[2rem] text-lg font-sans focus:outline-none focus:border-primary transition-colors shadow-xl shadow-primary/5'
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24'>
        <div className='container mx-auto max-w-4xl'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group rounded-[2rem] border-2 transition-all duration-300 ${openIndex === index ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-border bg-background hover:border-primary/30'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full flex items-center justify-between p-8 text-left'
                >
                  <span
                    className={`text-xl md:text-2xl font-heading font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'}`}
                  >
                    {openIndex === index ? (
                      <Minus className='w-6 h-6' />
                    ) : (
                      <Plus className='w-6 h-6' />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className='p-8 pt-0 text-lg text-muted-foreground font-sans leading-relaxed border-t border-primary/10 mt-2'>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/30 relative overflow-hidden'>
        <div className='container mx-auto max-w-4xl text-center space-y-12 relative z-10'>
          <div className='w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
            <MessageCircle className='w-12 h-12 text-primary' />
          </div>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
            {t('finalCtaTitle')}
          </h2>
          <p className='text-xl text-muted-foreground font-sans'>
            {t('finalCtaDescription')}
          </p>
          <button className='group px-12 py-6 bg-primary text-primary-foreground rounded-full font-heading font-bold text-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-2 flex items-center gap-3 mx-auto'>
            <span>{t('finalCtaButton')}</span>
            <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>

        {/* Decorative Blobs */}
        <div className='absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2' />
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
