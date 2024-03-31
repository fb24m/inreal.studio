export interface CaseModel {
	id: number
	title: { rendered: string }
	content: { rendered: string }
	featured_media: number
	work_type: number[]
	slug: string
	acf: {
		year: number
	}
}