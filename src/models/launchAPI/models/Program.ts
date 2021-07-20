/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { MissionPatch } from './MissionPatch';

export type Program = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    description?: string | null;
    readonly agencies?: Array<AgencySerializerMini>;
    readonly image_url?: string;
    start_date?: string | null;
    end_date?: string | null;
    info_url?: string | null;
    wiki_url?: string | null;
    readonly mission_patches?: Array<MissionPatch>;
}