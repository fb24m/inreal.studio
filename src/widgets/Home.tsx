'use client'

import { HomeScreen } from '@/entities/HomeScreen'
import { useEffect } from 'react'

export const Home = () => {
	useEffect(() => {
		const screens = document.querySelectorAll('.screen')
		const html = document.querySelector('html')! as HTMLElement

		html.style.height = `${100 * screens.length + 1}vh`

		const screenHeight = html.scrollHeight / screens.length

		for (let i = screens.length - 1; i >= 0; i--) {
			let screen = screens[i] as HTMLElement

			screen.style.transition = `transform .8s, opacity .5s`

			window.addEventListener('scroll', () => {
				const thisScroll = window.scrollY - screenHeight * i

				if (thisScroll >= 0 && thisScroll <= screenHeight) {
					const image = screen.querySelector('img')

					if (image) {
						image.style.transform = `scale(${1 + (thisScroll / screenHeight) / 4}) translateY(${(thisScroll / screenHeight) * 5}px)`
					}

					screen.style.opacity = '1'
					screen.style.transform = `none`
				}
				else if (thisScroll <= screenHeight) {
					screen.style.transform = `translateX(100%)`
				}
				else if (thisScroll >= screenHeight) {
					screen.style.transform = `translateX(-100%)`
				}

				if (screen.style.opacity === '1') {
					screen.classList.add('_current')
				}
				else {
					screen.classList.remove('_current')
				}
			})
		}
	}, [])

	return (
		<div>
			<HomeScreen label="INREAL.STUDIO" img="/inreal.studio.png" first />
			<HomeScreen label="3d моделирование" img="/3d-modeling.png" />
			<HomeScreen label="3d Анимация" img="/3d-animation.png" />
			<HomeScreen label="3d визуализация" img="/3d-visualization.png" />
			<HomeScreen label="Фотограмметрия" img="/photogrammetry.png" />
		</div>
	)
}