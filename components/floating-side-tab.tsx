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
    <div className='border-b border-border/50 last:border-b-0'>
      <button
        onClick={onToggle}
        className='w-full px-4 py-3 flex items-center justify-between text-left hover:bg-background/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
        aria-expanded={isOpen}
      >
        <span className='text-sm font-medium text-foreground leading-snug'>
          {item.question}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ml-3 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className='px-4 py-3 bg-background/30 text-sm text-foreground/80 leading-relaxed animate-in fade-in duration-150'>
          {item.answer}
        </div>
      )}
    </div>
  );
}

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
      <div className='flex-1 overflow-y-auto pr-3'>
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
  );
}

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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-full gap-4'>
      {submitSuccess && (
        <div className='p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 rounded text-sm text-green-700 dark:text-green-400 font-medium animate-in fade-in duration-200'>
          {t('trustBadgeText')} {t('trustBadgeHighlight')}
        </div>
      )}

      <div className='space-y-3 flex-1'>
        <div>
          <label
            htmlFor='name'
            className='block text-xs font-semibold text-foreground/70 mb-1.5'
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
            className='w-full bg-background border-border text-sm h-9'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-xs font-semibold text-foreground/70 mb-1.5'
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
            className='w-full bg-background border-border text-sm h-9'
          />
        </div>

        <div className='flex-1 flex flex-col'>
          <label
            htmlFor='message'
            className='block text-xs font-semibold text-foreground/70 mb-1.5'
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
            className='flex-1 w-full px-3 py-2 border border-border rounded bg-background text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0 resize-none'
          />
        </div>
      </div>

      <Button
        type='submit'
        disabled={isSubmitting}
        className='w-full h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors'
      >
        {isSubmitting ? (
          <>
            <span className='inline-block animate-spin mr-2'>↻</span>
            {commonT('submit')}
          </>
        ) : (
          <>
            <Send size={14} className='mr-2' />
            {t('formSubmit')}
          </>
        )}
      </Button>
    </form>
  );
}

export default function FloatingSideTab() {
  const t = useTranslations('Navigation');
  const faqT = useTranslations('FAQPage');
  const contactT = useTranslations('ContactPage');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('faq');
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 dark:bg-black/30 z-40 animate-in fade-in duration-200'
          onClick={() => setIsOpen(false)}
        />
      )}

      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center w-12 h-20 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
        aria-label='Open help panel'
        aria-expanded={isOpen}
      >
        <span className='text-xs font-bold tracking-wider [writing-mode:vertical-rl] rotate-180 leading-tight'>
          {t('contact')}
        </span>
      </button>

      <div
        ref={panelRef}
        className={`fixed right-0 top-0 z-50 w-full h-screen md:w-96 md:h-[600px] md:bottom-auto md:rounded-l-lg bg-card border-l border-border shadow-xl transition-transform duration-300 flex flex-col overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-border/50 bg-card shrink-0'>
          <div>
            <h2 className='text-lg font-semibold text-foreground'>
              {t('support')}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='p-1.5 hover:bg-muted rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:flex hidden'
            aria-label='Close panel'
          >
            <X size={20} className='text-foreground/60' />
          </button>
        </div>

        {/* Tabs */}
        <div className='flex border-b border-border/50 bg-background/50 shrink-0 px-1 py-1 gap-1'>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              activeTab === 'faq'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            {faqT('badge')}
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              activeTab === 'contact'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            {contactT('badge')}
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-hidden flex flex-col'>
          <div className='flex-1 overflow-y-auto px-6 py-5'>
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
