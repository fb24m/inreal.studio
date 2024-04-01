import { ContactCards } from '@/features/ContactCards'
import { Popup } from '@/shared/components/Popup'
import { Title2 } from '@/shared/components/Title2'
import styles from './ContactPopup.module.scss'
import { Card } from '@/shared/components/Card'
import { Title3 } from '@/shared/components/Title3'
import { Input } from '@/shared/components/Input'
import { Button } from '@/shared/components/Button'

export const ContactPopup = () => {
	return (
		<Popup popupName="contact">
			<Title2 className={styles.title}>Контакты</Title2>
			<ContactCards />
			<Card className={styles.card}>
				<Title3 className={styles.cardTitle}>
					рассчитаем полную <br /> стоимость вашего проекта
				</Title3>
				<form action="" className={styles.form}>
					<Input placeholder="Ваше имя" />
					<Input placeholder="+7 (" />
					<Button appearance="primary" size="large">Оставить заявку</Button>
				</form>
			</Card>
		</Popup>
	)
}