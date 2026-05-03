'use client';

import { KnowledgeHubCategory } from '@/components/knowledge-hub-category';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = use(params);

  const categoryMap: Record<string, { title: string; desc: string }> = {
    education: {
      title: 'Education',
      desc: 'Guidance on EHCPs, school support, and navigating the education system.',
    },
    health: {
      title: 'Health & Diagnosis',
      desc: "Understand diagnoses, therapies, and how to support your child's development.",
    },
  };

  const match = categoryMap[categorySlug] ?? categoryMap.education;

  const category = {
    title: match.title,
    desc: match.desc,
    slug: categorySlug,
  };

  const educationArticles = [
    {
      title: 'Annual Reviews of EHCPs: What Parents Need to Know',
      desc: 'A simple guide to understanding annual reviews and how to prepare effectively.',
      date: 'October 8, 2025',
      readTime: '5 min read',
      href: `/knowledge-hub/${category.slug}/annual-reviews`,
    },
    {
      title: 'Education, Health and Care Plans (EHCPs): A Step-by-Step Guide',
      desc: 'Navigating the Education, Health and Care Plan process from start to finish.',
      date: 'September 24, 2025',
      readTime: '8 min read',
      href: `/knowledge-hub/${category.slug}/ehcp-guide`,
    },
    {
      title: 'Understanding the SEN Support System',
      desc: 'How schools provide additional support for children with special educational needs.',
      date: 'August 15, 2025',
      readTime: '6 min read',
      href: `/knowledge-hub/${category.slug}/sen-support`,
    },
    {
      title: 'Choosing the Right School for Your Child',
      desc: "Factors to consider when looking for a school that meets your child's unique needs.",
      date: 'July 20, 2025',
      readTime: '7 min read',
      href: `/knowledge-hub/${category.slug}/choosing-school`,
    },
  ];

  const healthArticles = [
    {
      title: 'Understanding Common SEND Diagnoses: What Parents Need to Know',
      desc: 'A guide to help you understand what a diagnosis means and how to support your child.',
      date: 'April 20, 2026',
      readTime: '6 min read',
      href: `/knowledge-hub/${category.slug}/diagnoses-guide`,
    },
    {
      title: 'Navigating Therapy and Support Services (SALT, OT, CAMHS)',
      desc: 'A simple breakdown of different therapies and services to help you make informed decisions.',
      date: 'April 22, 2026',
      readTime: '5 min read',
      href: `/knowledge-hub/${category.slug}/therapies-guide`,
    },
  ];

  const articles = categorySlug === 'health' ? healthArticles : educationArticles;

  return <KnowledgeHubCategory category={category} articles={articles} />;
}
