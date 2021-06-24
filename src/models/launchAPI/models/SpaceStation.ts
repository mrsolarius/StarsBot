/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencyList } from './AgencyList';
import type { ExpeditionSerializerForSpacestation } from './ExpeditionSerializerForSpacestation';
import type { SpaceStationStatus } from './SpaceStationStatus';
import type { SpaceStationType } from './SpaceStationType';

export type SpaceStation = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: SpaceStationStatus;
    type?: SpaceStationType;
    founded: string;
    deorbited?: string | null;
    description: string;
    readonly orbit?: string;
    readonly owners?: Array<AgencyList>;
    readonly active_expedition?: Array<ExpeditionSerializerForSpacestation>;
    readonly image_url?: string | null;
}