'use client';

import { KnowledgeHubCategory } from '@/components/knowledge-hub-category';
import { useTranslations } from 'next-intl';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = use(params);
  const t = useTranslations('KnowledgeHub');

  const categoryMap: Record<string, { titleKey: string; descKey: string }> = {
    education: {
      titleKey: 'categoryEducationTitle',
      descKey: 'categoryEducationDesc',
    },
    health: {
      titleKey: 'categoryHealthTitle',
      descKey: 'categoryHealthDesc',
    },
  };

  const match = categoryMap[categorySlug] ?? categoryMap.education;

  const category = {
    title: t(match.titleKey as Parameters<typeof t>[0]),
    desc: t(match.descKey as Parameters<typeof t>[0]),
    slug: categorySlug,
  };

  return <KnowledgeHubCategory category={category} />;
}
