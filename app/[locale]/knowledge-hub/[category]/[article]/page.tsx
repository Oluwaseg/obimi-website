'use client';

import { KnowledgeHubArticle } from '@/components/knowledge-hub-article';
import { getArticleData } from '@/lib/article-data';
import { useTranslations } from 'next-intl';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { article: articleSlug } = use(params);
  const t = useTranslations('KnowledgeHub');
  const article = getArticleData(articleSlug, t);

  return <KnowledgeHubArticle article={article} />;
}
