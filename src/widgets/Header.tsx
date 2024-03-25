import { Logo } from '@/entities/Logo'
import { Menu } from '@/features/Menu'

export const Header = () => (
	<header className="z-50 fixed top-0 left-0 w-full py-6 px-4 flex justify-between items-center">
		<Logo />
		<Menu />
	</header>
) 