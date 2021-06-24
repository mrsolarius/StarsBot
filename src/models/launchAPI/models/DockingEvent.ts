/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DockingLocation } from './DockingLocation';
import type { SpacecraftFlightSerializerForDockingEvent } from './SpacecraftFlightSerializerForDockingEvent';

export type DockingEvent = {
    readonly id?: number;
    readonly url?: string;
    launch_id: string;
    docking: string;
    departure?: string | null;
    flight_vehicle?: SpacecraftFlightSerializerForDockingEvent;
    docking_location?: DockingLocation;
}