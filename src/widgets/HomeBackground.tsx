'use client'

import { HomeScreen } from '@/entities/HomeScreen'
import { useEffect } from 'react'

export const HomeBackground = () => {
	useEffect(() => {
		const screens = document.querySelectorAll('.screen')
		const html = document.querySelector('#home-screens')! as HTMLElement

		html.style.height = `${100 * screens.length + 1}vh`

		const screenHeight = html.scrollHeight / screens.length

		for (let i = screens.length - 1; i >= 0; i--) {
			let screen = screens[i] as HTMLElement

			screen.style.transition = `transform .8s, opacity .5s, max-height .8s, margin-top .8s`
			screen.style.zIndex = `${i}`

			const nextButton = document.querySelector('[data-next]')

			if (nextButton) {
				nextButton.addEventListener('click', () => {
					console.log('click')

					window.scrollTo({
						top: window.scrollY + screenHeight,
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
					screen.style.transform = `rotateZ(30deg) scale(.25)`
					screen.style.maxHeight = '0px'
					screen.style.marginTop = `30%`
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
		<div id="home-screens">
			<HomeScreen label="INREAL.STUDIO" img="/0325.mp4" video first />
			<HomeScreen label="3d моделирование" img="/3d-modeling.png" />
			<HomeScreen label="3d Анимация" img="/-f568-47fb-8760-4a58b00a68ec.mp4" video />
			<HomeScreen label="3d визуализация" img="/-73b9-4060-8f38-c5968c6d6043.mp4" video />
			<HomeScreen label="Фотограмметрия" img="/photogrammetry.png" />
		</div>
	)
}