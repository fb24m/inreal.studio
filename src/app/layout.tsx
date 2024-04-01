import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/global/fonst'
import { ScrollTrigger } from '@/shared/components/ScrollTrigger'
import { type ReactNode } from 'react'
import { ContactPopup } from '@/widgets/popups/ContactPopup'
import { SocialsPopup } from '@/widgets/popups/SocialsPopup'

export const metadata: Metadata = {
  title: "Inreal Studio",
  description: "Inreal Studio seo description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (

    <html lang="en">
      <body className={jost.className}>
        <div className="wrapper">
          {children}
        </div>
        <ContactPopup />
        <SocialsPopup />

        <ScrollTrigger />
      </body>
    </html>
  );
}