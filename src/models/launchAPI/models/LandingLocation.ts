/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';

export type LandingLocation = {
    readonly id?: number;
    name?: string;
    abbrev?: string;
    description?: string | null;
    location: Location;
    readonly successful_landings?: string;
}