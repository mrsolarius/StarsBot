/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpacecraftConfigurationDetail } from './SpacecraftConfigurationDetail';
import type { SpacecraftStatus } from './SpacecraftStatus';

export type SpacecraftDetailedNoFlights = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    serial_number?: string | null;
    status?: SpacecraftStatus;
    description: string;
    spacecraft_config?: SpacecraftConfigurationDetail;
}