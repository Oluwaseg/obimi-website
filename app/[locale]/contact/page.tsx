import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import {
  ArrowRight,
  Clock,
  Heart,
  Mail,
  MessageCircle,
  Send,
  Users,
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
      {/* Hero Section */}
      <section className='relative py-24 px-6 md:px-12 lg:px-24 bg-muted/30 overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[10rem] -z-10' />
        <div className='container mx-auto text-center max-w-4xl space-y-8 relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-heading uppercase tracking-wider'>
            <MessageCircle className='w-4 h-4' />
            <span>Get in Touch</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight'>
            Contact <span className='text-primary'>Us</span>
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed'>
            Have a question or need support? We’re here to help — reach out and
            we’ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>
            {/* Left Side: Contact Info */}
            <div className='lg:col-span-5 space-y-12'>
              <div className='space-y-6'>
                <h2 className='text-4xl font-heading font-bold text-foreground'>
                  Get in Touch
                </h2>
                <p className='text-lg text-muted-foreground font-sans leading-relaxed'>
                  We'd love to hear from you. Whether you have a question about
                  our services, community, or just want to say hello, our team
                  is ready to support you.
                </p>
              </div>

              <div className='space-y-8'>
                {/* Email */}
                <div className='flex items-center gap-6 group'>
                  <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                    <Mail className='w-8 h-8' />
                  </div>
                  <div>
                    <p className='text-sm font-bold font-heading uppercase tracking-widest text-primary'>
                      Email Us
                    </p>
                    <a
                      href='mailto:info@obimii.com'
                      className='text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors'
                    >
                      info@obimii.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className='space-y-6 pt-4'>
                  <p className='text-sm font-bold font-heading uppercase tracking-widest text-primary'>
                    Follow Us
                  </p>
                  <div className='flex gap-4'>
                    {[
                      {
                        icon: <FaFacebook className='w-6 h-6' />,
                        label: 'Facebook',
                        color: 'hover:bg-[#1877F2]',
                      },
                      {
                        icon: <FaInstagram className='w-6 h-6' />,
                        label: 'Instagram',
                        color:
                          'hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
                      },
                      {
                        icon: <FaLinkedin className='w-6 h-6' />,
                        label: 'LinkedIn',
                        color: 'hover:bg-[#0A66C2]',
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href='#'
                        className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl hover:-translate-y-1`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className='p-8 rounded-[2.5rem] bg-accent/10 border-2 border-accent/20 flex items-center gap-6'>
                <div className='w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0'>
                  <Clock className='w-8 h-8 text-accent-foreground' />
                </div>
                <p className='text-lg font-sans font-medium text-accent-foreground leading-tight'>
                  We typically respond within{' '}
                  <span className='font-bold'>24–48 hours</span>.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className='lg:col-span-7'>
              <div className='bg-background rounded-[3rem] p-8 md:p-12 border-2 border-border shadow-2xl shadow-primary/5 relative overflow-hidden'>
                {/* Decorative background element */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10' />

                <div className='space-y-8'>
                  <div className='space-y-2'>
                    <h3 className='text-3xl font-heading font-bold text-foreground'>
                      Send Us a Message
                    </h3>
                    <p className='text-muted-foreground font-sans'>
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </div>

                  <form className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <label className='text-sm font-bold font-heading text-foreground ml-2'>
                          Name
                        </label>
                        <input
                          type='text'
                          placeholder='Your full name'
                          className='w-full px-6 py-4 bg-muted/50 border-2 border-transparent rounded-full font-sans focus:outline-none focus:border-primary focus:bg-background transition-all'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-sm font-bold font-heading text-foreground ml-2'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          placeholder='your@email.com'
                          className='w-full px-6 py-4 bg-muted/50 border-2 border-transparent rounded-full font-sans focus:outline-none focus:border-primary focus:bg-background transition-all'
                        />
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <label className='text-sm font-bold font-heading text-foreground ml-2'>
                        Phone Number (optional)
                      </label>
                      <input
                        type='tel'
                        placeholder='+44 0000 000000'
                        className='w-full px-6 py-4 bg-muted/50 border-2 border-transparent rounded-full font-sans focus:outline-none focus:border-primary focus:bg-background transition-all'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label className='text-sm font-bold font-heading text-foreground ml-2'>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder='How can we help you?'
                        className='w-full px-6 py-4 bg-muted/50 border-2 border-transparent rounded-2xl font-sans focus:outline-none focus:border-primary focus:bg-background transition-all resize-none'
                      ></textarea>
                    </div>
                    <button className='w-full group py-5 bg-primary text-primary-foreground rounded-full font-heading font-bold text-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3'>
                      <span>Send Message</span>
                      <Send className='w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-6 md:px-12 lg:px-24 bg-secondary/60 relative overflow-hidden'>
        <div className='container mx-auto max-w-4xl text-center space-y-12 relative z-10'>
          <div className='w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
            <Heart className='w-12 h-12 text-primary fill-primary/20' />
          </div>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
            Looking for immediate support?
          </h2>
          <div className='flex flex-col sm:flex-row gap-6 justify-center pt-8'>
            <button className='group px-12 py-6 bg-primary text-primary-foreground rounded-full font-heading font-bold text-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-2 flex items-center gap-3'>
              <span>Get Support</span>
              <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
            </button>
            <button className='group px-12 py-6 bg-white border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-full font-heading font-bold text-2xl transition-all hover:-translate-y-2 flex items-center gap-3'>
              <Users className='w-6 h-6' />
              <span>Join Community</span>
            </button>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className='absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2' />
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
