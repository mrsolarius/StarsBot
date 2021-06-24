/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Astronaut } from './Astronaut';
import type { AstronautRole } from './AstronautRole';

export type AstronautFlightForExpedition = {
    readonly id?: number;
    role?: AstronautRole;
    astronaut?: Astronaut;
}