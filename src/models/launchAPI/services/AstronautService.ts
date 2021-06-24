/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AstronautDetailed } from '../models/AstronautDetailed';
import type { AstronautNormal } from '../models/AstronautNormal';
import { request as __request } from '../core/request';

export class AstronautService {

    /**
     * API endpoint that allows Astronaut to be viewed.
     * @param dateOfDeath 
     * @param name 
     * @param status 
     * @param dateOfBirth 
     * @param nationality 
     * @param agencyAbbrev 
     * @param agencyName 
     * @param dateOfBirthGt 
     * @param dateOfBirthLt 
     * @param dateOfBirthGte 
     * @param dateOfBirthLte 
     * @param dateOfDeathGt 
     * @param dateOfDeathLt 
     * @param dateOfDeathGte 
     * @param dateOfDeathLte 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async astronautList(
dateOfDeath?: string,
name?: string,
status?: string,
dateOfBirth?: string,
nationality?: string,
agencyAbbrev?: string,
agencyName?: string,
dateOfBirthGt?: string,
dateOfBirthLt?: string,
dateOfBirthGte?: string,
dateOfBirthLte?: string,
dateOfDeathGt?: string,
dateOfDeathLt?: string,
dateOfDeathGte?: string,
dateOfDeathLte?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<AstronautNormal>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/astronaut/`,
            query: {
                'date_of_death': dateOfDeath,
                'name': name,
                'status': status,
                'date_of_birth': dateOfBirth,
                'nationality': nationality,
                'agency__abbrev': agencyAbbrev,
                'agency__name': agencyName,
                'date_of_birth__gt': dateOfBirthGt,
                'date_of_birth__lt': dateOfBirthLt,
                'date_of_birth__gte': dateOfBirthGte,
                'date_of_birth__lte': dateOfBirthLte,
                'date_of_death__gt': dateOfDeathGt,
                'date_of_death__lt': dateOfDeathLt,
                'date_of_death__gte': dateOfDeathGte,
                'date_of_death__lte': dateOfDeathLte,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Astronaut to be viewed.
     * @param id A unique integer value identifying this Astronaut.
     * @returns AstronautDetailed 
     * @throws ApiError
     */
    public static async astronautRead(
id: number,
): Promise<AstronautDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/astronaut/${id}/`,
        });
        return result.body;
    }

}