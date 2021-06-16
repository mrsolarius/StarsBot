import {Location} from "./location";

export interface Pad{
    id:number,
    url:string,
    agency_id:number,
    name:string,
    info_url:string,
    wiki_url:string,
    map_url:string,
    latitude:string,
    longitude:string,
    location:Location,
    map_image:string,
    total_launch_count:number,
}