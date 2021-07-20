/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from '../models/Location';
import type { LocationDetail } from '../models/LocationDetail';
import { request as __request } from '../core/request';

export class LocationService {

    /**
     * API endpoint that allows Location instances to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async locationList({
name,
countryCode,
id,
padLocationId,
search,
limit,
offset,
}: {
name?: string,
countryCode?: string,
id?: number,
padLocationId?: string,
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
results: Array<Location>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/location/`,
            query: {
                'name': name,
                'country_code': countryCode,
                'id': id,
                'pad__location_id': padLocationId,
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Location instances to be viewed.
     * @returns LocationDetail 
     * @throws ApiError
     */
    public static async locationRead({
id,
}: {
/** A unique integer value identifying this Location. **/
id: number,
}): Promise<LocationDetail> {
        const result = await __request({
            method: 'GET',
            path: `/location/${id}/`,
        });
        return result.body;
    }

}