'use client'

import { useState, type HTMLAttributes, createContext } from 'react'

export const TabsContext = createContext({
	activeTabIndex: 0,
	setActiveTabIndex: (arg: number) => { }
})

export const Tabs = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0)

	return (
		<TabsContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
			<div {...props}>
				{props.children}
				<hr />
				activeTabIndex: {activeTabIndex}
			</div>
		</TabsContext.Provider>
	)
}