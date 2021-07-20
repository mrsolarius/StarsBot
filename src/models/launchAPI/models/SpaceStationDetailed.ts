/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agency } from './Agency';
import type { DockingLocationSerializerForSpacestation } from './DockingLocationSerializerForSpacestation';
import type { ExpeditionDetailedSerializerForSpacestation } from './ExpeditionDetailedSerializerForSpacestation';
import type { SpaceStationStatus } from './SpaceStationStatus';
import type { SpaceStationType } from './SpaceStationType';

export type SpaceStationDetailed = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: SpaceStationStatus;
    type?: SpaceStationType;
    founded: string;
    deorbited?: string | null;
    height?: number | null;
    width?: number | null;
    mass?: number | null;
    volume?: number | null;
    description: string;
    readonly orbit?: string;
    readonly onboard_crew?: string;
    readonly owners?: Array<Agency>;
    readonly active_expeditions?: Array<ExpeditionDetailedSerializerForSpacestation>;
    readonly docking_location?: Array<DockingLocationSerializerForSpacestation>;
    readonly image_url?: string | null;
}