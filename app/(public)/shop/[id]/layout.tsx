import type { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const itemName = resolvedParams.id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${itemName} | Shop | Obimi`,
    description:
      'Support Obimi and spread awareness with our range of products.',
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
