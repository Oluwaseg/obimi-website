import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Obimi',
  description:
    'Quick answers to help you understand how Obimi works and how we can support you and your family on the SEND journey.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
