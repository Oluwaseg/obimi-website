import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Support Obimi | Empower Families',
  description:
    'Your support helps parents and caregivers navigate the SEND journey with confidence, clarity, and community.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
