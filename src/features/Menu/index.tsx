'use client'

import { Button } from '@/shared/components/Button'
import clsx from 'clsx'
import styles from './Menu.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@/shared/icons/Menu'
import { CrossIcon } from '@/shared/icons/Cross'


export const Menu = () => {
	const { menu, opened, window, close, navigation, button, menuButton } = styles
	const [isOpened, setIsOpened] = useState(false)

	return (
		<>
			<div className={clsx(menu, isOpened && opened)}>
				<div className={window}>
					<div className={close} onClick={() => { setIsOpened(false) }}>
						<CrossIcon />
					</div>
					<nav className={navigation}>
						<Button appearance="transparent"><Link href="/portfolio">портфолио</Link></Button>
						<Button appearance="transparent">контакты</Button>
					</nav>
					<Button className={button}>Связаться</Button>
				</div>
			</div>
			<Button className={menuButton} onClick={() => { setIsOpened(true) }}>
				<MenuIcon />
			</Button>
		</>
	)
}