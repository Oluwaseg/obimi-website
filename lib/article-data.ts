import type { ArticleData } from '@/components/knowledge-hub-article';

export function getArticleData(slug: string, t: any): ArticleData {
  if (slug === 'ehcp-guide') {
    return {
      title: t('catArticle2Title'),
      category: t('categoryEducationTitle'),
      date: 'September 24, 2025',
      readTime: t('catArticle2ReadTime'),
      intro: t('ehcpGuideIntro'),
      sections: [
        {
          title: t('ehcpGuideSec1Title'),
          content: [
            t('ehcpGuideSec1C1'),
            t('ehcpGuideSec1C2'),
            t('ehcpGuideSec1C3'),
          ],
          type: 'text',
        },
        {
          title: t('ehcpGuideSec2Title'),
          content: [
            t('ehcpGuideSec2C1'),
            t('ehcpGuideSec2C2'),
            t('ehcpGuideSec2C3'),
            t('ehcpGuideSec2C4'),
          ],
          type: 'steps',
        },
        {
          title: t('ehcpGuideSec3Title'),
          content: [
            t('ehcpGuideSec3C1'),
            t('ehcpGuideSec3C2'),
            t('ehcpGuideSec3C3'),
            t('ehcpGuideSec3C4'),
          ],
          type: 'list',
        },
        {
          title: t('ehcpGuideSec4Title'),
          content: [
            t('ehcpGuideSec4C1'),
            t('ehcpGuideSec4C2'),
          ],
          type: 'text',
        },
        {
          title: t('ehcpGuideSec5Title'),
          content: [
            t('ehcpGuideSec5C1'),
            t('ehcpGuideSec5C2'),
            t('ehcpGuideSec5C3'),
            t('ehcpGuideSec5C4'),
          ],
          type: 'list',
        },
      ],
      takeaway: t('ehcpGuideTakeaway'),
      cta: {
        text: t('ehcpGuideCtaText'),
        buttonText: t('ehcpGuideCtaButton'),
        href: '/contact',
      },
    };
  }

  // Fallback to EHCP Guide
  return getArticleData('ehcp-guide', t);
}
