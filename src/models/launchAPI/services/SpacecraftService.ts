/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Spacecraft } from '../models/Spacecraft';
import type { SpacecraftDetailed } from '../models/SpacecraftDetailed';
import type { SpacecraftFlight } from '../models/SpacecraftFlight';
import type { SpacecraftFlightDetailed } from '../models/SpacecraftFlightDetailed';
import { request as __request } from '../core/request';

export class SpacecraftService {

    /**
     * API endpoint that allows Spacecrafts to be viewed.
 * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
     * @param name 
     * @param status 
     * @param spacecraftConfig 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async spacecraftList(
name?: string,
status?: string,
spacecraftConfig?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Spacecraft>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/`,
            query: {
                'name': name,
                'status': status,
                'spacecraft_config': spacecraftConfig,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
     * @param spacecraft 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async spacecraftFlightList(
spacecraft?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<SpacecraftFlight>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/flight/`,
            query: {
                'spacecraft': spacecraft,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
     * @param id A unique integer value identifying this Spacecraft Flight.
     * @returns SpacecraftFlightDetailed 
     * @throws ApiError
     */
    public static async spacecraftFlightRead(
id: number,
): Promise<SpacecraftFlightDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/flight/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows Spacecrafts to be viewed.
 * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
     * @param id A unique integer value identifying this Spacecraft.
     * @returns SpacecraftDetailed 
     * @throws ApiError
     */
    public static async spacecraftRead(
id: number,
): Promise<SpacecraftDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/${id}/`,
        });
        return result.body;
    }

}