import CommunityCTA from '@/components/community';
import { Hero } from '@/components/hero';
import HowWeHelp from '@/components/how-we-help';
import KnowledgeHub from '@/components/knowledge-hub';
import MediaSection from '@/components/media-section';
import WhyObimi from '@/components/why-obimi';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Hero />
      <HowWeHelp />
      <WhyObimi />
      <MediaSection />
      <CommunityCTA />
      <KnowledgeHub />
    </main>
  );
}
