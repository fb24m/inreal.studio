import { request } from '../functions/request'
import { CaseModel } from '../models/Case.model'
import { MediaModel } from '../models/Media.model'
import { WorkTypeModel } from '../models/WorkType.model'

const requestWordpress = async<T>(path: string): Promise<T> => {
	const response = await request<T>(`https://inreal.studio/wp-json/wp/v2/${path}`, [path], {
		'headers': {
			'Authorization': `Basic ${btoa(process.env.WP_TOKEN!)}`
		}
	})

	console.log(`requesting path ${path}`)
	return response
}

export const wordpress = {
	getCases: async () => requestWordpress<CaseModel[]>('portfolio'),
	getCasesByTypeId: async (typeId: number) => requestWordpress<CaseModel[]>(`portfolio?work_type=${typeId}`),
	getWorkTypes: async () => requestWordpress<WorkTypeModel[]>(`work_type`),
	getMediaById: async (id: number) => requestWordpress<MediaModel>(`media/${id}`),
}