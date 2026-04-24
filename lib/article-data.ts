import type { ArticleData } from '@/components/knowledge-hub-article';

export const ehcpArticleData: ArticleData = {
  title: 'Education, Health and Care Plans (EHCPs): A Step-by-Step Guide',
  category: 'Education',
  date: 'September 24, 2025',
  readTime: '8 min read',
  intro:
    'For some children, SEN Support may not be enough. An Education, Health and Care Plan (EHCP) provides legally protected support to help them achieve the best possible outcomes.',
  sections: [
    {
      title: 'What is an EHCP?',
      content: [
        'An EHCP is a legal document for children and young people aged 0–25 who need additional support beyond what schools can provide.',
        'It outlines your child\'s needs, the outcomes they\'re working towards, the support required, and the school or setting.',
        'Key point: The support in an EHCP must be delivered by law.',
      ],
      type: 'text',
    },
    {
      title: 'The Step-by-Step Process',
      content: [
        'Step 1: Request an Assessment - Parents, schools, or professionals can apply. Submit a written request to your local authority. Decision must be made within 6 weeks.',
        'Step 2: Needs Assessment - Evidence gathered from parents, school, and health professionals to determine if an EHCP is needed.',
        'Step 3: Draft EHCP - You receive a draft plan. You have 15 days to review and request changes. You can choose a school.',
        'Step 4: Final Plan - Must be issued within 20 weeks. Becomes legally binding.',
      ],
      type: 'steps',
    },
    {
      title: "What's Inside an EHCP?",
      content: [
        'Needs: What challenges exist for your child.',
        'Outcomes: What your child should achieve with the support.',
        'Provision: What specific support is provided (therapies, equipment, etc.).',
        'Placement: Where the support happens (school or setting).',
      ],
      type: 'list',
    },
    {
      title: 'Reviews & Refusals',
      content: [
        'EHCPs are reviewed yearly to ensure support remains relevant. Adjustments can be made as needs change.',
        'If a request is refused, you have the right to appeal, request mediation, or seek support from organisations.',
      ],
      type: 'text',
    },
    {
      title: 'Tips for Parents',
      content: [
        "Be clear and specific about your child's needs.",
        'Keep detailed records of all communications and assessments.',
        'Push for detailed support descriptions in the plan.',
        "Know your rights and don't be afraid to advocate for your child.",
      ],
      type: 'list',
    },
  ],
  takeaway:
    'An EHCP gives your child access to structured, legally protected support. Understanding the process helps you secure the help your child needs.',
  cta: {
    text: 'Need help applying for an EHCP?',
    buttonText: 'Get Support',
    href: '/contact',
  },
};

/** Add more articles here and expand getArticleData() as the hub grows. */
export const articleRegistry: Record<string, ArticleData> = {
  'ehcp-guide': ehcpArticleData,
};

export function getArticleData(slug: string): ArticleData {
  return articleRegistry[slug] ?? ehcpArticleData;
}
