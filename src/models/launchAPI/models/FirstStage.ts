/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Landing } from './Landing';
import type { LauncherDetailed } from './LauncherDetailed';
import type { LaunchSerializerMini } from './LaunchSerializerMini';

export type FirstStage = {
    readonly id?: number;
    readonly type?: string;
    reused?: boolean | null;
    readonly launcher_flight_number?: string;
    launcher?: LauncherDetailed;
    landing?: Landing;
    readonly previous_flight_date?: string;
    readonly turn_around_time_days?: string;
    previous_flight?: LaunchSerializerMini;
}