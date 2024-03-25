import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/global/fonst'
import { Header } from '@/widgets/Header';

export const metadata: Metadata = {
  title: "Inreal Studio",
  description: "Inreal Studio seo description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
