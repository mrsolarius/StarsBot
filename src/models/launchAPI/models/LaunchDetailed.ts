/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerDetailedCommon } from './AgencySerializerDetailedCommon';
import type { InfoURL } from './InfoURL';
import type { LaunchStatus } from './LaunchStatus';
import type { Mission } from './Mission';
import type { MissionPatch } from './MissionPatch';
import type { Pad } from './Pad';
import type { Program } from './Program';
import type { RocketDetailed } from './RocketDetailed';
import type { Update } from './Update';
import type { VidURL } from './VidURL';

export type LaunchDetailed = {
    readonly id?: string;
    readonly url?: string;
    slug: string;
    readonly flightclub_url?: string;
    readonly r_spacex_api_id?: string;
    readonly name?: string;
    status?: LaunchStatus;
    readonly last_updated?: string;
    readonly updates?: Array<Update>;
    readonly net?: string;
    readonly window_end?: string;
    readonly window_start?: string;
    readonly probability?: number;
    readonly holdreason?: string;
    readonly failreason?: string;
    readonly hashtag?: string;
    launch_service_provider?: AgencySerializerDetailedCommon;
    rocket?: RocketDetailed;
    mission?: Mission;
    pad?: Pad;
    readonly infoURLs?: Array<InfoURL>;
    readonly vidURLs?: Array<VidURL>;
    readonly webcast_live?: boolean;
    readonly image?: string;
    readonly infographic?: string;
    readonly program?: Array<Program>;
    readonly orbital_launch_attempt_count?: number;
    readonly location_launch_attempt_count?: number;
    readonly pad_launch_attempt_count?: number;
    readonly agency_launch_attempt_count?: number;
    readonly orbital_launch_attempt_count_year?: number;
    readonly location_launch_attempt_count_year?: number;
    readonly pad_launch_attempt_count_year?: number;
    readonly agency_launch_attempt_count_year?: number;
    readonly mission_patches?: Array<MissionPatch>;
    notifications_enabled?: boolean;
}