/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DockingEventDetailedSerializerForSpacestation } from './DockingEventDetailedSerializerForSpacestation';

export type DockingLocationSerializerForSpacestation = {
    readonly id?: number;
    name: string;
    docked?: DockingEventDetailedSerializerForSpacestation;
}