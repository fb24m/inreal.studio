import clsx from 'clsx'
import styles from './HomeScreen.module.scss'
import Image from 'next/image'

export const HomeScreen = ({ label, image, first, video }: {
	label: string
	image: string
	first?: boolean
	video?: string
}) => {
	const { wrapper, imageEl, imgTag, title, top } = styles

	return (
		<div className={clsx('screen', wrapper, first && top)}>
			{video
				&& <video className={imageEl} autoPlay muted loop preload="metadata"><source media="(min-width: 993px)" src={video} type="video/mp4" /></video>}
			<Image width={2560} height={1080} src={image} alt="" className={clsx(imageEl, video && imgTag)} {...video && { media: "(max-width: 992px)" }} />
			<h2 className={title}>{label}</h2>
		</div>
	)
}
