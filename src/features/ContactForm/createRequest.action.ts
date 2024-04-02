'use server'

import { telegram } from '@/shared/api/telegram'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'

export const createRequest = async (formData: FormData) => {
	const headersList = headers()

	const name = formData.get('name')
	const number = formData.get('tel')
	const pathname = formData.get('pathname')! as string

	await telegram.send(`Заявка от ${name} на номер ${number}`)

	redirect(pathname)
}