/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpacecraftConfig } from './SpacecraftConfig';
import type { SpacecraftStatus } from './SpacecraftStatus';

export type Spacecraft = {
    readonly id?: number;
    readonly url?: string;
    name: string;
    serial_number?: string | null;
    status?: SpacecraftStatus;
    description: string;
    spacecraft_config?: SpacecraftConfig;
}