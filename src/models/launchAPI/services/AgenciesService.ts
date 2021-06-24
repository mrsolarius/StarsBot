/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agency } from '../models/Agency';
import type { AgencySerializerDetailed } from '../models/AgencySerializerDetailed';
import { request as __request } from '../core/request';

export class AgenciesService {

    /**
     * API endpoint that allows Agencies to be viewed.
     * @param featured 
     * @param agencyType 
     * @param countryCode 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async agenciesList(
featured?: string,
agencyType?: string,
countryCode?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Agency>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/agencies/`,
            query: {
                'featured': featured,
                'agency_type': agencyType,
                'country_code': countryCode,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Agencies to be viewed.
     * @param id 
     * @returns AgencySerializerDetailed 
     * @throws ApiError
     */
    public static async agenciesRead(
id: string,
): Promise<AgencySerializerDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/agencies/${id}/`,
        });
        return result.body;
    }

}