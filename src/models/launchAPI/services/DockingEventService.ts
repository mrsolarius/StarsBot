/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DockingEvent } from '../models/DockingEvent';
import type { DockingEventDetailed } from '../models/DockingEventDetailed';
import { request as __request } from '../core/request';

export class DockingEventService {

    /**
     * API endpoint that allows Docking Events to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async dockingEventList({
spaceStationId,
dockingLocationId,
flightVehicleId,
dockingGt,
dockingLt,
dockingGte,
dockingLte,
search,
ordering,
limit,
offset,
}: {
spaceStationId?: number,
dockingLocationId?: number,
flightVehicleId?: number,
dockingGt?: string,
dockingLt?: string,
dockingGte?: string,
dockingLte?: string,
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
results: Array<DockingEvent>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/docking_event/`,
            query: {
                'space_station__id': spaceStationId,
                'docking_location__id': dockingLocationId,
                'flight_vehicle__id': flightVehicleId,
                'docking__gt': dockingGt,
                'docking__lt': dockingLt,
                'docking__gte': dockingGte,
                'docking__lte': dockingLte,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Docking Events to be viewed.
     * @returns DockingEventDetailed 
     * @throws ApiError
     */
    public static async dockingEventRead({
id,
}: {
/** A unique integer value identifying this docking event. **/
id: number,
}): Promise<DockingEventDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/docking_event/${id}/`,
        });
        return result.body;
    }

}