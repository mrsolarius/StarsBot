/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronautFlight } from './AstronautFlight';
import type { DockingEventSerializerForSpacecraftFlight } from './DockingEventSerializerForSpacecraftFlight';
import type { LaunchSerializerCommon } from './LaunchSerializerCommon';
import type { SpacecraftDetailedNoFlights } from './SpacecraftDetailedNoFlights';

export type SpacecraftFlightDetailed = {
    id: number;
    readonly url?: string;
    mission_end?: string | null;
    destination?: string | null;
    readonly launch_crew?: Array<AstronautFlight>;
    readonly onboard_crew?: Array<AstronautFlight>;
    readonly landing_crew?: Array<AstronautFlight>;
    spacecraft?: SpacecraftDetailedNoFlights;
    launch?: LaunchSerializerCommon;
    readonly docking_events?: Array<DockingEventSerializerForSpacecraftFlight>;
}