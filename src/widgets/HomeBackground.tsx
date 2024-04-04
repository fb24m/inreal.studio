'use client'

import { HomeScreen } from '@/entities/HomeScreen'
import { useMedia } from '@/shared/hooks/useMedia.hook'
import { useEffect } from 'react'

export const HomeBackground = () => {
	const tablet = useMedia('(max-width: 769px)')
	const mobile = useMedia('(max-width: 426px)')

	console.log(tablet)
	console.log(mobile)

	useEffect(() => {
		const screens = document.querySelectorAll('.screen')
		const html = document.querySelector('#home-screens')! as HTMLElement

		html.style.height = `${100 * screens.length + 1}vh`

		const screenHeight = html.scrollHeight / screens.length

		for (let i = screens.length - 1; i >= 0; i--) {
			let screen = screens[i] as HTMLElement

			screen.style.transition = `transform 1.2s, opacity .5s, max-height 1.2s, margin-top 1s`
			screen.style.zIndex = `${i}`

			const nextButton = document.querySelector('[data-next]')

			if (nextButton) {
				nextButton.addEventListener('click', () => {
					window.scrollTo({
						top: window.scrollY + screenHeight + 160,
						behavior: 'smooth'
					})
				})
			}

			window.addEventListener('scroll', () => {
				const thisScroll = window.scrollY - screenHeight * i

				if (thisScroll >= 0 && thisScroll <= screenHeight) {
					const image = screen.querySelector('img')
					const video = screen.querySelector('video')

					if (image) {
						image.style.transform = `scale(${1 + (thisScroll / screenHeight) / 2}) translateY(${(thisScroll / screenHeight) * 5}px)`
					}

					if (video) {
						video.style.transform = `scale(${1 + (thisScroll / screenHeight) / 2}) translateY(${(thisScroll / screenHeight) * 5}px)`
					}

					screen.style.opacity = '1'
					screen.style.transform = `none`
					screen.style.maxHeight = `${screenHeight}px`
					screen.style.marginTop = `0px`
				}
				else if (thisScroll <= screenHeight) {
					screen.style.transform = `rotateZ(18deg) scale(.85)`
					screen.style.maxHeight = '0px'

					if (mobile) {
						screen.style.marginTop = '50%';
					}

					else if (tablet) {
						screen.style.marginTop = '40%';
					}

					else {
						screen.style.marginTop = '28%';
					}
				}

				if (screen.style.opacity === '1') {
					screen.classList.add('_current')
				}
				else {
					screen.classList.remove('_current')
				}
			})
		}
	}, [tablet, mobile])

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