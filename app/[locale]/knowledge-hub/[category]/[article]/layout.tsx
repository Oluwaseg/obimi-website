import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, category: string, article: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedParams = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  // Formatting article to look like a title
  const articleName = resolvedParams.article.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${articleName} | ${t('KnowledgeHub.title')}`,
    description: t('KnowledgeHub.description'),
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
