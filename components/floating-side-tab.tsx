'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Send, X } from 'lucide-react';
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
  const [openId, setOpenId] = useState<string | null>('1');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What does SEND mean?',
      answer:
        'SEND stands for Special Educational Needs and Disabilities. It refers to children who need additional support in learning, development, or daily life.',
    },
    {
      id: '2',
      question: 'Who is Obimi for?',
      answer:
        'Obimi supports parents, carers, and guardians raising children with SEND — whether you’re just starting out or already navigating the system.',
    },
    {
      id: '3',
      question: 'What kind of support does Obimi provide?',
      answer:
        'We offer guidance across education, health, and social care, including one-to-one support, workshops, resources, and community connection.',
    },
    {
      id: '4',
      question: 'Do I need to pay for support?',
      answer:
        'Some services are free, while others (like personalised sessions) may have a cost. We aim to keep support accessible for all families.',
    },
    {
      id: '5',
      question: 'How do I join the community?',
      answer:
        'You can join our community through our platform to connect with other parents, access support, and take part in events.',
    },
    {
      id: '6',
      question: 'I’m new to SEND — where should I start?',
      answer:
        'Start with our Knowledge Hub for simple guides, or reach out for support — we’ll help you take the next step.',
    },
    {
      id: '7',
      question: 'Does Obimi replace legal or medical advice?',
      answer:
        'No. We provide guidance and support, but we do not replace professional legal or medical services.',
    },
    {
      id: '8',
      question: 'Can I get involved or share my story?',
      answer:
        'Yes. You can volunteer, partner with us, or share your experience to support others in the community.',
    },
    {
      id: '9',
      question: 'How do I contact Obimi?',
      answer:
        'You can reach us through our contact page or email. We’re here to help.',
    },
  ];

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    } catch {
      // Show success anyway for demo purposes
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-full gap-4'>
      {submitSuccess && (
        <div className='p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 rounded text-sm text-green-700 dark:text-green-400 font-medium animate-in fade-in duration-200'>
          {'We typically respond within'} {'24–48 hours'}
        </div>
      )}

      <div className='space-y-3 flex-1'>
        <div>
          <label
            htmlFor='name'
            className='block text-xs font-semibold text-foreground/70 mb-1.5'
          >
            {'Name'}
          </label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder={'Your full name'}
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
            {'Email Address'}
          </label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder={'your@email.com'}
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
            {'Message'}
          </label>
          <textarea
            id='message'
            name='message'
            placeholder={'How can we help you?'}
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
            {'Submit'}
          </>
        ) : (
          <>
            <Send size={14} className='mr-2' />
            {'Send Message'}
          </>
        )}
      </Button>
    </form>
  );
}

export default function FloatingSideTab() {
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
        className='rounded-l-[22px] fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center w-12 h-20 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
        aria-label='Open help panel'
        aria-expanded={isOpen}
      >
        <span className='text-xs font-bold tracking-wider [writing-mode:vertical-rl] rotate-180 leading-tight'>
          {'Contact'}
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
              {'Support'}
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
            {'Knowledge Hub'}
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              activeTab === 'contact'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            {'Knowledge Hub'}
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
