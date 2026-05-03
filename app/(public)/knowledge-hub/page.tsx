import { KnowledgeHubMain } from '@/components/knowledge-hub-main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEND Resources & Guidance | Obimi Knowledge Hub',
  description:
    'Explore practical guides and insights to help you navigate the SEND journey, from EHCPs to health diagnoses and therapies.',
};

export default function Page() {
  return <KnowledgeHubMain />;
}
