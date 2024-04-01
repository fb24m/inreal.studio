'use server'

import { telegram } from '@/shared/api/telegram'

export const createRequest = async (formData: FormData) => {
	const name = formData.get('name')
	const number = formData.get('tel')

	await telegram.send(`Заявка от ${name} на номер ${number}`)
}