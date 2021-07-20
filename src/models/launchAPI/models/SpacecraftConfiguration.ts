/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agency } from './Agency';

export type SpacecraftConfiguration = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    agency?: Agency;
    in_use?: boolean;
    capability?: string;
    maiden_flight?: string | null;
    human_rated?: boolean;
    crew_capacity?: number | null;
    readonly image_url?: string | null;
    readonly nation_url?: string | null;
    wiki_link?: string;
    info_link?: string;
}