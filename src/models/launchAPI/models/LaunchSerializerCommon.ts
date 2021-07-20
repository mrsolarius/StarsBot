/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgencySerializerMini } from './AgencySerializerMini';
import type { LaunchStatus } from './LaunchStatus';
import type { Mission } from './Mission';
import type { Pad } from './Pad';
import type { Program } from './Program';
import type { RocketSerializerCommon } from './RocketSerializerCommon';

export type LaunchSerializerCommon = {
    readonly id?: string;
    readonly url?: string;
    slug: string;
    name?: string;
    status?: LaunchStatus;
    readonly last_updated?: string;
    net?: string | null;
    window_end?: string | null;
    window_start?: string | null;
    probability?: number | null;
    holdreason?: string | null;
    failreason?: string | null;
    hashtag?: string | null;
    launch_service_provider?: AgencySerializerMini;
    rocket?: RocketSerializerCommon;
    mission?: Mission;
    pad?: Pad;
    readonly infoURLs?: string;
    readonly vidURLs?: string;
    webcast_live?: boolean;
    readonly image?: string;
    readonly infographic?: string;
    readonly program?: Array<Program>;
}