/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronautFlight } from './AstronautFlight';
import type { DockingEventSerializerForSpacecraftFlight } from './DockingEventSerializerForSpacecraftFlight';
import type { SpacecraftDetailedNoFlights } from './SpacecraftDetailedNoFlights';

export type SpacecraftFlightDetailedSerializerForLaunch = {
    id: number;
    readonly url?: string;
    mission_end?: string | null;
    destination?: string | null;
    readonly launch_crew?: Array<AstronautFlight>;
    readonly onboard_crew?: Array<AstronautFlight>;
    readonly landing_crew?: Array<AstronautFlight>;
    spacecraft?: SpacecraftDetailedNoFlights;
    readonly docking_events?: Array<DockingEventSerializerForSpacecraftFlight>;
}