/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AstronautDetailedSerializerNoFlights } from './AstronautDetailedSerializerNoFlights';
import type { AstronautRole } from './AstronautRole';

export type AstronautFlight = {
    readonly id?: number;
    role?: AstronautRole;
    astronaut?: AstronautDetailedSerializerNoFlights;
}