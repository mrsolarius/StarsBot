/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SpaceStation } from '../models/SpaceStation';
import type { SpaceStationDetailed } from '../models/SpaceStationDetailed';
import { request as __request } from '../core/request';

export class SpacestationService {

    /**
     * API endpoint that allows Space Stations to be viewed.
     * @param name 
     * @param status 
     * @param owners 
     * @param orbit 
     * @param type 
     * @param ownersName 
     * @param ownersAbbrev 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async spacestationList(
name?: string,
status?: string,
owners?: string,
orbit?: string,
type?: string,
ownersName?: string,
ownersAbbrev?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<SpaceStation>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/spacestation/`,
            query: {
                'name': name,
                'status': status,
                'owners': owners,
                'orbit': orbit,
                'type': type,
                'owners__name': ownersName,
                'owners__abbrev': ownersAbbrev,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Space Stations to be viewed.
     * @param id 
     * @returns SpaceStationDetailed 
     * @throws ApiError
     */
    public static async spacestationRead(
id: string,
): Promise<SpaceStationDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/spacestation/${id}/`,
        });
        return result.body;
    }

}