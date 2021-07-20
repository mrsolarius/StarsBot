/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpacecraftDetailedNoFlights } from './SpacecraftDetailedNoFlights';

export type SpacecraftFlightSerializerForDockingEventDetailed = {
    readonly id?: number;
    readonly url?: string;
    destination?: string | null;
    mission_end?: string | null;
    spacecraft?: SpacecraftDetailedNoFlights;
}