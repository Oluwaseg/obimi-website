import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <main className='min-h-screen bg-white'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-40 pb-24 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                  Empowering Parents and Caregivers
                </h1>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Navigating the SEND journey doesn&apos;t have to be
                  overwhelming. Expert guidance, community support, and
                  practical resources—all in one place.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <button className='px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200'>
                  Start Exploring
                </button>
                <button className='px-8 py-3.5 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200'>
                  {t('learnMore')}
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className='hidden lg:block'>
              <div className='relative h-96 bg-gradient-to-br from-purple-100 via-purple-50 to-yellow-50 rounded-2xl flex items-center justify-center'>
                <div className='text-center space-y-2'>
                  <div className='text-6xl'>🤝</div>
                  <p className='text-purple-700 font-semibold'>
                    Community Driven
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              How We Can Help
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive support across all aspects of your SEND journey
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                title: 'Education Support',
                desc: 'EHCP guidance from start to finish',
                icon: '📚',
              },
              {
                title: 'Health Navigation',
                desc: 'Coordinate diagnoses and therapies',
                icon: '⚕️',
              },
              {
                title: 'Social Care & Benefits',
                desc: 'DLA and local authority support',
                icon: '💼',
              },
              {
                title: 'Community Forums',
                desc: 'Private forums and support groups',
                icon: '💬',
              },
              {
                title: 'Parent Wellbeing',
                desc: 'Resources for your own mental health',
                icon: '🧘',
              },
              {
                title: 'Consultancy',
                desc: 'Professional training and speaking',
                icon: '🎓',
              },
            ].map((service) => (
              <div
                key={service.title}
                className='bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group'
              >
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-600'>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h2 className='text-4xl font-bold text-white'>Join Our Community</h2>
          <p className='text-lg text-purple-100'>
            Connect with thousands of parents and caregivers navigating SEND
            support
          </p>
          <button className='px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 inline-block'>
            {t('getStarted')}
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
