import { Container } from '@/shared/components/Container'
import clsx from 'clsx'

export const HomeScreen = ({ label, img, first }: {
	label: string
	img: string
	first?: boolean
}) => {
	return (
		<div className={clsx("bg-yellow-500 fixed w-full h-full top-0 left-0 text-5xl screen overflow-hidden", first && 'z-10')}>
			<img src={img} alt="" className="w-full h-full object-cover duration-75" />
			<h2 className="absolute bottom-9 left-5 uppercase text-white text-[120px]">{label}</h2>
		</div>
	)
}