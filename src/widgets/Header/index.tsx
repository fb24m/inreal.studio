'use client'

import { Logo } from '@/entities/Logo'
import { Menu } from '@/features/Menu'

import styles from './Header.module.scss'
import Link from 'next/link'
import { Container } from '@/shared/components/Container'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'

export const Header = () => {
	const searchParams = useSearchParams()
	const hideHeader = searchParams.has('modal')

	return (
		<header className={clsx(styles.header, hideHeader && styles.hide)}>
			<Container className={styles.container}>
				<Link href="/">
					<Logo />
				</Link>
				<Menu />
			</Container>
		</header>
	)
}
