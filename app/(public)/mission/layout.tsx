import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Mission & Vision | Obimi',
  description:
    'At Obimi, our mission is to support, empower, and connect parents and caregivers of children with additional needs.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
