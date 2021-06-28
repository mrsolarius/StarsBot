import {LaunchSerializerCommon} from "../../../../models/launchAPI";

export type SearchData = {
    launchesFound?: Array<LaunchSerializerCommon>;
    upcoming?:boolean;
    searchNumber: number;
}