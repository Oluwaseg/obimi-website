import { Hero } from '@/components/hero';
import HowWeHelp from '@/components/how-we-help';
import KnowledgeHub from '@/components/knowledge-hub';
import MediaSection from '@/components/media-section';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { RecognitionSection } from '@/components/recognition-section';
import WhyObimi from '@/components/why-obimi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support for SEND Parents & Caregivers | Obimi',
  description:
    'Navigating education, health, and care systems can feel overwhelming. Obimi gives you the guidance, resources, and community you need to support your child with confidence.',
};

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Hero />
      <HowWeHelp />
      <WhyObimi />
      <MediaSection />
      <RecognitionSection />
      {/* <CommunityCTA /> */}
      <KnowledgeHub />
      <NewsletterSignup />
    </main>
  );
}
