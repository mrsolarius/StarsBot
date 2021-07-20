/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';

export type MissionPatch = {
    readonly id?: number;
    name: string;
    priority?: number;
    readonly image_url?: string;
    agency?: AgencySerializerMini;
}