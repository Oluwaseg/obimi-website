import CommunityCTA from '@/components/community';
import { Hero } from '@/components/hero';
import HowWeHelp from '@/components/how-we-help';
import KnowledgeHub from '@/components/knowledge-hub';
import MediaSection from '@/components/media-section';
import { NewsletterSignup } from '@/components/newsletter-signup';
import WhyObimi from '@/components/why-obimi';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Hero />
      <HowWeHelp />
      <WhyObimi />
      <MediaSection />
      <CommunityCTA />
      <KnowledgeHub />
      {/* Newsletter Signup */}
      <div data-aos='fade-up' data-aos-delay='300'>
        <NewsletterSignup />
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO.Home' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
