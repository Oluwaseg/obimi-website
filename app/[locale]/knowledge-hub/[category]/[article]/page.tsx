import { KnowledgeHubArticle } from '@/components/knowledge-hub-article';
import { getArticleData } from '@/lib/article-data';

export default function Page({
  params,
}: {
  params: { category: string; article: string };
}) {
  const article = getArticleData(params.article);

  return <KnowledgeHubArticle article={article} />;
}
