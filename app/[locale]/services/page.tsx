import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  UserCircle,
  Users,
  Video,
} from 'lucide-react';

const services = [
  {
    id: 'parent-support',
    title: '1-to-1 Parent Navigation Sessions',
    text: 'Feeling stuck with applications, school decisions, or navigating the system? Our one-to-one sessions provide personalised guidance to help you move forward with clarity.',
    benefits: [
      'Review of documents and reports',
      'Help drafting emails and letters',
      'Preparation for meetings',
      'Clear action plan',
    ],
    cta: 'Book a Session',
    icon: <UserCircle className='w-10 h-10 text-primary' />,
    color: 'bg-primary/5 border-primary/20',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'workshops',
    title: 'Workshops & Webinars',
    text: 'Join practical, interactive sessions led by experts and experienced parents, with space to ask questions and learn in real time.',
    benefits: [
      'EHCP process',
      'DLA applications',
      'Sensory strategies',
      'Parent wellbeing',
    ],
    cta: 'View Upcoming Sessions',
    icon: <Video className='w-10 h-10 text-accent-foreground' />,
    color: 'bg-accent/10 border-accent/20',
    image:
      'https://images.unsplash.com/photo-1591115765373-520b7a217294?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'knowledge-hub',
    title: 'Knowledge Hub',
    text: 'Access a growing library of clear, practical resources designed to help you understand your rights and take action with confidence.',
    benefits: ['Guides & factsheets', 'Template letters', 'SEND glossary'],
    cta: 'Explore Resources',
    icon: <BookOpen className='w-10 h-10 text-secondary-foreground' />,
    color: 'bg-secondary/20 border-secondary/30',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'peer-support',
    title: 'Peer Support & Community',
    text: 'Connect with parents who understand your journey. Share experiences, ask questions, and find support in a safe, welcoming space.',
    benefits: [
      'Private community forum',
      'Virtual coffee mornings',
      'Condition-specific groups',
    ],
    cta: 'Join the Community',
    icon: <Users className='w-10 h-10 text-brand-deep' />,
    color: 'bg-brand-deep/5 border-brand-deep/10',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  },
];

const ServicesPage = () => {
  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-muted/60'>
        <div className='absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[10rem] -z-10' />
        <div className='container mx-auto text-center max-w-4xl space-y-8 relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
            <Sparkles className='w-4 h-4' />
            <span>Empowering Your Journey</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'>
            Our <span className='text-primary'>Services</span>
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed'>
            Practical, empathetic support designed to meet you wherever you are
            on your SEND journey.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24'>
        <div className='container mx-auto space-y-24'>
          <div className='text-center max-w-3xl mx-auto space-y-4'>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
              How We Can Support You
            </h2>
          </div>

          <div className='space-y-32'>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div
                    className={`w-20 h-20 rounded-full ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className='text-3xl md:text-4xl font-heading font-bold text-foreground'>
                    {service.title}
                  </h3>
                  <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                    {service.text}
                  </p>

                  <div className='space-y-4'>
                    <h4 className='text-sm font-bold font-heading uppercase tracking-widest text-primary'>
                      What you get:
                    </h4>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className='flex items-center gap-3 text-foreground font-sans'
                        >
                          <CheckCircle2 className='w-5 h-5 text-primary' />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className='group px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 flex items-center gap-3'>
                    <span>{service.cta}</span>
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>

                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className='aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background relative group'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors' />
                  </div>
                  {/* Decorative element */}
                  <div
                    className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl -z-10 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-secondary text-white rounded-t-[5rem] md:rounded-t-[10rem]'>
        <div className='container mx-auto max-w-4xl text-center space-y-12'>
          <div className='w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto'>
            <MessageCircle className='w-12 h-12 text-accent' />
          </div>
          <h2 className='text-4xl md:text-6xl font-heading font-bold leading-tight'>
            Get the Support You Need
          </h2>
          <p className='text-xl text-white/80 font-sans leading-relaxed'>
            Whether you’re just starting out or navigating complex challenges,
            Obimi is here to support you every step of the way.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center pt-8'>
            <button className='px-12 py-6 bg-primary text-primary-foreground rounded-full font-heading font-bold text-2xl shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-2'>
              Get Support
            </button>
            <button className='px-12 py-6 bg-accent text-accent-foreground rounded-full font-heading font-bold text-2xl shadow-2xl hover:shadow-accent/40 transition-all hover:-translate-y-2'>
              Join Community
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
