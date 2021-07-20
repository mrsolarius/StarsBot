/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Orbit } from './Orbit';

export type Mission = {
    readonly id?: number;
    name?: string;
    description?: string;
    launch_designator?: string | null;
    readonly type?: string;
    orbit: Orbit;
}