import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import CommunityCTA from '@/components/community';
import { Hero } from '@/components/hero';
import HowWeHelp from '@/components/how-we-help';
import KnowledgeHub from '@/components/knowledge-hub';
import MediaSection from '@/components/media-section';
import WhyObimi from '@/components/why-obimi';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <main className='min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <HowWeHelp />
      <WhyObimi />
      <MediaSection />
      <CommunityCTA />
      <KnowledgeHub />
      <Footer />
    </main>
  );
}
