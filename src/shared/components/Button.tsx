import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	appearance?: 'primary' | 'secondary' | 'transparent'
	size?: 'normal' | 'large'
}

export const Button = ({ className, appearance = 'primary', size = 'normal', ...props }: ButtonProps) => {
	const appearances = {
		primary: 'bg-white hover:bg-slate-200 active:bg-slate-400',
		secondary: 'border-white border-1 border-solid text-white',
		transparent: 'hover:bg-[#ffffff20] active:bg-[#ffffff30] text-white'
	}

	const sizes = {
		normal: 'py-2 px-4',
		large: ''
	}

	return (
		<span
			className={clsx(
				className,
				appearances[appearance],
				sizes[size],
				'rounded-full inline-block',
				'font-manrope font-semibold uppercase text-center',
				'cursor-pointer select-none',
				'transition-colors duration-200')}
			{...props} />
	)
}
