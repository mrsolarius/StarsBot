/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';

export type Pad = {
    readonly id?: number;
    readonly url?: string;
    agency_id?: number | null;
    name?: string;
    info_url?: string | null;
    wiki_url?: string | null;
    map_url?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    location: Location;
    readonly map_image?: string | null;
    readonly total_launch_count?: number;
}