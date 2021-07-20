/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PadSerializerNoLocation } from './PadSerializerNoLocation';

export type LocationDetail = {
    readonly id?: number;
    name?: string;
    country_code?: string;
    readonly map_image?: string | null;
    readonly total_launch_count?: string;
    readonly total_landing_count?: string;
    pads: Array<PadSerializerNoLocation>;
}