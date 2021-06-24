/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pad } from '../models/Pad';
import { request as __request } from '../core/request';

export class PadService {

    /**
     * API endpoint that allows Location instances to be viewed.
     * @param name 
     * @param id 
     * @param location 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async padList(
name?: string,
id?: number,
location?: string,
search?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Pad>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/pad/`,
            query: {
                'name': name,
                'id': id,
                'location': location,
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Location instances to be viewed.
     * @param id A unique integer value identifying this Pad.
     * @returns Pad 
     * @throws ApiError
     */
    public static async padRead(
id: number,
): Promise<Pad> {
        const result = await __request({
            method: 'GET',
            path: `/pad/${id}/`,
        });
        return result.body;
    }

}