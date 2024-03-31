import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/global/fonst'
import { Header } from '@/widgets/Header'
import { ScrollTrigger } from '@/shared/components/ScrollTrigger';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Inreal Studio",
  description: "Inreal Studio seo description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>Loading, please wait...</>}>
      <html lang="en">
        <body className={jost.className}>
          <div className="wrapper">
            <Header />
            <main>
              {children}
            </main>
          </div>
          <ScrollTrigger />
        </body>
      </html>
    </Suspense>
  );
}
