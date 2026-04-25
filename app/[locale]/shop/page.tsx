'use client';

import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopMainPage() {
  const products = [
    {
      id: 'parent-guide',
      name: 'The Obimi Parent Guide (2026 Edition)',
      desc: 'Practical advice and clear guidance for navigating the SEND journey.',
      image:
        'https://blackwomenrisinguk.org/wp-content/uploads/2025/06/04-BWR-Tshirt.png',
      tag: 'Essential',
    },
    {
      id: 'awareness-tshirt',
      name: 'Obimi Awareness T-Shirt',
      desc: 'Wear your support and help us spread awareness for SEND families.',
      image:
        'https://blackwomenrisinguk.org/wp-content/uploads/2025/06/04-BWR-Tshirt.png',
      tag: 'Community',
    },
    {
      id: 'tote-bag',
      name: 'Obimi Tote Bag',
      desc: 'A durable, eco-friendly bag for your everyday essentials.',
      image:
        'https://blackwomenrisinguk.org/wp-content/uploads/2025/06/04-BWR-Tshirt.png',
      tag: 'Eco-friendly',
    },
    {
      id: 'digital-pack',
      name: 'Digital Resource Pack',
      desc: 'Instant access to templates, checklists, and guides.',
      image:
        'https://blackwomenrisinguk.org/wp-content/uploads/2025/06/04-BWR-Tshirt.png',
      tag: 'Digital',
    },
  ];

  const impactPoints = [
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Free Resources',
      desc: 'Providing free guides for parents who need them most.',
      color: 'bg-brand-purple/10 text-brand-purple',
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: 'Community Sessions',
      desc: 'Running support groups and workshops for families.',
      color: 'bg-brand-yellow/20 text-brand-yellow-dark',
    },
    {
      icon: <ShieldCheck className='w-8 h-8' />,
      title: 'Safe Spaces',
      desc: 'Creating environments where every parent feels heard.',
      color: 'bg-brand-purple/10 text-brand-purple',
    },
    {
      icon: <Heart className='w-8 h-8' />,
      title: 'Reaching Families',
      desc: 'Supporting underserved communities across the country.',
      color: 'bg-brand-yellow/20 text-brand-yellow-dark',
    },
  ];

  return (
    <div className='bg-white min-h-screen pt-32 pb-24'>
      {/* Hero Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-24'>
        <div className='relative bg-brand-deep rounded-[4rem] p-12 md:p-24 overflow-hidden'>
          {/* Background Decorative Elements */}
          <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2' />
          <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2' />

          <div className='relative z-10 max-w-3xl'>
            <div data-aos='fade-down' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow text-sm font-bold mb-8'>
              <ShoppingBag className='w-4 h-4' />
              <span>Shop With Purpose</span>
            </div>
            <h1 data-aos='fade-right' className='text-5xl md:text-7xl font-bold font-heading text-white mb-8 leading-[1.1]'>
              Every purchase{' '}
              <span className='text-brand-yellow'>makes an impact</span>.
            </h1>
            <p data-aos='fade-right' data-aos-delay='200' className='text-xl text-white/70 leading-relaxed mb-12'>
              When you shop with Obimi, you're not just buying — you're helping
              us reach more parents, provide resources, and build a stronger
              community.
            </p>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-wrap gap-4'>
              <button className='px-10 py-5 bg-accent text-brand-deep font-bold rounded-full hover:bg-white transition-all flex items-center gap-3 group'>
                <span>Browse Products</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
              <button className='px-10 py-5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/10'>
                Support Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div data-aos='fade-up' className='flex items-center gap-3 mb-16'>
          <div className='w-12 h-1 bg-brand-purple rounded-full' />
          <h2 className='text-3xl font-bold font-heading text-brand-deep'>
            Featured Products
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              data-aos='fade-up'
              data-aos-delay={idx * 100}
              className='group flex flex-col'
            >
              <div className='relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-100 mb-6'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-deep shadow-sm'>
                  {product.tag}
                </div>
                <div className='absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/10 transition-colors duration-500' />
              </div>
              <div className='px-2'>
                <h3 className='text-xl font-bold font-heading text-brand-deep mb-2 group-hover:text-brand-purple transition-colors'>
                  {product.name}
                </h3>
                <p className='text-gray-500 text-sm mb-4 line-clamp-2'>
                  {product.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Your Purchase Matters - Redesigned Unique Layout */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12 mb-32'>
        <div className='relative bg-background rounded-[4rem] p-12 md:p-24 overflow-hidden border border-gray-100'>
          {/* Decorative background text */}
          <div data-aos='fade-down' className='absolute -top-10 -right-10 text-[12rem] font-bold text-accent select-none pointer-events-none font-heading'>
            IMPACT
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10'>
            <div className='lg:col-span-5'>
              <div data-aos='fade-down' className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-deep/5 text-brand-purple text-sm font-bold mb-6'>
                <Sparkles className='w-4 h-4' />
                <span>Purpose-Driven Shop</span>
              </div>
              <h2 data-aos='fade-right' className='text-4xl md:text-6xl font-bold font-heading text-brand-deep mb-8 leading-tight'>
                Why Your <span className='text-brand-purple'>Purchase</span>{' '}
                Matters
              </h2>
              <p data-aos='fade-right' data-aos-delay='200' className='text-xl text-gray-600 leading-relaxed mb-10'>
                Every purchase turns into real-world impact for SEND families.
                We don't just sell products; we build bridges to support.
              </p>

              <div className='space-y-6'>
                <div className='flex items-center gap-4 p-6 bg-white rounded-full shadow-sm border border-gray-100'>
                  <div className='w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0'>
                    <CheckCircle2 className='w-6 h-6' />
                  </div>
                  <p className='font-bold text-brand-deep'>
                    100% of proceeds go back to the community
                  </p>
                </div>
                <div className='flex items-center gap-4 p-6 bg-white rounded-full shadow-sm border border-gray-100'>
                  <div className='w-12 h-12 rounded-full bg-brand-deep/20 text-brand-deep flex items-center justify-center flex-shrink-0'>
                    <CheckCircle2 className='w-6 h-6' />
                  </div>
                  <p className='font-bold text-brand-deep'>
                    Directly funding free resources for parents
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-7'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {impactPoints.map((point, idx) => (
                  <div
                    key={idx}
                    data-aos='fade-up'
                    data-aos-delay={idx * 100}
                    className={`p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                      idx % 2 === 0
                        ? 'bg-accent shadow-sm border border-gray-100'
                        : 'bg-brand-deep text-white'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 ${
                        idx % 2 === 0 ? point.color : 'bg-white/10 text-accent'
                      }`}
                    >
                      {point.icon}
                    </div>
                    <h4
                      className={`text-2xl font-bold font-heading mb-4 ${
                        idx % 2 === 0 ? 'text-brand-deep' : 'text-white'
                      }`}
                    >
                      {point.title}
                    </h4>
                    <p
                      className={
                        idx % 2 === 0 ? 'text-gray-500' : 'text-white/60'
                      }
                    >
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className='max-w-[1440px] mx-auto px-6 md:px-12'>
        <div data-aos='zoom-in' className='bg-brand-yellow rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl md:text-4xl font-bold font-heading text-brand-deep mb-4'>
              Want to Support Without Buying?
            </h2>
            <p className='text-brand-deep/70 text-lg font-medium'>
              You don’t need to purchase an item to make an impact. Your support
              helps us continue this work.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='https://www.paypal.com/ncp/payment/MQG6ZVX59QCSY'
              className='px-10 py-5 bg-brand-deep text-white font-bold rounded-full hover:bg-brand-purple transition-all flex items-center gap-3 group shadow-xl shadow-brand-deep/10'
            >
              <span>Donate Now</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
