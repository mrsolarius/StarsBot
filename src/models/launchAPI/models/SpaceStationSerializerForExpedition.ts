/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpaceStationStatus } from './SpaceStationStatus';

export type SpaceStationSerializerForExpedition = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: SpaceStationStatus;
    readonly orbit?: string;
    readonly image_url?: string | null;
}