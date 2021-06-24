/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agency } from './Agency';
import type { Program } from './Program';

export type LauncherConfig = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    manufacturer?: Agency;
    readonly program?: Array<Program>;
    family?: string;
    full_name?: string;
    variant?: string;
    reusable?: boolean;
    readonly image_url?: string | null;
    info_url?: string | null;
    wiki_url?: string | null;
}