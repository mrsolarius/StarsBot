/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Agency } from '../models/Agency';
import type { AgencySerializerDetailed } from '../models/AgencySerializerDetailed';
import { request as __request } from '../core/request';

export class AgenciesService {

    /**
     * API endpoint that allows Agencies to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async agenciesList({
featured,
agencyType,
countryCode,
search,
ordering,
limit,
offset,
}: {
featured?: string,
agencyType?: string,
countryCode?: string,
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
     * @returns AgencySerializerDetailed 
     * @throws ApiError
     */
    public static async agenciesRead({
id,
}: {
id: string,
}): Promise<AgencySerializerDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/agencies/${id}/`,
        });
        return result.body;
    }

}