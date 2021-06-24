/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Expedition } from '../models/Expedition';
import type { ExpeditionDetail } from '../models/ExpeditionDetail';
import { request as __request } from '../core/request';

export class ExpeditionService {

    /**
     * API endpoint that allows Expeditions to be viewed.
     * @param crewAstronaut 
     * @param name 
     * @param spaceStation 
     * @param crewAstronautAgency 
     * @param startGt 
     * @param startLt 
     * @param startGte 
     * @param startLte 
     * @param endGt 
     * @param endLt 
     * @param endGte 
     * @param endLte 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async expeditionList(
crewAstronaut?: string,
name?: string,
spaceStation?: string,
crewAstronautAgency?: string,
startGt?: string,
startLt?: string,
startGte?: string,
startLte?: string,
endGt?: string,
endLt?: string,
endGte?: string,
endLte?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Expedition>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/expedition/`,
            query: {
                'crew__astronaut': crewAstronaut,
                'name': name,
                'space_station': spaceStation,
                'crew__astronaut__agency': crewAstronautAgency,
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
     * @param id A unique integer value identifying this expedition.
     * @returns ExpeditionDetail 
     * @throws ApiError
     */
    public static async expeditionRead(
id: number,
): Promise<ExpeditionDetail> {
        const result = await __request({
            method: 'GET',
            path: `/expedition/${id}/`,
        });
        return result.body;
    }

}