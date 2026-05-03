import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Meet Our Team | Obimi',
  description:
    'A passionate team dedicated to supporting parents and caregivers every step of the way, built from real lived experience.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
