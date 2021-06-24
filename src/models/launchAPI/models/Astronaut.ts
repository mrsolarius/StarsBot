/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { AstronautStatus } from './AstronautStatus';

export type Astronaut = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    status?: AstronautStatus;
    agency?: AgencySerializerMini;
    readonly profile_image?: string | null;
    readonly profile_image_thumbnail?: string;
}