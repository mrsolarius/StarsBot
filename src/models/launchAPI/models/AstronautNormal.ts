/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agency } from './Agency';
import type { AstronautStatus } from './AstronautStatus';
import type { AstronautType } from './AstronautType';

export type AstronautNormal = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: AstronautStatus;
    type?: AstronautType;
    date_of_birth: string;
    date_of_death?: string | null;
    nationality: string;
    bio: string;
    twitter?: string | null;
    instagram?: string | null;
    wiki?: string | null;
    agency?: Agency;
    readonly profile_image?: string | null;
    readonly profile_image_thumbnail?: string;
    readonly last_flight?: string;
    readonly first_flight?: string;
}