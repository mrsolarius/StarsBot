/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LauncherConfigList } from './LauncherConfigList';

export type Launcher = {
    readonly id?: number;
    readonly url?: string;
    flight_proven?: boolean;
    serial_number?: string | null;
    status?: string;
    details?: string;
    launcher_config?: LauncherConfigList;
    readonly image_url?: string | null;
    readonly flights?: string;
    readonly last_launch_date?: string;
    readonly first_launch_date?: string;
}