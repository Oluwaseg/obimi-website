'use client';

import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Database,
  Eye,
  Lock,
  Mail,
  Share2,
  Shield,
  UserCheck,
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'who-we-are',
      title: '1. Who We Are',
      icon: <UserCheck className='w-5 h-5' />,
    },
    {
      id: 'info-collect',
      title: '2. Information We Collect',
      icon: <Database className='w-5 h-5' />,
    },
    {
      id: 'how-use',
      title: '3. How We Use Your Data',
      icon: <Eye className='w-5 h-5' />,
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis',
      icon: <Shield className='w-5 h-5' />,
    },
    {
      id: 'sharing',
      title: '5. Sharing Your Data',
      icon: <Share2 className='w-5 h-5' />,
    },
    {
      id: 'retention',
      title: '6. Data Retention',
      icon: <Clock className='w-5 h-5' />,
    },
    {
      id: 'rights',
      title: '7. Your Rights',
      icon: <Lock className='w-5 h-5' />,
    },
    {
      id: 'cookies',
      title: '8. Cookies',
      icon: <Database className='w-5 h-5' />,
    },
    {
      id: 'security',
      title: '9. Security',
      icon: <Shield className='w-5 h-5' />,
    },
    { id: 'contact', title: '10. Contact', icon: <Mail className='w-5 h-5' /> },
  ];

  return (
    <div className='bg-white min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-16'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-gray-500 hover:text-brand-purple font-bold mb-8 transition-colors group'
        >
          <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
          <span>Back to Home</span>
        </Link>

        <div className='max-w-4xl'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/5 text-brand-purple text-sm font-bold mb-6'>
            <Shield className='w-4 h-4' />
            <span>Privacy Policy</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold font-heading text-brand-deep mb-8 leading-[1.1]'>
            Your Privacy <span className='text-brand-purple'>Matters</span>.
          </h1>
          <div className='flex flex-wrap items-center gap-6 text-gray-500 font-medium'>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-brand-purple' />
              <span>Effective Date: September 16, 2025</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-brand-purple' />
              <span>Last Updated: September 16, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
          {/* Sidebar Navigation */}
          <aside className='hidden lg:block lg:col-span-4'>
            <div className='sticky top-32 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100'>
              <h4 className='text-xl font-bold font-heading text-brand-deep mb-6'>
                Contents
              </h4>
              <nav className='space-y-2'>
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className='flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-white hover:text-brand-purple hover:shadow-sm transition-all group'
                  >
                    <span className='text-gray-300 group-hover:text-brand-purple transition-colors'>
                      {section.icon}
                    </span>
                    <span className='font-bold text-sm'>{section.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <div className='lg:col-span-8'>
            <div className='bg-brand-purple/5 p-8 md:p-10 rounded-[2.5rem] mb-16 border-l-4 border-brand-purple'>
              <p className='text-xl text-brand-deep font-medium leading-relaxed italic'>
                "At Obimi, we are committed to protecting your privacy. This
                policy explains how we collect, use, and safeguard your personal
                information when you use our website or services."
              </p>
            </div>

            <div className='space-y-16'>
              {/* Section 1 */}
              <section id='who-we-are' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center'>
                    1
                  </span>
                  Who We Are
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>
                    Obimi is a community initiative supporting parents and
                    caregivers of children with additional educational needs.
                  </p>
                  <ul className='list-none space-y-2 mt-4'>
                    <li className='flex items-center gap-2'>
                      <span className='font-bold text-brand-deep'>
                        Website:
                      </span>{' '}
                      obimi.org
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='font-bold text-brand-deep'>Email:</span>{' '}
                      info@obimii.com
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id='info-collect' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center'>
                    2
                  </span>
                  Information We Collect
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>We may collect the following information:</p>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    {[
                      'Personal details (name, email, phone number)',
                      'Event registrations',
                      'Newsletter subscriptions',
                      'Messages you send us',
                      'Website usage data (cookies, analytics)',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100'
                      >
                        <div className='w-2 h-2 rounded-full bg-brand-purple' />
                        <span className='font-medium'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id='how-use' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center'>
                    3
                  </span>
                  How We Use Your Data
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>We use your data to:</p>
                  <ul className='space-y-4 mt-6'>
                    {[
                      'Register you for events and support services',
                      'Send updates and resources',
                      'Respond to enquiries',
                      'Improve our website and services',
                      'Meet legal requirements',
                    ].map((item, i) => (
                      <li key={i} className='flex items-center gap-4 text-lg'>
                        <ChevronRight className='w-5 h-5 text-brand-purple' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id='sharing' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center'>
                    5
                  </span>
                  Sharing Your Data
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <div className='p-6 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/20 mb-8'>
                    <p className='text-brand-deep font-bold text-xl mb-0'>
                      We do not sell your data.
                    </p>
                  </div>
                  <p>We may share it with:</p>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    {[
                      'Event platforms (e.g. Eventbrite)',
                      'Email providers (e.g. Mailchimp)',
                      'Service providers supporting our website',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100'
                      >
                        <div className='w-2 h-2 rounded-full bg-brand-yellow' />
                        <span className='font-medium'>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className='mt-8 italic text-gray-500'>
                    All partners must protect your data.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id='rights' className='scroll-mt-32'>
                <h2 className='text-3xl font-bold font-heading text-brand-deep mb-6 flex items-center gap-4'>
                  <span className='w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center'>
                    7
                  </span>
                  Your Rights
                </h2>
                <div className='prose prose-lg max-w-none text-gray-600 leading-relaxed'>
                  <p>You have the right to:</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    {[
                      { title: 'Access', desc: 'Request a copy of your data' },
                      {
                        title: 'Correction',
                        desc: 'Request corrections or deletion',
                      },
                      {
                        title: 'Withdraw',
                        desc: 'Withdraw your consent at any time',
                      },
                      { title: 'Object', desc: 'Object to data processing' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className='p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow'
                      >
                        <h4 className='text-brand-purple font-bold mb-2'>
                          {item.title}
                        </h4>
                        <p className='text-sm text-gray-500 mb-0'>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100'>
                    <p className='text-sm mb-0'>
                      File a complaint with the UK ICO:{' '}
                      <Link
                        href='https://www.ico.org.uk'
                        className='text-brand-purple font-bold underline'
                      >
                        www.ico.org.uk
                      </Link>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id='contact' className='scroll-mt-32'>
                <div className='p-10 bg-brand-deep rounded-[3rem] text-white relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
                  <div className='relative z-10'>
                    <h2 className='text-3xl font-bold font-heading mb-6'>
                      Questions?
                    </h2>
                    <p className='text-xl text-white/70 mb-8'>
                      If you have any questions about this policy or how we
                      handle your data, please reach out.
                    </p>
                    <Link
                      href='mailto:info@obimii.com'
                      className='inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow text-brand-deep font-bold rounded-full hover:bg-white transition-all'
                    >
                      <Mail className='w-5 h-5' />
                      <span>info@obimii.com</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
