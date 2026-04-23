import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react';

/**
 * Obimi Hero Section Component
 * Built with Next.js and Tailwind CSS v4
 *
 * Design Features:
 * - Asymmetric "Bento-style" grid for a modern, non-standard look.
 * - Organic blob shapes and floating elements to feel friendly and supportive.
 * - Uses Fredoka for headings and Manrope for body (as per theme).
 * - Interactive hover states and subtle animations.
 */

export function Hero() {
  return (
    <section className='relative min-h-[90vh] flex items-center overflow-hidden bg-background py-20 px-6 md:px-12 lg:px-24'>
      {/* Background Decorative Elements */}
      <div className='absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-3xl' />

      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10'>
        {/* Left Content Column (7 cols) */}
        <div className='lg:col-span-7 space-y-8'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 text-secondary-foreground text-sm font-medium animate-in fade-in slide-in-from-left-4 duration-700'>
            <Sparkles className='w-4 h-4 text-primary' />
            <span>Empowering SEND Families</span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-foreground tracking-tight'>
            Support for Parents <br />
            <span className='text-primary relative'>
              Raising Children
              <svg
                className='absolute -bottom-2 left-0 w-full h-3 text-accent/60'
                viewBox='0 0 100 10'
                preserveAspectRatio='none'
              >
                <path
                  d='M0 5 Q 25 0 50 5 T 100 5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                />
              </svg>
            </span>
            <span className='block'>with SEND</span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-sans'>
            Navigating education, health, and care systems can feel
            overwhelming.
            <span className='font-semibold text-foreground'> Obimi</span> gives
            you the guidance, resources, and community you need to support your
            child with confidence.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <button className='group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden'>
              <span className='relative z-10'>Get Support</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10' />
              <div className='absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
            </button>

            <button className='px-8 py-4 bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-2xl font-heading font-bold text-lg transition-all flex items-center justify-center gap-2'>
              <Users className='w-5 h-5' />
              <span>Join Community</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className='flex items-center gap-6 pt-8 border-t border-border/50'>
            <div className='flex -space-x-3'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden'
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt='User'
                  />
                </div>
              ))}
            </div>
            <p className='text-sm text-muted-foreground font-sans'>
              <span className='font-bold text-foreground'>500+</span> parents
              already joined
            </p>
          </div>
        </div>

        {/* Right Visual Column (5 cols) - Unique Bento/Organic Layout */}
        <div className='lg:col-span-5 relative'>
          <div className='relative grid grid-cols-2 gap-4'>
            {/* Main Large Image Card */}
            <div className='col-span-2 relative group'>
              <div className='absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000'></div>
              <div className='relative aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1000&auto=format&fit=crop'
                  alt='Happy family'
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              {/* Floating Badge 1 */}
              <div className='absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-xl rotate-12 animate-bounce-slow'>
                <Heart className='w-6 h-6 fill-current' />
              </div>
            </div>

            {/* Smaller Secondary Card */}
            <div className='relative aspect-square rounded-[2rem] overflow-hidden border-4 border-background shadow-xl -mt-12 z-20 group'>
              <img
                src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop'
                alt='Child playing'
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
            </div>

            {/* Info Card */}
            <div className='bg-secondary text-white p-6 rounded-[2rem] shadow-xl -mt-12 z-10 flex flex-col justify-center items-center text-center gap-2 border-4 border-background'>
              <div className='w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center'>
                <Users className='w-6 h-6 text-primary' />
              </div>
              <span className='text-2xl font-heading font-bold'>
                Expert Guidance
              </span>
              <span className='text-xs opacity-80 font-sans'>
                From SEND professionals
              </span>
            </div>
          </div>

          {/* Decorative Blobs */}
          <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none'>
            <svg
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-full fill-primary'
            >
              <path
                d='M44.7,-76.4C58.3,-69.2,70.1,-57.4,77.6,-43.3C85.1,-29.2,88.3,-12.8,86.4,3.1C84.5,19,77.5,34.4,67.4,47.4C57.3,60.4,44.1,71,29.4,76.4C14.7,81.8,-1.5,82,-17.6,78.5C-33.7,75,-49.7,67.8,-61.6,56.1C-73.5,44.4,-81.3,28.2,-83.5,11.6C-85.7,-5,-82.3,-22,-73.8,-36.1C-65.3,-50.2,-51.7,-61.4,-37.2,-68.1C-22.7,-74.8,-7.3,-77,8.7,-78.5C24.7,-80,44.7,-76.4Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
