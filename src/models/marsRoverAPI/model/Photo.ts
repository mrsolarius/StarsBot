import {Camera} from "./Camera";
import {Rover} from "./Rover";

export type Photo = {
    id:bigint;
    sol:bigint;
    camera:Camera;
    img_src:string;
    earth_date:Date;
    rover:Rover
}