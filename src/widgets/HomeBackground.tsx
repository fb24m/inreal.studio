'use client'

import { HomeScreen } from '@/entities/HomeScreen'
import { useMedia } from '@/shared/hooks/useMedia.hook'
import { useEffect } from 'react'

export const HomeBackground = () => {
	useEffect(() => {
		const screens = document.querySelectorAll('.screen')
		const html = document.querySelector('#home-screens')! as HTMLElement

		html.style.height = `${100 * screens.length + 1}vh`

		const screenHeight = html.scrollHeight / screens.length

		for (let i = screens.length - 1; i >= 0; i--) {
			let screen = screens[i] as HTMLElement

			screen.style.maxHeight = '0px'

			const nextButton = document.querySelector('[data-next]')

			if (nextButton) {
				nextButton.addEventListener('click', () => {
					window.scrollTo({
						top: window.scrollY + screenHeight + 10,
						behavior: 'smooth'
					})
				})
			}

			window.addEventListener('scroll', () => {
				const thisScroll = window.scrollY - screenHeight * i

				const image = screen.querySelector('img')
				const video = screen.querySelector('video')

				if (thisScroll >= 0 && thisScroll <= screenHeight) {
					if (image) {
						image.style.transform = `scale(${1 + (thisScroll / screenHeight)})`
						image.removeAttribute('data-before-current')
					}

					if (video) {
						video.style.transform = `scale(${1 + (thisScroll / screenHeight)})`
						video.removeAttribute('data-before-current')
					}

					screen.style.maxHeight = `${screenHeight}px`

					screen.removeAttribute('data-scrolled')
					screen.setAttribute('data-before-scrolled', '')
				}
				else if (thisScroll <= screenHeight) {
					screen.setAttribute('data-scrolled', '')
					screen.removeAttribute('data-before-scrolled')

					screen.style.maxHeight = '0px'

					if (image) {
						image.setAttribute('data-before-current', '')
					}
					if (video) {
						video.setAttribute('data-before-current', '')
					}
				}
			})
		}
	}, [])

	return (
		<div id="home-screens">
			<HomeScreen label="INREAL.STUDIO" image="/87462254c31a11fd5eb0320a0f244bd7 (1).png" video="/0325.mp4" first />
			<HomeScreen label="3d моделирование" image="/3d-modeling.png" />
			<HomeScreen label="3d Анимация" image="/-f568-47fb-8760-4a58b00a68ec (1).jpg" video="/-f568-47fb-8760-4a58b00a68ec.mp4" />
			<HomeScreen label="3d визуализация" image="/-73b9-4060-8f38-c5968c6d6043 (1) (2).jpg" video="/-73b9-4060-8f38-c5968c6d6043.mp4" />
			<HomeScreen label="Фотограмметрия" image="/photogrammetry.png" />
		</div>
	)
}