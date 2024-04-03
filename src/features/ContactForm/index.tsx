'use client'

import { Card } from '@/shared/components/Card'
import styles from './ContactForm.module.scss'
import { Title3 } from '@/shared/components/Title3'
import { Input } from '@/shared/components/Input'
import { Button } from '@/shared/components/Button'

import { createRequest } from './createRequest.action'
import { usePathname } from 'next/navigation'
import { useIMask } from 'react-imask'
import { useEffect, useState } from 'react'

export const ContactForm = () => {
	const pathname = usePathname()

	const [options, setOptions] = useState({})

	useEffect(() => {
		setOptions({
			mask: '+7 (000) 000-00-00'
		})
	}, [])

	const { ref } = useIMask(options)

	return (
		<Card className={styles.card}>
			<Title3 className={styles.cardTitle}>
				рассчитаем полную <br /> стоимость вашего проекта
			</Title3>
			<form action={createRequest} className={styles.form}>
				<input type="text" readOnly style={{ display: 'none' }} name="pathname" value={pathname} />
				<Input placeholder="Ваше имя" name="name" />
				<Input mask="+7 (000) 000-00-00" placeholder="+7 (" type="tel" name="tel" required />
				<button>
					<Button appearance="primary" size="large">Оставить заявку</Button>
				</button>
			</form>
		</Card>
	)
}