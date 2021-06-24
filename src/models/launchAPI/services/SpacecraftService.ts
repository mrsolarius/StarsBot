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
     * @returns any 
     * @throws ApiError
     */
    public static async spacecraftList({
name,
status,
spacecraftConfig,
search,
ordering,
limit,
offset,
}: {
name?: string,
status?: string,
spacecraftConfig?: string,
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
     * @returns any 
     * @throws ApiError
     */
    public static async spacecraftFlightList({
spacecraft,
limit,
offset,
}: {
spacecraft?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
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
     * @returns SpacecraftFlightDetailed 
     * @throws ApiError
     */
    public static async spacecraftFlightRead({
id,
}: {
/** A unique integer value identifying this Spacecraft Flight. **/
id: number,
}): Promise<SpacecraftFlightDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/flight/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows Spacecrafts to be viewed.
 * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
     * @returns SpacecraftDetailed 
     * @throws ApiError
     */
    public static async spacecraftRead({
id,
}: {
/** A unique integer value identifying this Spacecraft. **/
id: number,
}): Promise<SpacecraftDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/spacecraft/${id}/`,
        });
        return result.body;
    }

}