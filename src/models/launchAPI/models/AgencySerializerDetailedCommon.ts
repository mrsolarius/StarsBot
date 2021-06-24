/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AgencySerializerDetailedCommon = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    featured?: boolean;
    type?: string | null;
    country_code?: string;
    abbrev?: string;
    description?: string | null;
    administrator?: string | null;
    founding_year?: string | null;
    launchers?: string;
    spacecraft?: string;
    readonly launch_library_url?: string;
    readonly total_launch_count?: number;
    readonly consecutive_successful_launches?: number;
    readonly successful_launches?: number;
    readonly failed_launches?: number;
    readonly pending_launches?: number;
    readonly consecutive_successful_landings?: number;
    readonly successful_landings?: number;
    readonly failed_landings?: number;
    readonly attempted_landings?: number;
    info_url?: string | null;
    wiki_url?: string | null;
    readonly logo_url?: string | null;
    readonly image_url?: string | null;
    readonly nation_url?: string | null;
}