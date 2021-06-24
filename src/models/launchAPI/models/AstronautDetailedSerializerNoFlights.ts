/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { AstronautStatus } from './AstronautStatus';
import type { AstronautType } from './AstronautType';

export type AstronautDetailedSerializerNoFlights = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    type?: AstronautType;
    status?: AstronautStatus;
    agency?: AgencySerializerMini;
    date_of_birth: string;
    date_of_death?: string | null;
    nationality: string;
    twitter?: string | null;
    instagram?: string | null;
    bio: string;
    readonly profile_image?: string | null;
    wiki?: string | null;
    readonly last_flight?: string;
    readonly first_flight?: string;
}