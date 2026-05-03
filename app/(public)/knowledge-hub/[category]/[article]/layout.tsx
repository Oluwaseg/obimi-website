import type { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const articleName = resolvedParams.article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${articleName} | SEND Resources & Guidance | Obimi Knowledge Hub`,
    description:
      'Explore practical guides and insights to help you navigate the SEND journey, from EHCPs to health diagnoses and therapies.',
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
