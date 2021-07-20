/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LaunchSerializerCommon } from './LaunchSerializerCommon';
import type { SpacecraftDetailedNoFlights } from './SpacecraftDetailedNoFlights';

export type SpacecraftFlightForDockingEvent = {
    id: number;
    readonly url?: string;
    spacecraft?: SpacecraftDetailedNoFlights;
    launch?: LaunchSerializerCommon;
}