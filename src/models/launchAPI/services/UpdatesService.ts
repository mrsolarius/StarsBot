/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Update } from '../models/Update';
import { request as __request } from '../core/request';

export class UpdatesService {

    /**
     * API endpoint that allows Updates to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async updatesList({
createdOn,
launch,
program,
launchLaunchServiceProvider,
search,
ordering,
limit,
offset,
}: {
createdOn?: string,
launch?: string,
program?: string,
launchLaunchServiceProvider?: string,
/** A search term. **/
search?: string,
/** Which field to use when ordering the results. **/
ordering?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Update>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/updates/`,
            query: {
                'created_on': createdOn,
                'launch': launch,
                'program': program,
                'launch__launch_service_provider': launchLaunchServiceProvider,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Updates to be viewed.
     * @returns Update 
     * @throws ApiError
     */
    public static async updatesRead({
id,
}: {
id: string,
}): Promise<Update> {
        const result = await __request({
            method: 'GET',
            path: `/updates/${id}/`,
        });
        return result.body;
    }

}