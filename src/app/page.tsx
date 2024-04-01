import { HomeBackground } from '@/widgets/HomeBackground'

import styles from './page.module.scss'
import clsx from 'clsx'
import { manrope } from '@/global/fonst'
import { Button } from '@/shared/components/Button'
import { ArrowIcon } from '@/shared/icons/ArrowForward'
import Link from 'next/link'
import { Suspense } from 'react'
import { Header } from '@/widgets/Header'

export default function HomePage() {
  const { overlay, label, button, title } = styles

  return (
    <>
      <Header />
      <Suspense>
        <div className={overlay} data-prevent-header>
          <div className={title}>
            <span className={clsx(label, manrope.className)}>Креатив в 3D</span>
            <Button appearance="secondary" className={button} data-next>
              <span>
                •
              </span>
              <ArrowIcon />
            </Button>
          </div>
          <Link href="/portfolio">
            <Button appearance="secondary" size="large" className={styles.portfolioButton}>смотреть работы</Button>
          </Link>
        </div>
        <HomeBackground />
      </Suspense>
    </>
  )
}
