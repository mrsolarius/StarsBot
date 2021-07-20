/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronautFlightForExpedition } from './AstronautFlightForExpedition';
import type { SpaceStationDetailedSerializerForExpedition } from './SpaceStationDetailedSerializerForExpedition';

export type ExpeditionDetail = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    start: string;
    end?: string | null;
    spacestation?: SpaceStationDetailedSerializerForExpedition;
    readonly crew?: Array<AstronautFlightForExpedition>;
}