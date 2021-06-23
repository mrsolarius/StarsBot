import {LaunchStatus} from "./launchStatus";
import {Agency} from "./agency";
import {Mission} from "./mission";
import {Pad} from "./pad";

export interface Launch{
    id:number,
    url:string,
    slug:string,
    name:string,
    status:LaunchStatus,
    last_updated:string,
    net:string,
    windows_end:string,
    windows_start:string,
    probability:number,
    hold_reason:string,
    fail_reason:string,
    hashtag:string,
    agency:Agency,
    rocket:null,
    mission:Mission,
    pad:Pad,
    infoURLs:string,
    vidURLs:string,
    webcast_live:boolean,
    image:string,
    infographic:string
}