/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Agency = {
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
    readonly parent?: string;
    readonly image_url?: string | null;
}