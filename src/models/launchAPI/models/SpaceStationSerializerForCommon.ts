/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpaceStationStatus } from './SpaceStationStatus';

export type SpaceStationSerializerForCommon = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: SpaceStationStatus;
    founded: string;
    description: string;
    readonly orbit?: string;
    readonly image_url?: string | null;
}