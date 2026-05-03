import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Obimi',
  description:
    'Read our privacy policy to understand how we collect, use, and protect your data at Obimi.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
