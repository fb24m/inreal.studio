import { Logo } from '@/entities/Logo'
import { Menu } from '@/features/Menu'

import styles from './Header.module.scss'
import Link from 'next/link'
import { Container } from '@/shared/components/Container'

export const Header = () => {
	const { header, container } = styles

	return (
		<header className={header}>
			<Container className={container}>
				<Link href="/">
					<Logo />
				</Link>
				<Menu />
			</Container>
		</header>
	)
}
