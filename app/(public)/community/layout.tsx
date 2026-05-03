import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Join Our SEND Parent Community | Obimi',
  description:
    "The SEND journey can feel isolating, but you don't have to go through it alone. Join a community of parents who understand, share, and support each other.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
