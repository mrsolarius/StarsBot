/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { SpacecraftConfigType } from './SpacecraftConfigType';

export type SpacecraftConfig = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    type?: SpacecraftConfigType;
    agency?: AgencySerializerMini;
    in_use?: boolean;
    readonly image_url?: string | null;
}