import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import {
  ArrowRight,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const MissionPage = () => {
  const t = useTranslations('Mission');

  const supportBlocks = [
    {
      title: t('block1Title'),
      description: t('block1Description'),
      icon: <Heart className='w-8 h-8 text-primary' />,
      bg: 'bg-primary/5',
    },
    {
      title: t('block2Title'),
      description: t('block2Description'),
      icon: <Lightbulb className='w-8 h-8 text-accent-foreground' />,
      bg: 'bg-accent/10',
    },
    {
      title: t('block3Title'),
      description: t('block3Description'),
      icon: <ShieldCheck className='w-8 h-8 text-secondary-foreground' />,
      bg: 'bg-secondary/20',
    },
    {
      title: t('block4Title'),
      description: t('block4Description'),
      icon: <Users className='w-8 h-8 text-brand-deep' />,
      bg: 'bg-brand-deep/5',
    },
  ];

  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[10rem] -z-10' />
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
              <Sparkles className='w-4 h-4' />
              <span>{t('badge')}</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'>
              {t('title')}{' '}
              <span className='text-primary'>{t('titleHighlight')}</span>
            </h1>
            <p className='text-2xl text-foreground font-sans leading-relaxed font-medium'>
              {t('heroDescription')}
            </p>
            <div className='p-6 border-l-4 border-primary bg-muted/30 rounded-r-3xl'>
              <p className='text-lg text-muted-foreground font-sans italic'>
                "{t('quote')}"
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-background rotate-3 hover:rotate-0 transition-transform duration-500'>
              <img
                src='https://obimi.org/wp-content/uploads/2025/09/Picz1.jpg'
                alt='Supportive Community'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Floating Badge */}
            <div className='absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-8 rounded-[2.5rem] shadow-xl max-w-[240px] -rotate-6'>
              <p className='font-heading font-bold text-xl leading-tight'>
                {t('floatingBadge')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/20'>
        <div className='container mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {t('sectionTitle')}
            </h2>
            <p className='text-lg text-muted-foreground font-sans'>
              {t('sectionDescription')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {supportBlocks.map((block, index) => (
              <div
                key={index}
                className='group p-8 rounded-[3rem] bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-6'
              >
                <div
                  className={`w-20 h-20 rounded-full ${block.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {block.icon}
                </div>
                <h3 className='text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                  {block.title}
                </h3>
                <p className='text-muted-foreground font-sans leading-relaxed'>
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden'>
        <div className='container mx-auto max-w-4xl text-center space-y-12 relative z-10'>
          <div className='w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8'>
            <Heart className='w-12 h-12 text-primary fill-primary/20' />
          </div>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-foreground leading-relaxed'>
            "{t('closingMessage')}"
          </h2>
        </div>
        {/* Decorative Blobs */}
        <div className='absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2' />
      </section>

      {/* Vision Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-secondary text-white rounded-t-[5rem] md:rounded-t-[10rem]'>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <h2 className='text-4xl md:text-6xl font-heading font-bold'>
              {t('visionTitle')}
            </h2>
            <p className='text-xl md:text-2xl text-white/80 font-sans leading-relaxed'>
              {t('visionDescription')}
            </p>
            <button className='group px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-heading font-bold text-xl shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1 flex items-center gap-3'>
              <span>{t('cta')}</span>
              <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='aspect-[3/4] rounded-3xl overflow-hidden mt-12'>
              <img
                src='https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop'
                alt='Vision 1'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='aspect-[3/4] rounded-3xl overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600&auto=format&fit=crop'
                alt='Vision 2'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionPage;
