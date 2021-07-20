/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LandingLocation } from './LandingLocation';
import type { LandingType } from './LandingType';

export type Landing = {
    readonly id?: number;
    attempt?: boolean | null;
    success?: boolean | null;
    description?: string;
    location?: LandingLocation;
    type?: LandingType;
}