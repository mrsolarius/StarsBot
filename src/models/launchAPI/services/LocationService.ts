/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from '../models/Location';
import type { LocationDetail } from '../models/LocationDetail';
import { request as __request } from '../core/request';

export class LocationService {

    /**
     * API endpoint that allows Location instances to be viewed.
     * @param name 
     * @param countryCode 
     * @param id 
     * @param padLocationId 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async locationList(
name?: string,
countryCode?: string,
id?: number,
padLocationId?: string,
search?: string,
limit?: number,
offset?: number,
): Promise<{
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
     * @param id A unique integer value identifying this Location.
     * @returns LocationDetail 
     * @throws ApiError
     */
    public static async locationRead(
id: number,
): Promise<LocationDetail> {
        const result = await __request({
            method: 'GET',
            path: `/location/${id}/`,
        });
        return result.body;
    }

}