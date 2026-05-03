import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Support Services | Obimi',
  description:
    'Practical, empathetic support designed to meet you wherever you are on your SEND journey, including 1-to-1 sessions, workshops, and peer support.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
