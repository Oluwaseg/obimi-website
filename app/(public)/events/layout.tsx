import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Press & Media | Obimi',
  description:
    'Read the latest news, press releases, and media coverage about Obimi and our mission to support SEND families.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
