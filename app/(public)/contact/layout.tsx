import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | Obimi',
  description:
    "Have a question or need support? We're here to help — reach out to the Obimi team and we'll get back to you.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
