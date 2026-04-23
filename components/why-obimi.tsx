import { ArrowRight, Heart, LayoutGrid, Lightbulb, Users } from 'lucide-react';

/**
 * Why Obimi Section
 * Built with Next.js and Tailwind CSS v4
 *
 * Design Concept:
 * - High-trust layout with a featured video.
 * - Value cards that use a "grid-within-grid" approach.
 * - Intentional video placement that feels integrated, not decorative.
 */

const values = [
  {
    title: 'By SEND Parents & Caregivers',
    description:
      'Built from real experience, so you get support that truly understands your challenges.',
    icon: <Heart className='w-6 h-6 text-primary' />,
  },
  {
    title: 'Clear, Actionable Guidance',
    description:
      'We break down complex systems into simple steps you can actually follow.',
    icon: <Lightbulb className='w-6 h-6 text-accent-foreground' />,
  },
  {
    title: 'All-in-One Support',
    description:
      'From education to health to social care, everything you need is in one place.',
    icon: <LayoutGrid className='w-6 h-6 text-secondary-foreground' />,
  },
  {
    title: 'A Community That Cares',
    description:
      'Connect with others who understand your journey and support you every step of the way.',
    icon: <Users className='w-6 h-6 text-brand-deep' />,
  },
];

const WhyObimi = () => {
  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-muted/30 relative overflow-hidden'>
      <div className='container mx-auto relative z-10'>
        {/* Section Header */}
        <div className='max-w-3xl mb-20 space-y-6'>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
            Why Obimi
          </h2>
          <p className='text-xl text-muted-foreground font-sans leading-relaxed'>
            Obimi was created by people who understand the journey firsthand. We
            combine{' '}
            <span className='text-primary font-bold'>lived experience</span>{' '}
            with practical support to help you navigate every step with clarity
            and confidence.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
          {/* Left: Video Section (7 cols) */}
          <div className='lg:col-span-7 space-y-6'>
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
                  Watch Our Story
                </span>
              </div>
            </div>

            <p className='text-sm text-muted-foreground font-heading italic pl-4 border-l-2 border-primary/30'>
              Hear from our founder and community about how Obimi is making a
              difference.
            </p>
          </div>

          {/* Right: Value Cards (5 cols) */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='grid grid-cols-1 gap-6'>
              {values.map((value, index) => (
                <div
                  key={index}
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
                <span>Learn More About Us</span>
                <ArrowRight className='w-5 h-5' />
              </button>

              <button className='px-8 py-4 bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-full font-heading font-bold text-lg transition-all flex items-center justify-center gap-2'>
                <span>Join Our Community</span>
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
