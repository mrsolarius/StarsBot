/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronautFlightForExpedition } from './AstronautFlightForExpedition';

export type ExpeditionDetailedSerializerForSpacestation = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    start: string;
    end?: string | null;
    readonly crew?: Array<AstronautFlightForExpedition>;
}