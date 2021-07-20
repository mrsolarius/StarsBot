/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LauncherConfigDetailSerializerForAgency = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    description?: string;
    family?: string;
    full_name?: string;
    variant?: string;
    alias?: string;
    min_stage?: number | null;
    max_stage?: number | null;
    length?: number | null;
    diameter?: number | null;
    maiden_flight?: string | null;
    launch_mass?: number | null;
    leo_capacity?: number | null;
    gto_capacity?: number | null;
    to_thrust?: number | null;
    apogee?: number | null;
    vehicle_range?: number | null;
    readonly image_url?: string | null;
    info_url?: string | null;
    wiki_url?: string | null;
    readonly consecutive_successful_launches?: number;
    readonly successful_launches?: number;
    readonly failed_launches?: number;
    readonly pending_launches?: number;
}