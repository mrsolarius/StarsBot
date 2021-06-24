/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpaceStationSerializerForExpedition } from './SpaceStationSerializerForExpedition';

export type Expedition = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    start: string;
    end?: string | null;
    spacestation?: SpaceStationSerializerForExpedition;
}