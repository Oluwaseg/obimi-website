import { ArrowRight, Heart, LayoutGrid, Lightbulb, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const WhyObimi = () => {
  const t = useTranslations('WhyObimi');

  const values = [
    {
      title: t('value1Title'),
      description: t('value1Description'),
      icon: <Heart className='w-6 h-6 text-primary' />,
    },
    {
      title: t('value2Title'),
      description: t('value2Description'),
      icon: <Lightbulb className='w-6 h-6 text-accent-foreground' />,
    },
    {
      title: t('value3Title'),
      description: t('value3Description'),
      icon: <LayoutGrid className='w-6 h-6 text-secondary-foreground' />,
    },
    {
      title: t('value4Title'),
      description: t('value4Description'),
      icon: <Users className='w-6 h-6 text-brand-deep' />,
    },
  ];

  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/30 relative overflow-hidden'>
      <div className='container mx-auto relative z-10'>
        {/* Section Header */}
        <div 
          data-aos='fade-right'
          className='max-w-3xl mb-20 space-y-6'
        >
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
            {t('title')}
          </h2>
          <p className='text-xl text-muted-foreground font-sans leading-relaxed'>
            {t('description')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
          {/* Left: Video Section (7 cols) */}
          <div 
            data-aos='fade-right'
            data-aos-delay='200'
            className='lg:col-span-7 space-y-6'
          >
            <div className='relative group aspect-video rounded-[2rem] overflow-hidden shadow-2xl'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/-KpH19AFT3E'
                title='Obimi Community Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />

              {/* Video Badge */}
              <div className='absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'>
                <div className='w-2 h-2 rounded-full bg-red-500 animate-pulse' />
                <span className='text-xs font-bold font-heading text-brand-deep uppercase tracking-wider'>
                  {t('videoBadge')}
                </span>
              </div>
            </div>

            <p className='text-sm text-muted-foreground font-heading italic pl-4 border-l-2 border-primary/30'>
              {t('videoDescription')}
            </p>
          </div>

          {/* Right: Value Cards (5 cols) */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='grid grid-cols-1 gap-6'>
              {values.map((value, index) => (
                <div
                  key={index}
                  data-aos='fade-left'
                  data-aos-delay={index * 100}
                  className='group flex gap-5 p-6 rounded-[2rem] bg-background border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'
                >
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors'>
                    {value.icon}
                  </div>
                  <div className='space-y-1'>
                    <h4 className='text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                      {value.title}
                    </h4>
                    <p className='text-sm text-muted-foreground font-sans leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button className='px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2'>
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className='w-5 h-5' />
              </button>

              <button className='px-8 py-4 bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-full font-heading font-bold text-lg transition-all flex items-center justify-center gap-2'>
                <span>{t('ctaSecondary')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2' />
    </section>
  );
};

export default WhyObimi;
