import {LaunchSerializerCommon} from "../../../../models/launchAPI";

export type SearchData = {
    search?:string;
    launchesFound?: Array<LaunchSerializerCommon>;
    upcoming?:boolean;
    searchNumber: number;
}