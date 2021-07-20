/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventType } from './EventType';
import type { Expedition } from './Expedition';
import type { LaunchSerializerCommon } from './LaunchSerializerCommon';
import type { Program } from './Program';
import type { SpaceStationSerializerForCommon } from './SpaceStationSerializerForCommon';
import type { Update } from './Update';

export type Events = {
    readonly id?: number;
    readonly url?: string;
    slug: string;
    name: string;
    readonly updates?: Array<Update>;
    type?: EventType;
    description?: string;
    location?: string | null;
    news_url?: string | null;
    video_url?: string | null;
    readonly feature_image?: string;
    date?: string | null;
    launches: Array<LaunchSerializerCommon>;
    expeditions: Array<Expedition>;
    spacestations: Array<SpaceStationSerializerForCommon>;
    readonly program?: Array<Program>;
}