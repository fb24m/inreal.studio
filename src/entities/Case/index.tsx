import { WpImage } from '../WpImage'
import { CaseProps } from './Case.props'
import styles from './Case.module.scss'
import Link from 'next/link'
import { Popup } from '@/shared/components/Popup'
import { Title2 } from '@/shared/components/Title2'
import { Suspense } from 'react'

const Case = (props: CaseProps) => {
	return (
		<Suspense>
			<div className={props.className}>
				<Link href={`?modal=${props.slug}`} className={styles.case}>
					<WpImage className={styles.image} imageId={props.preview} width={300} height={300} />
					<div className={styles.footer}>
						<h2 className={styles.title}>{props.title}</h2>
						<span className={styles.year}>{props.year}</span>
					</div>
				</Link>
				<Popup popupName={props.slug}>
					<div className={styles.images}>
						{props.images?.map((item) =>
							<WpImage key={item.image} className={styles.popupImage} imageId={item.image} width={300} height={300} />
						)}
					</div>
					<span className={styles.category}>
						{props.categoryName}
					</span>
					<Title2 className={styles.popupTitle}>{props.title}</Title2>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: props.description }}>

					</div>
				</Popup>
			</div>
		</Suspense>
	)
}

export default Case