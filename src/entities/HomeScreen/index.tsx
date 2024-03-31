import clsx from 'clsx'
import styles from './HomeScreen.module.scss'
import Image from 'next/image'

export const HomeScreen = ({ label, img, first, video }: {
	label: string
	img: string
	first?: boolean
	video?: boolean
}) => {
	const { wrapper, image, title, top } = styles

	return (
		<div className={clsx('screen', wrapper, first && top)}>
			{video
				? <video className={image} autoPlay muted loop><source src={img} type="video/mp4" /></video>
				: <Image width={2560} height={1080} src={img} alt="" className={image} />}
			<h2 className={title}>{label}</h2>
		</div>
	)
}
