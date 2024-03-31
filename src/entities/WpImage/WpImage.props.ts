import { HTMLAttributes } from 'react'

export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	imageId: number
	width: number
	height: number
}