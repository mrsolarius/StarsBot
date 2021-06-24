/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LauncherDetailed = {
    readonly id?: number;
    readonly url?: string;
    details?: string;
    flight_proven?: boolean;
    serial_number?: string | null;
    status?: string;
    readonly image_url?: string | null;
    readonly successful_landings?: string;
    readonly attempted_landings?: string;
    readonly flights?: string;
    readonly last_launch_date?: string;
    readonly first_launch_date?: string;
}