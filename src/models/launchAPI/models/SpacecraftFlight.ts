/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LaunchSerializerCommon } from './LaunchSerializerCommon';
import type { Spacecraft } from './Spacecraft';

export type SpacecraftFlight = {
    readonly id?: number;
    readonly url?: string;
    destination?: string | null;
    mission_end?: string | null;
    spacecraft?: Spacecraft;
    launch?: LaunchSerializerCommon;
}