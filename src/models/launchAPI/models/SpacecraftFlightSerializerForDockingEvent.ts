/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Spacecraft } from './Spacecraft';

export type SpacecraftFlightSerializerForDockingEvent = {
    readonly id?: number;
    readonly url?: string;
    destination?: string | null;
    mission_end?: string | null;
    spacecraft?: Spacecraft;
}