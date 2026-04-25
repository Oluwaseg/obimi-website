import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  Presentation,
  Stethoscope,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const HowWeHelp = () => {
  const t = useTranslations('HowWeHelp');

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Description'),
      icon: <GraduationCap className='w-8 h-8' />,
      color: 'bg-primary/10 text-primary',
      span: 'md:col-span-2 lg:col-span-4',
    },
    {
      title: t('service2Title'),
      description: t('service2Description'),
      icon: <Stethoscope className='w-8 h-8' />,
      color: 'bg-accent/10 text-accent-foreground',
      span: 'md:col-span-2 lg:col-span-4',
    },
    {
      title: t('service3Title'),
      description: t('service3Description'),
      icon: <HeartHandshake className='w-8 h-8' />,
      color: 'bg-secondary/20 text-secondary-foreground',
      span: 'md:col-span-2 lg:col-span-4',
    },
    {
      title: t('service4Title'),
      description: t('service4Description'),
      icon: <Users className='w-8 h-8' />,
      color: 'bg-brand-deep/10 text-brand-deep',
      span: 'md:col-span-3 lg:col-span-6',
    },
    {
      title: t('service5Title'),
      description: t('service5Description'),
      icon: <Presentation className='w-8 h-8' />,
      color: 'bg-primary/5 text-primary',
      span: 'md:col-span-3 lg:col-span-6',
    },
  ];

  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden'>
      {/* Background Accents */}
      <div className='absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2' />

      <div className='container mx-auto relative z-10'>
        <div className='max-w-3xl mb-16 space-y-4'>
          <div 
            data-aos='fade-down'
            className='inline-block px-4 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold font-heading uppercase tracking-wider'
          >
            {t('badge')}
          </div>
          <h2 
            data-aos='fade-right'
            className='text-4xl md:text-5xl font-heading font-bold text-foreground'
          >
            {t('title')}
          </h2>
          <p 
            data-aos='fade-up'
            data-aos-delay='200'
            className='text-xl text-muted-foreground font-sans'
          >
            {t('description')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className={`${service.span} group relative p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden`}
            >
              {/* Hover Background Effect */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/40 to-transparent rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700' />

              <div className='space-y-6 relative z-10'>
                <div
                  className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {service.icon}
                </div>

                <div className='space-y-3'>
                  <h3 className='text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed font-sans'>
                    {service.description}
                  </p>
                </div>
              </div>

              <div className='mt-8 flex items-center justify-between relative z-10'>
                <button className='text-sm font-bold font-heading text-primary flex items-center gap-1 group/btn'>
                  {t('learnMore')}
                  <ArrowUpRight className='w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform' />
                </button>

                {/* Decorative Number */}
                <span className='text-5xl font-heading font-black text-foreground/25 select-none group-hover:text-primary/50 transition-colors'>
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
