/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LauncherConfigDetail } from './LauncherConfigDetail';

export type LauncherDetail = {
    readonly id?: number;
    readonly url?: string;
    flight_proven?: boolean;
    serial_number?: string | null;
    status?: string;
    details?: string;
    launcher_config?: LauncherConfigDetail;
    readonly image_url?: string | null;
    readonly successful_landings?: string;
    readonly attempted_landings?: string;
    readonly flights?: string;
    readonly last_launch_date?: string;
    readonly first_launch_date?: string;
}