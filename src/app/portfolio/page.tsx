import { Container } from '@/shared/components/Container'
import { Tab } from '@/shared/components/Tab'
import { Tabs } from '@/shared/components/Tabs'
import { TabsList } from '@/shared/components/TabsList'
import { Title1 } from '@/shared/components/Title1'

import styles from './page.module.scss'
import { PortfolioTab } from '@/widgets/PortfolioTab'
import { wordpress } from '@/shared/api/wordpress'
import { Suspense } from 'react'

const Portfolio = async () => {
	const categories = await wordpress.getWorkTypes()

	return (
		<Suspense fallback={<>Подождите...</>}>
			<div className={styles.portfolio}>
				<Container className={styles.container}>
					<Title1 className={styles.title}>Портфолио</Title1>
					<Tabs className={styles.tabs} defaultActive={categories[0].id}>
						<TabsList>
							{categories.map((category) =>
								<Tab key={category.id} index={category.id}>{category.name}</Tab>
							)}
						</TabsList>
						{categories.map((category) =>
							<PortfolioTab
								key={category.id}
								category={category.id}
								title={category.name}
								description={category.description}
								good_for={category.acf.good_for}
							/>
						)}
					</Tabs>
				</Container>
			</div>
		</Suspense>
	)
}

export default Portfolio
