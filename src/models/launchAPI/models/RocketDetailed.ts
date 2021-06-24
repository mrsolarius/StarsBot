/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FirstStage } from './FirstStage';
import type { LauncherConfigDetail } from './LauncherConfigDetail';
import type { SpacecraftFlightDetailedSerializerForLaunch } from './SpacecraftFlightDetailedSerializerForLaunch';

export type RocketDetailed = {
    readonly id?: number;
    configuration?: LauncherConfigDetail;
    readonly launcher_stage?: Array<FirstStage>;
    spacecraft_stage?: SpacecraftFlightDetailedSerializerForLaunch;
}