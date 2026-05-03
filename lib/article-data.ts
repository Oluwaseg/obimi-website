import type { ArticleData } from '@/components/knowledge-hub-article';

export function getArticleData(slug: string): ArticleData {
  if (slug === 'ehcp-guide') {
    return {
      title: 'Education, Health and Care Plans (EHCPs): A Step-by-Step Guide',
      category: 'Education',
      date: 'September 24, 2025',
      readTime: '8 min read',
      intro: 'For some children, SEN Support may not be enough. An Education, Health and Care Plan (EHCP) provides legally protected support to help them achieve the best possible outcomes.',
      sections: [
        {
          title: 'What is an EHCP?',
          content: [
            'An EHCP is a legal document for children and young people aged 0–25 who need additional support beyond what schools can provide.',
            "It outlines your child's needs, the outcomes they're working towards, the support required, and the school or setting.",
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
      takeaway: 'An EHCP gives your child access to structured, legally protected support. Understanding the process helps you secure the help your child needs.',
      cta: {
        text: 'Need help applying for an EHCP?',
        buttonText: 'Get Support',
        href: '/contact',
      },
    };
  }

  if (slug === 'diagnoses-guide') {
    return {
      title: 'Understanding Common SEND Diagnoses: What Parents Need to Know',
      category: 'Health & Diagnosis',
      date: 'April 20, 2026',
      readTime: '6 min read',
      intro: 'Receiving a diagnosis for your child can bring a mix of emotions — relief, confusion, and sometimes fear. This guide is here to help you understand what a diagnosis means, what to expect next, and how to support your child with confidence.',
      sections: [
        {
          title: 'What Does a Diagnosis Mean?',
          content: [
            'A diagnosis helps identify the specific challenges your child may face and opens the door to the right support. It can:',
            "Explain your child's behaviours or difficulties",
            'Help professionals understand their needs',
            'Give access to support services and interventions',
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: 'A diagnosis does not define your child — it helps support them.',
          type: 'alert',
        },
        {
          title: 'Common SEND Conditions',
          content: [
            'Autism (ASD): Affects communication, social interaction, and behaviour. Children may prefer routines and find change difficult.',
            'ADHD: Impacts attention, focus, and impulse control. Children may be very active or easily distracted.',
            'Speech & Language Difficulties: Challenges with understanding or expressing language. May affect communication and learning.',
            'Sensory Processing Difficulties: Over- or under-sensitive to sounds, textures, lights, etc. Can affect behaviour and comfort.',
          ],
          type: 'list',
        },
        {
          title: 'Alert',
          content: 'Every child is different — no two experiences are the same.',
          type: 'alert',
        },
        {
          title: 'What Happens After a Diagnosis?',
          content: [
            'After diagnosis, you may: Be referred to specialists (e.g., therapists)',
            "Work with your child's school for support",
            'Explore SEN Support or an EHCP',
            'Receive guidance on strategies at home',
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: "It's a process — not everything happens at once.",
          type: 'alert',
        },
        {
          title: 'Types of Support Available',
          content: [
            'Therapies: Speech and Language Therapy (SALT), Occupational Therapy (OT), Behavioural support',
            'School Support: SEN Support plans, Classroom adjustments, One-to-one support',
            'Health Services: Paediatricians, CAMHS (mental health support)',
          ],
          type: 'list',
        },
        {
          title: 'How to Support Your Child',
          content: [
            'Learn about their needs',
            'Create routines and structure',
            'Communicate with their school',
            'Celebrate progress (even small wins)',
          ],
          type: 'steps',
        },
        {
          title: 'Supporting Yourself',
          content: [
            'Caring for a child with additional needs can be overwhelming. Make sure you:',
            'Take breaks when needed',
            'Talk to other parents',
            'Ask for help',
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: 'You matter too.',
          type: 'alert',
        },
      ],
      takeaway: "A diagnosis is not the end — it's the beginning of understanding your child better and getting the right support in place.",
      cta: {
        text: "Need help understanding your child's needs or next steps?",
        buttonText: 'Get Support',
        href: '/contact',
      },
    };
  }

  if (slug === 'therapies-guide') {
    return {
      title: 'Navigating Therapy and Support Services (SALT, OT, CAMHS)',
      category: 'Health & Diagnosis',
      date: 'April 22, 2026',
      readTime: '5 min read',
      intro: 'After a diagnosis, many families are introduced to different therapies and services — but understanding who does what can feel confusing. This guide breaks it down in simple terms.',
      sections: [
        {
          title: 'Common Services',
          content: [
            'Speech and Language Therapy (SALT): Helps children with communication, speech, and understanding language.',
            'Occupational Therapy (OT): Supports motor skills, coordination, and everyday activities like writing or dressing.',
            'CAMHS: Provides mental health support for children and young people.',
          ],
          type: 'text',
        },
        {
          title: 'What to Expect',
          content: [
            'Assessments',
            'Regular sessions',
            'Progress reviews',
            'Home strategies',
          ],
          type: 'list',
        },
        {
          title: 'Challenges Parents Face',
          content: [
            'Long waiting times',
            'Limited access',
            'Lack of clarity',
          ],
          type: 'text',
        },
        {
          title: 'Alert',
          content: "This is normal — you're not alone.",
          type: 'alert',
        },
        {
          title: 'Practical Tips',
          content: [
            'Keep records of appointments',
            'Follow up regularly',
            'Ask questions',
            'Use strategies at home',
          ],
          type: 'steps',
        },
      ],
      takeaway: 'Understanding therapy services helps you make informed decisions and support your child more effectively.',
      cta: {
        text: 'Need help navigating therapy and support services?',
        buttonText: 'Get Support',
        href: '/contact',
      },
    };
  }

  // Fallback to EHCP Guide
  return getArticleData('ehcp-guide');
}
