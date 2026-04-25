import { ArrowRight, Heart, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CommunityCTA = () => {
  const t = useTranslations('Community');

  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-accent relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent rounded-full blur-[120px]' />
      </div>

      <div className='container mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div 
            data-aos='fade-right'
            className='space-y-8 text-white'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
              <Users className='w-4 h-4' />
              <span>{t('badge')}</span>
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight'>
              {t('title')} <br />
              <span className='text-primary italic'>{t('titleHighlight')}</span>
            </h2>

            <p className='text-xl text-white/80 font-sans leading-relaxed max-w-xl'>
              {t('description')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button className='group px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-heading font-bold text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>

              <button className='px-8 py-4 bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 rounded-full font-heading font-bold text-lg transition-all flex items-center justify-center gap-2'>
                <Heart className='w-5 h-5' />
                <span>{t('ctaSecondary')}</span>
              </button>
            </div>
          </div>

          <div 
            data-aos='zoom-in'
            data-aos-delay='400'
            className='relative hidden lg:block'
          >
            <div className='relative w-full aspect-square flex items-center justify-center'>
              <div className='w-32 h-32 rounded-[2.5rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 z-20 animate-pulse'>
                <Users className='w-16 h-16 text-white' />
              </div>

              <div className='absolute top-0 left-1/4 w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden animate-bounce-slow'>
                <img
                  src='https://i.pravatar.cc/150?u=1'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute bottom-10 right-1/4 w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden animate-bounce-slow delay-700'>
                <img
                  src='https://i.pravatar.cc/150?u=2'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute top-1/3 right-0 w-16 h-16 rounded-full border-4 border-white/20 overflow-hidden animate-bounce-slow delay-300'>
                <img
                  src='https://i.pravatar.cc/150?u=3'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute bottom-1/4 left-0 w-16 h-16 rounded-full border-4 border-white/20 overflow-hidden animate-bounce-slow delay-500'>
                <img
                  src='https://i.pravatar.cc/150?u=4'
                  alt='Member'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='absolute w-[80%] h-[80%] border border-secondary rounded-full animate-spin-slow' />
              <div className='absolute w-[60%] h-[60%] border border-secondary rounded-full animate-reverse-spin-slow' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
