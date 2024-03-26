import clsx from 'clsx'
import styles from './Button.module.scss'
import { manrope } from '@/global/fonst'
import { ButtonProps } from './Button.props'

export const Button = ({ className, appearance = 'primary', size = 'normal', ...props }: ButtonProps) => {
	const { button } = styles

	return (
		<span
			className={clsx(
				className,
				styles[appearance],
				styles[size],
				button,
				manrope.className)}
			{...props} />
	)
}
