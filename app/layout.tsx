import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const font = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밥정너',
  description: '밥은 정해져있고 너만 답하면 돼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
