/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LauncherConfigList } from './LauncherConfigList';

export type RocketSerializerCommon = {
    readonly id?: number;
    configuration?: LauncherConfigList;
}