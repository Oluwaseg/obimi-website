import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedParams = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  // Formatting id to look like a title
  const itemName = resolvedParams.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${itemName} | ${t('Shop.title')}`,
    description: t('Shop.description'),
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
