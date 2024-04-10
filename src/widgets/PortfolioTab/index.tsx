import Case from '@/entities/Case'
import { wordpress } from '@/shared/api/wordpress'
import { CaseModel } from '@/shared/models/Case.model'
import { Body1 } from '@/shared/components/Body1'
import { TabPanel } from '@/shared/components/TabPanel'
import { Title3 } from '@/shared/components/Title3'

import styles from './PortfolioTab.module.scss'
import clsx from 'clsx'
import { manrope } from '@/global/fonst'
import { PortfolioTabProps } from './PortfolioTab.props'

const splitArray = <T,>(numbers: T[], templates: number[]): T[][] => {
	const result: T[][] = []
	let templateIndex = 0
	let currentIndex = 0

	while (currentIndex < numbers.length && templates.length > 0) {
		const currentTemplate = templates[templateIndex % templates.length]
		result.push(numbers.slice(currentIndex, currentIndex + currentTemplate))
		currentIndex += currentTemplate
		templateIndex++
	}

	return result
}

export const PortfolioTab = async (props: PortfolioTabProps) => {
	const portfolio = await wordpress.getCasesByTypeId(props.category)
	const cards = splitArray<CaseModel>(
		portfolio,
		[7])

	console.log('portlfolio', portfolio)

	return (
		<TabPanel index={props.category}>
			<div className={styles.tabHeader}>
				<div className={styles.tabHeading}>
					<Title3 dangerouslySetInnerHTML={{ __html: props.title }}></Title3>
					<Body1 className={styles.tabDescription} dangerouslySetInnerHTML={{ __html: props.description }}></Body1>
				</div>
				<div className={clsx(manrope.className, styles.tabTags)}>
					<span className={styles.tagsTitle}>Подходит для</span>
					<ul className={styles.tags}>
						{props.good_for.split(',').map((item) =>
							<li className={styles.tag} key={item}>{item}</li>
						)}
					</ul>
				</div>
			</div>
			<div className={styles.portfolioCards}>
				{cards.map((order) =>
					order.map((item, index) => <>
						<Case
							key={item.id}
							preview={item.featured_media}
							images={item.acf.images}
							category={item.work_type[0]}
							categoryName={props.title}
							year={JSON.stringify(item.acf.year)}
							description={item.content?.rendered}
							title={item.title?.rendered}
							position={index}
							slug={item.slug}
							className={styles.card}
						/>
					</>
					)
				)}
			</div>
		</TabPanel>
	)
}