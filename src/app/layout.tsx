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

    <html lang="en">
      <body className={jost.className}>
        <div className="wrapper">
          <Suspense fallback={<>Loading, please wait...</>}>
            <Header />
          </Suspense>
          <main>
            {children}
          </main>
        </div>
        <ScrollTrigger />
      </body>
    </html>

  );
}
