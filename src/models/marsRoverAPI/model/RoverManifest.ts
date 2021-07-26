import {Cameras} from "./Cameras";

export type RoverManifest = {
    id:bigint;
    name:string;
    landing_date:Date;
    launch_date:Date;
    status:"active"|"complete";
    max_sol:bigint;
    max_date:Date;
    total_photos:bigint;
    cameras:Cameras;
}