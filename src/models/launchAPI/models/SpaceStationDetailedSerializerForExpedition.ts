/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencyList } from './AgencyList';
import type { SpaceStationStatus } from './SpaceStationStatus';

export type SpaceStationDetailedSerializerForExpedition = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: SpaceStationStatus;
    founded: string;
    description: string;
    readonly orbit?: string;
    readonly image_url?: string | null;
    readonly owners?: Array<AgencyList>;
}