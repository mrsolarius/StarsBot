/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agency } from './Agency';
import type { SpacecraftConfigType } from './SpacecraftConfigType';

export type SpacecraftConfigurationDetail = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    type?: SpacecraftConfigType;
    agency?: Agency;
    in_use?: boolean;
    capability?: string;
    history?: string;
    details?: string;
    maiden_flight?: string | null;
    height?: number | null;
    diameter?: number | null;
    human_rated?: boolean;
    crew_capacity?: number | null;
    payload_capacity?: number | null;
    flight_life?: string | null;
    readonly image_url?: string | null;
    readonly nation_url?: string | null;
    wiki_link?: string;
    info_link?: string;
}