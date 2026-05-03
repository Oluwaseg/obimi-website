import { AccessibilityToolbar } from '@/components/common/accessibility-toolbar';
import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import FloatingSideTab from '@/components/floating-side-tab';
import { AccessibilityProvider } from '@/context/accessibility-context';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Obimi',
    default: 'Obimi | Empowering SEND Families',
  },
  description:
    'Obimi provides guidance, resources, and community support for parents and caregivers of children with Special Educational Needs and Disabilities (SEND).',
  openGraph: {
    title: 'Obimi | Empowering SEND Families',
    description:
      'Obimi provides guidance, resources, and community support for parents and caregivers of children with Special Educational Needs and Disabilities (SEND).',
    url: 'https://obimi.org',
    siteName: 'Obimi',
    type: 'website',
  },
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <AccessibilityProvider>
      <Navbar />
      {children}
      <Footer />
      <FloatingSideTab />
      <AccessibilityToolbar />
    </AccessibilityProvider>
  );
}
