import { WpImage } from '../WpImage'
import { CaseProps } from './Case.props'
import styles from './Case.module.scss'
import clsx from 'clsx'

export const Case = (props: CaseProps) => {

	return (
		<div className={clsx(props.className, styles.case)}>
			<WpImage className={styles.image} imageId={props.imageId} width={300} height={300} />
			<div className={styles.footer}>
				<h2 className={styles.title}>{props.title}</h2>
				<span className={styles.year}>{props.year}</span>
			</div>
		</div>
	)
}