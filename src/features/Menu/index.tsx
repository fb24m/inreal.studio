'use client'

import { Button } from '@/shared/components/Button'
import clsx from 'clsx'
import styles from './Menu.module.scss'
import { useState } from 'react'


export const Menu = () => {
	const { menu, opened, window, close, navigation, button, menuButton } = styles
	const [isOpened, setIsOpened] = useState(false)

	return (
		<>
			<div className={clsx(menu, isOpened && opened)}>
				<div className={window}>
					<div className={close} onClick={() => { setIsOpened(false) }}>
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="28" height="28" rx="14" fill="white" />
							<path d="M18 18L14 14M14 14L10 10M14 14L18 10M14 14L10 18" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<nav className={navigation}>
						<Button appearance="transparent">портфолио</Button>
						<Button appearance="transparent">контакты</Button>
					</nav>
					<Button className={button}>Связаться</Button>
				</div>
			</div>
			<Button className={menuButton} onClick={() => { setIsOpened(true) }}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 14H19M5 10H19" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</Button>
		</>
	)
}