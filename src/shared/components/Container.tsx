import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={clsx(className, 'max-w-[1200px] px-4 mx-auto')} {...props}></div>
)