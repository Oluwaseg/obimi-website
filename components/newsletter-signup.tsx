'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
}

export function NewsletterSignup({ className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 4000);
      }
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className='max-w-4xl mx-auto'>
        {/* Background gradient accent */}
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-primary to-transparent opacity-40 blur-3xl' />

        <div className='relative'>
          {/* Card Container */}
          <div className='bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-8 sm:p-12 shadow-xl overflow-hidden'>
            {/* Decorative accent */}
            <div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10' />

            <div className='relative z-10'>
              {/* Header */}
              <div className='flex items-start gap-4 mb-8'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-primary/20 rounded-full blur-lg' />
                  <div className='relative bg-gradient-to-br from-primary to-primary/80 rounded-full p-3 text-primary-foreground'>
                    <Mail className='w-6 h-6' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-2 mb-2'>
                    <h2 className='text-2xl sm:text-3xl font-heading font-bold text-foreground'>
                      Stay in the Loop
                    </h2>
                    <Sparkles className='w-6 h-6 text-accent animate-pulse' />
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Get exclusive updates, resources, and insights delivered to
                    your inbox.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-2 items-stretch sm:items-center'>
                  <div className='flex-1 relative'>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='your@email.com'
                      required
                      disabled={status === 'success'}
                      className='w-full px-6 py-3 bg-background/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    />
                  </div>
                  <Button
                    type='submit'
                    disabled={status === 'loading' || status === 'success'}
                    className='bg-gradient-to-r from-primary via-primary to-primary/90 hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
                  >
                    {status === 'loading' && (
                      <span className='flex items-center gap-2'>
                        <span className='w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin' />
                        Subscribing...
                      </span>
                    )}
                    {status === 'success' && (
                      <span className='flex items-center gap-2'>
                        <CheckCircle2 className='w-4 h-4' />
                        Subscribed!
                      </span>
                    )}
                    {status === 'idle' && 'Subscribe'}
                    {status === 'error' && 'Try Again'}
                  </Button>
                </div>

                {/* Status Messages */}
                {message && (
                  <div
                    className={`p-4 rounded-lg text-sm font-medium transition-all animate-in fade-in ${
                      status === 'success'
                        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-200/30'
                        : 'bg-red-500/10 text-red-600 border border-red-200/30'
                    }`}
                  >
                    {status === 'success' && (
                      <div className='flex items-center gap-2'>
                        <CheckCircle2 className='w-4 h-4' />
                        {message}
                      </div>
                    )}
                    {status === 'error' && <div>{message}</div>}
                  </div>
                )}
              </form>

              {/* Trust badge */}
              <p className='text-xs text-muted-foreground mt-6 text-center'>
                ✓ No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
