'use client'

import { HomeScreen } from '@/entities/HomeScreen'
import { useMedia } from '@/shared/hooks/useMedia.hook'
import { useEffect } from 'react'

export const HomeBackground = () => {
	const pc = useMedia('(min-width: 992px)')


	useEffect(() => {
		const screens = document.querySelectorAll('.screen')
		const html = document.querySelector('#home-screens')! as HTMLElement

		html.style.height = `${100 * screens.length + 1}vh`

		const screenHeight = html.scrollHeight / screens.length

		for (let i = screens.length - 1; i >= 0; i--) {
			let screen = screens[i] as HTMLElement

			screen.style.transition = `transform 1.2s, opacity .5s, max-height 1.2s, margin-top .85s`
			screen.style.zIndex = `${i}`

			const nextButton = document.querySelector('[data-next]')

			if (nextButton) {
				nextButton.addEventListener('click', () => {
					window.scrollTo({
						top: window.scrollY + screenHeight + 80,
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
						image.style.marginTop = '0'
					}

					if (video) {
						video.style.transform = `scale(${1 + (thisScroll / screenHeight) / 2}) translateY(${(thisScroll / screenHeight) * 5}px)`
						video.style.marginTop = '0'
					}

					screen.style.opacity = '1'
					screen.style.transform = `none`
					screen.style.maxHeight = `${screenHeight}px`
					screen.style.marginTop = `0px`
				}
				else if (thisScroll <= screenHeight) {
					screen.style.transform = `rotateZ(20deg) scale(.75)`
					screen.style.maxHeight = '0px'

					const image = screen.querySelector('img')
					const video = screen.querySelector('video')

					if (pc) {

						if (image) {
							image.style.transform = 'scale(1.25) rotateZ(-20deg)'
							image.style.marginTop = '-28%'
						}
						if (video) {
							video.style.transform = 'scale(1.25) rotateZ(-20deg)'
							video.style.marginTop = '-28%'
						}

						screen.style.marginTop = '40vh';
					}

					else {
						screen.style.transform = 'rotateZ(0)'
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
	}, [pc])

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