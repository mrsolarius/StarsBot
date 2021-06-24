/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DockingLocation } from './DockingLocation';
import type { SpaceStationSerializerForCommon } from './SpaceStationSerializerForCommon';

export type DockingEventSerializerForSpacecraftFlight = {
    spacestation?: SpaceStationSerializerForCommon;
    docking: string;
    departure?: string | null;
    docking_location?: DockingLocation;
}