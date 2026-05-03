import type { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryName} | SEND Resources & Guidance | Obimi Knowledge Hub`,
    description:
      'Explore practical guides and insights to help you navigate the SEND journey, from EHCPs to health diagnoses and therapies.',
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
