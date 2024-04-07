import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/global/fonst'
import { ScrollTrigger } from '@/shared/components/ScrollTrigger'
import { Suspense, type ReactNode } from 'react'
import { ContactPopup } from '@/widgets/popups/ContactPopup'
import { SocialsPopup } from '@/widgets/popups/SocialsPopup'

export const metadata: Metadata = {
  title: "Inreal Studio",
  description: "Inreal Studio seo description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (

    <html lang="en" data-document-element id="html">
      <body className={jost.className}>
        <div className="wrapper">
          {children}
        </div>
        <Suspense>
          <ContactPopup />
          <SocialsPopup />
        </Suspense>
        <ScrollTrigger />
      </body>
    </html>
  );
}