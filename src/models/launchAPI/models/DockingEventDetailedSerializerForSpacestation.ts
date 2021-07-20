/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpacecraftFlightForDockingEvent } from './SpacecraftFlightForDockingEvent';

export type DockingEventDetailedSerializerForSpacestation = {
    readonly id?: number;
    readonly url?: string;
    docking: string;
    departure?: string | null;
    flight_vehicle?: SpacecraftFlightForDockingEvent;
}