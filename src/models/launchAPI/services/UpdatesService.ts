/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Update } from '../models/Update';
import { request as __request } from '../core/request';

export class UpdatesService {

    /**
     * API endpoint that allows Updates to be viewed.
     * @param createdOn 
     * @param launch 
     * @param program 
     * @param launchLaunchServiceProvider 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async updatesList(
createdOn?: string,
launch?: string,
program?: string,
launchLaunchServiceProvider?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
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
     * @param id 
     * @returns Update 
     * @throws ApiError
     */
    public static async updatesRead(
id: string,
): Promise<Update> {
        const result = await __request({
            method: 'GET',
            path: `/updates/${id}/`,
        });
        return result.body;
    }

}