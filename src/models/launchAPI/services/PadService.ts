/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pad } from '../models/Pad';
import { request as __request } from '../core/request';

export class PadService {

    /**
     * API endpoint that allows Location instances to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async padList({
name,
id,
location,
search,
limit,
offset,
}: {
name?: string,
id?: number,
location?: string,
/** A search term. **/
search?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
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
     * @returns Pad 
     * @throws ApiError
     */
    public static async padRead({
id,
}: {
/** A unique integer value identifying this Pad. **/
id: number,
}): Promise<Pad> {
        const result = await __request({
            method: 'GET',
            path: `/pad/${id}/`,
        });
        return result.body;
    }

}