/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Expedition } from '../models/Expedition';
import type { ExpeditionDetail } from '../models/ExpeditionDetail';
import { request as __request } from '../core/request';

export class ExpeditionService {

    /**
     * API endpoint that allows Expeditions to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async expeditionList({
crewAstronautAgency,
name,
spaceStation,
crewAstronaut,
startGt,
startLt,
startGte,
startLte,
endGt,
endLt,
endGte,
endLte,
search,
ordering,
limit,
offset,
}: {
crewAstronautAgency?: string,
name?: string,
spaceStation?: string,
crewAstronaut?: string,
startGt?: string,
startLt?: string,
startGte?: string,
startLte?: string,
endGt?: string,
endLt?: string,
endGte?: string,
endLte?: string,
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
results: Array<Expedition>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/expedition/`,
            query: {
                'crew__astronaut__agency': crewAstronautAgency,
                'name': name,
                'space_station': spaceStation,
                'crew__astronaut': crewAstronaut,
                'start__gt': startGt,
                'start__lt': startLt,
                'start__gte': startGte,
                'start__lte': startLte,
                'end__gt': endGt,
                'end__lt': endLt,
                'end__gte': endGte,
                'end__lte': endLte,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Expeditions to be viewed.
     * @returns ExpeditionDetail 
     * @throws ApiError
     */
    public static async expeditionRead({
id,
}: {
/** A unique integer value identifying this expedition. **/
id: number,
}): Promise<ExpeditionDetail> {
        const result = await __request({
            method: 'GET',
            path: `/expedition/${id}/`,
        });
        return result.body;
    }

}