'use client';

import {
  ArrowRight,
  Coffee,
  Heart,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const CommunityPage = () => {
  const t = useTranslations('CommunityPage');
  const router = useRouter();

  const cta = () => {
    router.push('/contact');
  };

  const communityOffers = [
    {
      title: t('offer1Title'),
      description: t('offer1Description'),
      icon: <ShieldCheck className='w-8 h-8 text-primary' />,
      bg: 'bg-primary/5',
    },
    {
      title: t('offer2Title'),
      description: t('offer2Description'),
      icon: <Coffee className='w-8 h-8 text-accent-foreground' />,
      bg: 'bg-accent/10',
    },
    {
      title: t('offer3Title'),
      description: t('offer3Description'),
      icon: <MapPin className='w-8 h-8 text-secondary-foreground' />,
      bg: 'bg-secondary/20',
    },
    {
      title: t('offer4Title'),
      description: t('offer4Description'),
      icon: <Lightbulb className='w-8 h-8 text-brand-deep' />,
      bg: 'bg-brand-deep/5',
    },
  ];

  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-primary/5'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary rounded-full blur-[120px]' />
          <div className='absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent rounded-full blur-[120px]' />
        </div>

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
          <div className='space-y-8'>
            <div
              data-aos='fade-down'
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'
            >
              <Users className='w-4 h-4' />
              <span>{t('badge')}</span>
            </div>
            <h1
              data-aos='fade-right'
              className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'
            >
              {t('titlePrefix')} <br />
              <span className='text-primary italic'>{t('titleHighlight')}</span>
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-xl'>
              {t('description')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={cta}
                className='group px-10 py-5 bg-primary text-primary-foreground rounded-full font-heading font-bold text-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3'
              >
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
              </button>
              <button
                onClick={cta}
                className='px-10 py-5 bg-white border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-full font-heading font-bold text-xl transition-all flex items-center justify-center gap-3'
              >
                <span>{t('ctaSecondary')}</span>
              </button>
            </div>
          </div>

          <div
            data-aos='zoom-in'
            data-aos-delay='300'
            className='relative hidden lg:block'
          >
            <div className='relative w-full aspect-square flex items-center justify-center'>
              {/* Central Image */}
              <div className='w-64 h-64 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background z-20 rotate-3'>
                <img
                  src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop'
                  alt='Community Connection'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Floating Avatars */}
              <div className='absolute top-0 right-1/4 w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden animate-bounce-slow'>
                <img
                  src='https://i.pravatar.cc/150?u=11'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute bottom-10 left-1/4 w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden animate-bounce-slow delay-700'>
                <img
                  src='https://i.pravatar.cc/150?u=12'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute top-1/3 left-0 w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden animate-bounce-slow delay-300'>
                <img
                  src='https://i.pravatar.cc/150?u=13'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Decorative Rings */}
              <div className='absolute w-[90%] h-[90%] border-2 border-primary/10 rounded-full animate-spin-slow' />
              <div className='absolute w-[70%] h-[70%] border-2 border-accent/10 rounded-full animate-reverse-spin-slow' />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section data-aos='fade-up' className='py-24 px-6 md:px-12 lg:px-24'>
        <div className='container mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-20 space-y-4'>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {t('offersTitle')}
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {communityOffers.map((offer, index) => (
              <div
                key={index}
                data-aos='zoom-in'
                data-aos-delay={index * 100}
                className='group p-10 rounded-[3rem] bg-background border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-start'
              >
                <div
                  className={`flex-shrink-0 w-20 h-20 rounded-full ${offer.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {offer.icon}
                </div>
                <div className='space-y-4'>
                  <h3 className='text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                    {offer.title}
                  </h3>
                  <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                    {offer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA Section */}
      <section className='py-20 px-6 md:px-12 lg:px-24 bg-accent/10 relative overflow-hidden'>
        <div className='container mx-auto text-center space-y-8 relative z-10'>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-foreground'>
            {t('midCtaTitle')}
          </h2>
          <button
            onClick={cta}
            className='group px-12 py-6 bg-primary text-primary-foreground rounded-full font-heading font-bold text-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-2 flex items-center gap-3 mx-auto'
          >
            <span>{t('midCtaButton')}</span>
            <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
        <div className='absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
      </section>

      {/* Depth Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-background'>
        <div
          data-aos='fade-right'
          className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
        >
          <div className='relative'>
            <div className='aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background relative group'>
              <img
                src='https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop'
                alt='Understanding Space'
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors' />
            </div>
          </div>
          <div className='space-y-8'>
            <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
              <Sparkles className='w-8 h-8 text-primary' />
            </div>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {t('depthTitle')}
            </h2>
            <p className='text-xl text-muted-foreground font-sans leading-relaxed'>
              {t('depthDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-brand-deep text-white rounded-[10rem] mb-4 md:rounded-t-[10rem]'>
        <div className='container mx-auto max-w-4xl text-center space-y-12'>
          <div className='w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto'>
            <Heart className='w-12 h-12 text-accent fill-accent/20' />
          </div>
          <h2 className='text-4xl md:text-6xl font-heading font-bold leading-tight'>
            {t('finalCtaTitle')}
          </h2>
          <div className='flex flex-col sm:flex-row gap-6 justify-center pt-8'>
            <button
              onClick={cta}
              className='px-12 py-6 bg-accent text-accent-foreground rounded-full font-heading font-bold text-2xl shadow-2xl hover:shadow-accent/40 transition-all hover:-translate-y-2'
            >
              {t('finalCtaPrimary')}
            </button>
            <button
              onClick={cta}
              className='px-12 py-6 bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 rounded-full font-heading font-bold text-2xl transition-all hover:-translate-y-2'
            >
              {t('finalCtaSecondary')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
