'use client';
import {
  ArrowRight,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MissionPage = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/contact');
  };

  const supportBlocks = [
    {
      title: 'Wellbeing Support',
      description: 'Safe spaces, peer groups, and tools to help you take care of yourself.',
      icon: <Heart className='w-8 h-8 text-primary' />,
      bg: 'bg-primary/5',
    },
    {
      title: 'Practical Guidance',
      description: 'Clear, easy-to-understand resources on SEND processes and your rights.',
      icon: <Lightbulb className='w-8 h-8 text-accent-foreground' />,
      bg: 'bg-accent/10',
    },
    {
      title: 'Advocacy & Support',
      description: 'Standing with you as you navigate complex systems.',
      icon: <ShieldCheck className='w-8 h-8 text-secondary-foreground' />,
      bg: 'bg-secondary/20',
    },
    {
      title: 'Community Connection',
      description: 'Bringing parents together so no one feels alone.',
      icon: <Users className='w-8 h-8 text-brand-deep' />,
      bg: 'bg-brand-deep/5',
    },
  ];

  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[10rem] -z-10' />
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div
              data-aos='fade-down'
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'
            >
              <Sparkles className='w-4 h-4' />
              <span>{'Our Purpose'}</span>
            </div>
            <h1
              data-aos='fade-right'
              className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'
            >
              {'Our Mission'}{' '}
              <span className='text-primary'>{'Mission'}</span>
            </h1>
            <p
              data-aos='fade-up'
              data-aos-delay='200'
              className='text-2xl text-foreground font-sans leading-relaxed font-medium'
            >
              {'At Obimi, our mission is to support, empower, and connect parents and caregivers of children with additional needs.'}
            </p>
            <div
              data-aos='fade-up'
              data-aos-delay='300'
              className='p-6 border-l-4 border-primary bg-muted/30 rounded-r-3xl'
            >
              <p className='text-lg text-muted-foreground font-sans italic'>
                "{"Raising a child with SEND is deeply meaningful, but it can also be overwhelming and isolating. That's why we place parent wellbeing at the heart of everything we do."}"
              </p>
            </div>
          </div>
          <div className='relative'>
            <div
              data-aos='zoom-in'
              className='aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-background rotate-3 hover:rotate-0 transition-transform duration-500'
            >
              <img
                src='https://obimi.org/wp-content/uploads/2025/09/Picz1.jpg'
                alt='Supportive Community'
                className='w-full h-full object-cover'
              />
            </div>
            {/* Floating Badge */}
            <div
              data-aos='fade-left'
              data-aos-delay='400'
              className='absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-8 rounded-[2.5rem] shadow-xl max-w-[240px] -rotate-6'
            >
              <p className='font-heading font-bold text-xl leading-tight'>
                {'When parents are supported, families thrive.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/20'>
        <div className='container mx-auto'>
          <div
            data-aos='fade-up'
            className='text-center max-w-3xl mx-auto mb-16 space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {'How We Support You'}
            </h2>
            <p className='text-lg text-muted-foreground font-sans'>
              {'We provide holistic support across every stage of your journey.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {supportBlocks.map((block, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={index * 100}
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
          <div
            data-aos='zoom-in'
            className='w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8'
          >
            <Heart className='w-12 h-12 text-primary fill-primary/20' />
          </div>
          <h2
            data-aos='fade-up'
            data-aos-delay='200'
            className='text-3xl md:text-4xl font-heading font-bold text-foreground leading-relaxed'
          >
            "{'At Obimi, we remind every parent: your wellbeing matters too. Supporting you means strengthening the entire family.'}"
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
            <h2
              data-aos='fade-right'
              className='text-4xl md:text-6xl font-heading font-bold'
            >
              {'Our Vision'}
            </h2>
            <p
              data-aos='fade-right'
              data-aos-delay='200'
              className='text-xl md:text-2xl text-white/80 font-sans leading-relaxed'
            >
              {'A world where every SEND parent and caregiver feels confident, informed, and supported — able to advocate for their child and thrive as a family.'}
            </p>
            <button
              onClick={handleCTAClick}
              className='group px-10 py-5 bg-accent text-accent-foreground rounded-full font-heading font-bold text-xl shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1 flex items-center gap-3'
            >
              <span>{'Join Our Journey'}</span>
              <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div
              data-aos='fade-up'
              data-aos-delay='300'
              className='aspect-[3/4] rounded-3xl overflow-hidden mt-12'
            >
              <img
                src='https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop'
                alt='Vision 1'
                className='w-full h-full object-cover'
              />
            </div>
            <div
              data-aos='fade-up'
              data-aos-delay='400'
              className='aspect-[3/4] rounded-3xl overflow-hidden'
            >
              <img
                src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600&auto=format&fit=crop'
                alt='Vision 2'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
