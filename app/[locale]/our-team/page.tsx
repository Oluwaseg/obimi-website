'use client';

import {
  ArrowRight,
  Heart,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

export default function OurTeamPage() {
  const coreTeam = [
    {
      name: 'Team Member Name',
      role: 'Community Support',
      bio: 'Supporting families through guidance, resources, and community engagement.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Team Member Name',
      role: 'Operations',
      bio: 'Ensuring our services run smoothly to provide the best support for SEND families.',
      image: '/api/placeholder/400/400',
    },
    {
      name: 'Team Member Name',
      role: 'Volunteer Coordinator',
      bio: 'Building a network of passionate individuals dedicated to the Obimi mission.',
      image: '/api/placeholder/400/400',
    },
  ];

  return (
    <div className='bg-white min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-24'>
        <div className='max-w-3xl'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/5 text-brand-purple text-sm font-bold mb-6'>
            <Users className='w-4 h-4' />
            <span>Our Team</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'>
            Meet the people{' '}
            <span className='text-brand-purple'>behind Obimi</span>.
          </h1>
          <p className='text-xl text-gray-600 leading-relaxed'>
            A passionate team dedicated to supporting parents and caregivers
            every step of the way.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='flex items-center gap-3 mb-12'>
          <div className='w-12 h-1 bg-brand-yellow rounded-full' />
          <h2 className='text-3xl font-bold font-heading text-brand-deep'>
            Founder
          </h2>
        </div>

        <div className='group relative bg-brand-deep rounded-[4rem] overflow-hidden'>
          {/* Background Decorative Elements */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2' />
          <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2' />

          <div className='relative z-10 flex flex-col lg:flex-row items-center'>
            {/* Founder Image Container */}
            <div className='w-full lg:w-1/2 p-8 lg:p-12'>
              <div className='relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 group-hover:border-brand-yellow/30 transition-colors duration-500'>
                <Image
                  src='/api/placeholder/800/800'
                  alt='Founder Name'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>

            {/* Founder Content */}
            <div className='w-full lg:w-1/2 p-8 lg:p-20 lg:pl-0'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow text-sm font-bold mb-6'>
                <Sparkles className='w-4 h-4' />
                <span>Lived Experience & Expertise</span>
              </div>
              <h3 className='text-4xl md:text-5xl font-bold font-heading text-white mb-4'>
                Founder Name
              </h3>
              <p className='text-xl text-brand-yellow font-bold mb-8'>
                Founder & Social Worker
              </p>

              <div className='space-y-6 text-lg text-white/70 leading-relaxed mb-10'>
                <p>
                  Obimi was founded by a SEND parent and social worker who
                  understands the challenges families face firsthand.
                </p>
                <p>
                  Her mission is to ensure no parent feels alone navigating the
                  SEND journey, combining professional expertise with the deep
                  understanding of lived experience.
                </p>
              </div>

              <div className='flex items-center gap-4'>
                <Link
                  href='https://web.facebook.com/profile.php?id=61579146742661#'
                  className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-deep transition-all'
                >
                  <FaFacebook className='w-5 h-5' />
                </Link>
                <Link
                  href='mailto:info@obimii.com'
                  className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-deep transition-all'
                >
                  <Mail className='w-5 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='flex items-center gap-3 mb-16'>
          <div className='w-12 h-1 bg-brand-purple rounded-full' />
          <h2 className='text-3xl font-bold font-heading text-brand-deep'>
            Our Team
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {coreTeam.map((member, idx) => (
            <div
              key={idx}
              className='group p-8 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500'
            >
              <div className='relative w-full aspect-square rounded-[2.5rem] overflow-hidden mb-8'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
              </div>
              <h3 className='text-2xl font-bold font-heading text-brand-deep mb-2'>
                {member.name}
              </h3>
              <p className='text-brand-purple font-bold mb-4'>{member.role}</p>
              <p className='text-gray-500 leading-relaxed'>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Support Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='bg-brand-purple/5 rounded-[4rem] p-12 md:p-20 border border-brand-purple/10 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

          <div className='relative z-10 max-w-4xl'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-12 h-1 bg-brand-purple rounded-full' />
              <h2 className='text-3xl font-bold font-heading text-brand-deep'>
                Our Community
              </h2>
            </div>
            <p className='text-2xl md:text-3xl text-brand-deep font-medium leading-relaxed mb-12'>
              Obimi is supported by a growing network of parents, caregivers,
              and professionals who contribute their time, knowledge, and lived
              experience to support others.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-purple shadow-sm flex-shrink-0'>
                  <Heart className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-brand-deep mb-2'>
                    Lived Experience
                  </h4>
                  <p className='text-gray-600'>
                    Parents sharing real-world insights that only those on the
                    journey truly understand.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-purple shadow-sm flex-shrink-0'>
                  <ShieldCheck className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='text-xl font-bold text-brand-deep mb-2'>
                    Professional Support
                  </h4>
                  <p className='text-gray-600'>
                    Experts providing guidance on education, health, and social
                    care systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='bg-brand-yellow rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-4'>
              Want to be part of the Obimi community?
            </h2>
            <p className='text-brand-deep/70 text-lg font-medium'>
              Join us in making a difference for SEND families.
            </p>
          </div>
          <Link
            href='/get-involved'
            className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-purple transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
          >
            <span>Get Involved</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </section>
    </div>
  );
}
