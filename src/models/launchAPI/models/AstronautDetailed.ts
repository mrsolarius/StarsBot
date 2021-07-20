/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { AstronautStatus } from './AstronautStatus';
import type { AstronautType } from './AstronautType';
import type { LaunchSerializerCommon } from './LaunchSerializerCommon';
import type { SpacecraftFlight } from './SpacecraftFlight';

export type AstronautDetailed = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: AstronautStatus;
    type?: AstronautType;
    agency?: AgencySerializerMini;
    date_of_birth: string;
    date_of_death?: string | null;
    nationality: string;
    twitter?: string | null;
    instagram?: string | null;
    bio: string;
    readonly profile_image?: string | null;
    readonly profile_image_thumbnail?: string;
    wiki?: string | null;
    readonly flights?: Array<LaunchSerializerCommon>;
    readonly landings?: Array<SpacecraftFlight>;
    readonly last_flight?: string;
    readonly first_flight?: string;
}