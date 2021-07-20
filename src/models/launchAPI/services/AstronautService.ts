/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AstronautDetailed } from '../models/AstronautDetailed';
import type { AstronautNormal } from '../models/AstronautNormal';
import { request as __request } from '../core/request';

export class AstronautService {

    /**
     * API endpoint that allows Astronaut to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async astronautList({
dateOfDeath,
nationality,
agencyName,
name,
agencyAbbrev,
status,
dateOfBirth,
dateOfBirthGt,
dateOfBirthLt,
dateOfBirthGte,
dateOfBirthLte,
dateOfDeathGt,
dateOfDeathLt,
dateOfDeathGte,
dateOfDeathLte,
search,
ordering,
limit,
offset,
}: {
dateOfDeath?: string,
nationality?: string,
agencyName?: string,
name?: string,
agencyAbbrev?: string,
status?: string,
dateOfBirth?: string,
dateOfBirthGt?: string,
dateOfBirthLt?: string,
dateOfBirthGte?: string,
dateOfBirthLte?: string,
dateOfDeathGt?: string,
dateOfDeathLt?: string,
dateOfDeathGte?: string,
dateOfDeathLte?: string,
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
results: Array<AstronautNormal>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/astronaut/`,
            query: {
                'date_of_death': dateOfDeath,
                'nationality': nationality,
                'agency__name': agencyName,
                'name': name,
                'agency__abbrev': agencyAbbrev,
                'status': status,
                'date_of_birth': dateOfBirth,
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
     * @returns AstronautDetailed 
     * @throws ApiError
     */
    public static async astronautRead({
id,
}: {
/** A unique integer value identifying this Astronaut. **/
id: number,
}): Promise<AstronautDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/astronaut/${id}/`,
        });
        return result.body;
    }

}