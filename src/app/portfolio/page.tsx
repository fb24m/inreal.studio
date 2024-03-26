import { Container } from '@/shared/components/Container'
import { Tab } from '@/shared/components/Tab'
import { TabPanel } from '@/shared/components/TabPanel'
import { Tabs } from '@/shared/components/Tabs'
import { TabsList } from '@/shared/components/TabsList'
import { Title1 } from '@/shared/components/Title1'

import styles from './page.module.scss'
import { Title3 } from '@/shared/components/Title3'
import { Body1 } from '@/shared/components/Body1'

const Portfolio = () => {
	return (
		<Container>
			<Title1>Портфолио</Title1>
			<Tabs>
				<TabsList>
					<Tab className="tab" index={0}>вкладка</Tab>
					<Tab className="tab" index={1}>вкладка</Tab>
					<Tab className="tab" index={2}>вкладка</Tab>
					<Tab className="tab" index={3}>вкладка</Tab>
				</TabsList>
				<TabPanel index={0}>
					<div className={styles.tabHeader}>
						<div className={styles.tabHeading}>
							<Title3>3d анимация</Title3>
							<Body1>
								Создание персонажей и анимации любой сложности и стилистики
							</Body1>
						</div>
					</div>
				</TabPanel>
				<TabPanel index={1}>
					Вкладка 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore illum inventore adipisci quam cumque sint tempora officiis vel! Nisi et saepe cum magnam molestias totam ratione, sit libero eos.
				</TabPanel>
				<TabPanel index={2}>
					Вкладка 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore illum inventore adipisci quam cumque sint tempora officiis vel! Nisi et saepe cum magnam molestias totam ratione, sit libero eos.
				</TabPanel>
				<TabPanel index={3}>
					Вкладка 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore illum inventore adipisci quam cumque sint tempora officiis vel! Nisi et saepe cum magnam molestias totam ratione, sit libero eos.
				</TabPanel>
			</Tabs>
		</Container>
	)
}

export default Portfolio
