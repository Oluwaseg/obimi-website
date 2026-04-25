'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Send, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

type TabType = 'faq' | 'contact';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className='border-b border-border last:border-b-0'>
      <button
        onClick={onToggle}
        className='w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded'
        aria-expanded={isOpen}
      >
        <span className='text-left font-medium text-sm text-foreground'>
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='px-4 py-3 bg-muted/30 text-sm text-muted-foreground animate-in fade-in duration-200'>
          {item.answer}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// FAQ Tab Content
// ============================================================================

interface FAQTabProps {
  onClose: () => void;
}

function FAQTab({ onClose }: FAQTabProps) {
  const t = useTranslations('FAQPage');
  const [openId, setOpenId] = useState<string | null>('1');

  const faqData = Array.from({ length: 9 }).map((_, i) => ({
    id: (i + 1).toString(),
    question: t(`faq${i + 1}Question`),
    answer: t(`faq${i + 1}Answer`),
  }));

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 overflow-y-auto pr-2 custom-scrollbar'>
        <div className='divide-y divide-border'>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Contact Form Tab
// ============================================================================

interface ContactTabProps {
  onClose: () => void;
}

function ContactTab({ onClose }: ContactTabProps) {
  const t = useTranslations('ContactPage');
  const commonT = useTranslations('Common');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-full space-y-4'>
      {submitSuccess && (
        <div className='p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-800 dark:text-green-200 animate-in fade-in duration-200'>
          ✓ {t('trustBadgeText')} {t('trustBadgeHighlight')}
        </div>
      )}

      <div className='space-y-3 flex-1'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-foreground mb-1.5'
          >
            {t('formNameLabel')}
          </label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder={t('formNamePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-foreground mb-1.5'
          >
            {t('formEmailLabel')}
          </label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder={t('formEmailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full'
          />
        </div>

        <div className='flex-1 flex flex-col'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-foreground mb-1.5'
          >
            {t('formMessageLabel')}
          </label>
          <textarea
            id='message'
            name='message'
            placeholder={t('formMessagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            required
            className='flex-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none'
          />
        </div>
      </div>

      <Button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 flex items-center justify-center gap-2'
      >
        <Send size={16} />
        {isSubmitting ? commonT('submit') + '...' : t('formSubmit')}
      </Button>
    </form>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export default function FloatingSideTab() {
  const t = useTranslations('Navigation');
  const faqT = useTranslations('FAQPage');
  const contactT = useTranslations('ContactPage');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('faq');
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 dark:bg-black/40 z-40 animate-in fade-in duration-200'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Tab Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex items-center justify-center w-14 h-24 bg-gradient-to-b from-primary to-primary/90 hover:to-primary/80 text-primary-foreground rounded-l-[2rem] rounded-r-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group'
        aria-label='Open support panel'
        aria-expanded={isOpen}
      >
        <span className='text-xs font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 group-hover:scale-110 transition-transform duration-300 uppercase'>
          {t('contact')}
        </span>
      </button>

      {/* Floating Panel */}
      <div
        ref={panelRef}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 w-full max-w-sm h-[500px] bg-card text-card-foreground rounded-2xl shadow-2xl border border-border transition-all duration-300 transform ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        } md:right-20 md:max-w-sm flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5'>
          <h2 className='text-lg font-bold text-foreground font-heading'>
            {t('support')}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className='p-1.5 hover:bg-muted rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            aria-label='Close panel'
          >
            <X size={20} className='text-muted-foreground' />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className='flex border-b border-border bg-muted/30'>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 px-4 py-3 text-sm font-bold font-heading uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              activeTab === 'faq'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {faqT('badge')}
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 px-4 py-3 text-sm font-bold font-heading uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              activeTab === 'contact'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {contactT('badge')}
          </button>
        </div>

        {/* Content Area */}
        <div className='flex-1 overflow-hidden'>
          <div className='h-full overflow-y-auto px-4 py-4'>
            {activeTab === 'faq' ? (
              <FAQTab onClose={() => setIsOpen(false)} />
            ) : (
              <ContactTab onClose={() => setIsOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
