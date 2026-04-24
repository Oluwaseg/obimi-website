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

  const educationArticles = [
    {
      title: t('catArticle1Title'),
      desc: t('catArticle1Desc'),
      date: 'October 8, 2025',
      readTime: t('catArticle1ReadTime'),
      href: `/knowledge-hub/${category.slug}/annual-reviews`,
    },
    {
      title: t('catArticle2Title'),
      desc: t('catArticle2Desc'),
      date: 'September 24, 2025',
      readTime: t('catArticle2ReadTime'),
      href: `/knowledge-hub/${category.slug}/ehcp-guide`,
    },
    {
      title: t('catArticle3Title'),
      desc: t('catArticle3Desc'),
      date: 'August 15, 2025',
      readTime: t('catArticle3ReadTime'),
      href: `/knowledge-hub/${category.slug}/sen-support`,
    },
    {
      title: t('catArticle4Title'),
      desc: t('catArticle4Desc'),
      date: 'July 20, 2025',
      readTime: t('catArticle4ReadTime'),
      href: `/knowledge-hub/${category.slug}/choosing-school`,
    },
  ];

  const healthArticles = [
    {
      title: t('healthArticle1Title'),
      desc: t('healthArticle1Desc'),
      date: 'April 20, 2026',
      readTime: t('healthArticle1ReadTime'),
      href: `/knowledge-hub/${category.slug}/diagnoses-guide`,
    },
    {
      title: t('healthArticle2Title'),
      desc: t('healthArticle2Desc'),
      date: 'April 22, 2026',
      readTime: t('healthArticle2ReadTime'),
      href: `/knowledge-hub/${category.slug}/therapies-guide`,
    },
  ];

  const articles = categorySlug === 'health' ? healthArticles : educationArticles;

  return <KnowledgeHubCategory category={category} articles={articles} />;
}
