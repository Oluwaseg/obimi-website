'use client';

import { IMAGES } from '@/constants';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  Handshake,
  Heart,
  Megaphone,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Support = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/contact');
  };

  const handleDonateClick = () => {
    router.push('https://www.paypal.com/ncp/payment/MQG6ZVX59QCSY');
  };

  const impactPoints = [
    {
      title: 'Create Free Resources',
      description: 'Helping parents understand their rights and take action.',
      icon: <FileText className='w-6 h-6 text-primary' />,
    },
    {
      title: 'Support Safe Communities',
      description: 'Providing spaces where parents can connect and share.',
      icon: <Users className='w-6 h-6 text-accent-foreground' />,
    },
    {
      title: 'Host Events & Workshops',
      description: 'Bringing families and experts together globally.',
      icon: <Globe className='w-6 h-6 text-secondary-foreground' />,
    },
    {
      title: 'Provide Affordable Support',
      description: 'Making guidance accessible to families who need it most.',
      icon: <Heart className='w-6 h-6 text-primary' />,
    },
    {
      title: 'Expand Our Reach',
      description: 'Connecting with underserved communities worldwide.',
      icon: <Megaphone className='w-6 h-6 text-accent-foreground' />,
    },
  ];

  const volunteerSkills = [
    'Content / Writing',
    'Social Media',
    'Design',
    'Legal / Policy',
    'Events',
  ];

  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 bg-primary text-white overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary rounded-full blur-[120px]' />
          <div className='absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent rounded-full blur-[120px]' />
        </div>

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
          <div className='space-y-8'>
            <div
              data-aos='fade-down'
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold font-heading uppercase tracking-wider'
            >
              <Heart className='w-4 h-4' />
              <span>{'Support Our Mission'}</span>
            </div>
            <h1
              data-aos='fade-right'
              className='text-5xl md:text-7xl font-heading font-bold leading-tight'
            >
              {'Support Obimi.'} <br />
              <span className='text-accent'>{'Empower Families.'}</span>
            </h1>
            <p
              data-aos='fade-right'
              data-aos-delay='200'
              className='text-xl md:text-2xl text-white/80 font-sans leading-relaxed max-w-xl'
            >
              {'Your support helps parents and caregivers navigate the SEND journey with confidence, clarity, and community.'}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={handleDonateClick}
                className='group px-10 py-5 bg-accent text-accent-foreground rounded-full font-heading font-bold text-xl shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3'
              >
                <span>{'Donate Now'}</span>
                <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
              </button>
              <button
                onClick={handleCTAClick}
                className='px-10 py-5 bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 rounded-full font-heading font-bold text-xl transition-all flex items-center justify-center gap-3'
              >
                <span>{'Get Involved'}</span>
              </button>
            </div>
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='300'
            className='relative hidden lg:block'
          >
            <div className='aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10 relative group'>
              <Image
                src={IMAGES.EVENT_C}
                alt='Impact'
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-ring/30 to-transparent flex items-end p-12'>
                <p className='text-2xl font-heading font-bold italic'>
                  "{'Obimi exists to ensure no parent has to walk that journey alone.'}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24'>
        <div className='container mx-auto'>
          <div
            data-aos='fade-up'
            className='text-center max-w-3xl mx-auto mb-20 space-y-6'
          >
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {'How Your Support Makes a Difference'}
            </h2>
            <p className='text-lg text-muted-foreground font-sans'>
              {'Every contribution directly impacts the lives of SEND families globally.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {impactPoints.map((point, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={index * 100}
                className='group p-8 rounded-[3rem] bg-primary/10 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 space-y-6'
              >
                <div className='w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors'>
                  {point.icon}
                </div>
                <div className='space-y-3'>
                  <h3 className='text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                    {point.title}
                  </h3>
                  <p className='text-muted-foreground font-sans leading-relaxed'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 '>
        <div className='container mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-20 space-y-4'>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              {'Ways You Can Help'}
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Donation Card */}
            <div
              data-aos='fade-up'
              className='p-10 rounded-[4rem] bg-primary/5 border-2 border-primary/10 space-y-8 flex flex-col justify-between'
            >
              <div className='space-y-6'>
                <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20'>
                  <Heart className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-heading font-bold text-foreground'>
                  {'Make a Donation'}
                </h3>
                <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                  {'Your contribution directly supports families and keeps our resources accessible.'}
                </p>
                <div className='flex flex-wrap gap-3'>
                  <span className='px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-bold text-sm'>
                    {'One-time donation'}
                  </span>
                  <span className='px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-bold text-sm'>
                    {'Monthly support'}
                  </span>
                </div>
              </div>
              <button
                onClick={handleDonateClick}
                className='w-full py-5 bg-primary text-primary-foreground rounded-full font-heading font-bold text-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:-translate-y-1'
              >
                {'Donate Now'}
              </button>
            </div>

            {/* Volunteer Card */}
            <div
              data-aos='fade-up'
              data-aos-delay='100'
              className='p-10 rounded-[4rem] bg-accent/5 border-2 border-accent/10 space-y-8 flex flex-col justify-between'
            >
              <div className='space-y-6'>
                <div className='w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20'>
                  <Users className='w-8 h-8 text-accent-foreground' />
                </div>
                <h3 className='text-3xl font-heading font-bold text-foreground'>
                  {'Volunteer Your Skills'}
                </h3>
                <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                  {"Use your skills to make a real impact. We're looking for help in:"}
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {volunteerSkills.map((skill) => (
                    <div
                      key={skill}
                      className='flex items-center gap-2 text-muted-foreground font-sans'
                    >
                      <CheckCircle2 className='w-4 h-4 text-accent' />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleCTAClick}
                className='w-full py-5 bg-accent text-accent-foreground rounded-full font-heading font-bold text-xl shadow-lg shadow-accent/20 hover:shadow-xl transition-all hover:-translate-y-1'
              >
                {'Join as a Volunteer'}
              </button>
            </div>

            {/* Partner Card */}
            <div
              data-aos='fade-up'
              data-aos-delay='200'
              className='p-10 rounded-[4rem] bg-secondary/10 border-2 border-secondary/20 space-y-8 flex flex-col justify-between'
            >
              <div className='space-y-6'>
                <div className='w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20'>
                  <Handshake className='w-8 h-8 text-secondary-foreground' />
                </div>
                <h3 className='text-3xl font-heading font-bold text-foreground'>
                  {'Partner With Us'}
                </h3>
                <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                  {'Collaborate with us to create meaningful impact and reach more families globally.'}
                </p>
              </div>
              <button
                onClick={handleCTAClick}
                className='w-full py-5 bg-secondary text-secondary-foreground rounded-full font-heading font-bold text-xl shadow-lg shadow-secondary/20 hover:shadow-xl transition-all hover:-translate-y-1'
              >
                {'Become a Partner'}
              </button>
            </div>

            {/* Spread the Word Card */}
            <div
              data-aos='fade-up'
              data-aos-delay='300'
              className='p-10 rounded-[4rem] bg-ring/5 border-2 border-ring/10 space-y-8 flex flex-col justify-between'
            >
              <div className='space-y-6'>
                <div className='w-16 h-16 rounded-full bg-ring flex items-center justify-center shadow-lg shadow-ring/20'>
                  <Share2 className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-3xl font-heading font-bold text-foreground'>
                  {'Spread the Word'}
                </h3>
                <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                  {'Help us reach more families by sharing our mission with your network.'}
                </p>
                <ul className='space-y-3 text-muted-foreground font-sans'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 className='w-4 h-4 text-ring' />{' '}
                    {'Share on social media'}
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 className='w-4 h-4 text-ring' />{' '}
                    {'Tell someone who needs support'}
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 className='w-4 h-4 text-ring' />{' '}
                    {'Introduce Obimi to your network'}
                  </li>
                </ul>
              </div>
              <button
                onClick={handleCTAClick}
                className='w-full py-5 bg-ring text-white rounded-full font-heading font-bold text-xl shadow-lg shadow-ring/20 hover:shadow-xl transition-all hover:-translate-y-1'
              >
                {'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground text-center rounded-t-[5rem] md:rounded-t-[10rem]'>
        <div className='container mx-auto max-w-4xl space-y-12'>
          <div
            data-aos='zoom-in'
            className='w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto'
          >
            <Sparkles className='w-12 h-12 text-accent' />
          </div>
          <h2
            data-aos='fade-up'
            data-aos-delay='200'
            className='text-4xl md:text-6xl font-heading font-bold leading-tight'
          >
            {'Together, we can ensure no parent walks the SEND journey alone.'}
          </h2>
          <div className='flex flex-col sm:flex-row gap-6 justify-center pt-8'>
            <button
              onClick={handleDonateClick}
              className='px-12 py-6 bg-accent text-accent-foreground rounded-full font-heading font-bold text-2xl shadow-2xl hover:shadow-accent/40 transition-all hover:-translate-y-2'
            >
              {'Donate Now'}
            </button>
            <button
              onClick={handleCTAClick}
              className='px-12 py-6 bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 rounded-full font-heading font-bold text-2xl transition-all hover:-translate-y-2'
            >
              {'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
