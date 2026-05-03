'use client';

import { KnowledgeHubArticle } from '@/components/knowledge-hub-article';
import { getArticleData } from '@/lib/article-data';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { article: articleSlug } = use(params);
  const article = getArticleData(articleSlug);

  return <KnowledgeHubArticle article={article} />;
}
