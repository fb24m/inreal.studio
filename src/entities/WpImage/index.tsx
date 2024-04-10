import { wordpress } from '@/shared/api/wordpress'
import Image from 'next/image'
import { WpImageProps } from './WpImage.props'

export const WpImage = async ({ imageId, ...props }: WpImageProps) => {
	const media = await wordpress.getMediaById(imageId)

	return (
		<Image src={media?.source_url} alt={media.alt_text} {...props} />
	)
}