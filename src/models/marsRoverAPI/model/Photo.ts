import {Cameras} from "./Cameras";
import {Rover} from "./Rover";

export type Photo = {
    id:bigint;
    sol:bigint;
    camera:Cameras;
    img_src:string;
    earth_date:Date;
    rover:Rover
}