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

  if (slug === 'diagnoses-guide') {
    return {
      title: t('healthArticle1Title'),
      category: t('categoryHealthTitle'),
      date: 'April 20, 2026',
      readTime: t('healthArticle1ReadTime'),
      intro: t('diagGuideIntro'),
      sections: [
        {
          title: t('diagGuideSec1Title'),
          content: [
            t('diagGuideSec1C1'),
            t('diagGuideSec1C2'),
            t('diagGuideSec1C3'),
            t('diagGuideSec1C4'),
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: t('diagGuideSec1Alert'),
          type: 'alert',
        },
        {
          title: t('diagGuideSec2Title'),
          content: [
            t('diagGuideSec2C1'),
            t('diagGuideSec2C2'),
            t('diagGuideSec2C3'),
            t('diagGuideSec2C4'),
          ],
          type: 'list',
        },
        {
          title: 'Alert',
          content: t('diagGuideSec2Alert'),
          type: 'alert',
        },
        {
          title: t('diagGuideSec3Title'),
          content: [
            t('diagGuideSec3C1'),
            t('diagGuideSec3C2'),
            t('diagGuideSec3C3'),
            t('diagGuideSec3C4'),
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: t('diagGuideSec3Alert'),
          type: 'alert',
        },
        {
          title: t('diagGuideSec4Title'),
          content: [
            t('diagGuideSec4C1'),
            t('diagGuideSec4C2'),
            t('diagGuideSec4C3'),
          ],
          type: 'list',
        },
        {
          title: t('diagGuideSec5Title'),
          content: [
            t('diagGuideSec5C1'),
            t('diagGuideSec5C2'),
            t('diagGuideSec5C3'),
            t('diagGuideSec5C4'),
          ],
          type: 'steps',
        },
        {
          title: t('diagGuideSec6Title'),
          content: [
            t('diagGuideSec6C1'),
            t('diagGuideSec6C2'),
            t('diagGuideSec6C3'),
            t('diagGuideSec6C4'),
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: t('diagGuideSec6Alert'),
          type: 'alert',
        },
      ],
      takeaway: t('diagGuideTakeaway'),
      cta: {
        text: t('diagGuideCtaText'),
        buttonText: t('ehcpGuideCtaButton'),
        href: '/contact',
      },
    };
  }

  if (slug === 'therapies-guide') {
    return {
      title: t('healthArticle2Title'),
      category: t('categoryHealthTitle'),
      date: 'April 22, 2026',
      readTime: t('healthArticle2ReadTime'),
      intro: t('therapiesGuideIntro'),
      sections: [
        {
          title: t('therapiesGuideSec1Title'),
          content: [
            t('therapiesGuideSec1C1'),
            t('therapiesGuideSec1C2'),
            t('therapiesGuideSec1C3'),
          ],
          type: 'text',
        },
        {
          title: t('therapiesGuideSec2Title'),
          content: [
            t('therapiesGuideSec2C1'),
            t('therapiesGuideSec2C2'),
            t('therapiesGuideSec2C3'),
            t('therapiesGuideSec2C4'),
          ],
          type: 'list',
        },
        {
          title: t('therapiesGuideSec3Title'),
          content: [
            t('therapiesGuideSec3C1'),
            t('therapiesGuideSec3C2'),
            t('therapiesGuideSec3C3'),
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: t('therapiesGuideSec3Alert'),
          type: 'alert',
        },
        {
          title: t('therapiesGuideSec4Title'),
          content: [
            t('therapiesGuideSec4C1'),
            t('therapiesGuideSec4C2'),
            t('therapiesGuideSec4C3'),
            t('therapiesGuideSec4C4'),
          ],
          type: 'steps',
        },
      ],
      takeaway: t('therapiesGuideTakeaway'),
      cta: {
        text: t('therapiesGuideCtaText'),
        buttonText: t('ehcpGuideCtaButton'),
        href: '/contact',
      },
    };
  }

  // Fallback to EHCP Guide
  return getArticleData('ehcp-guide', t);
}
