/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DockingLocation } from './DockingLocation';
import type { SpacecraftFlightSerializerForDockingEventDetailed } from './SpacecraftFlightSerializerForDockingEventDetailed';
import type { SpaceStationSerializerForDockingEvent } from './SpaceStationSerializerForDockingEvent';

export type DockingEventDetailed = {
    readonly id?: number;
    readonly url?: string;
    launch_id: string;
    docking: string;
    departure?: string | null;
    flight_vehicle?: SpacecraftFlightSerializerForDockingEventDetailed;
    docking_location?: DockingLocation;
    space_station?: SpaceStationSerializerForDockingEvent;
}