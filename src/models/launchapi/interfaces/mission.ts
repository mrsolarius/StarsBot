import {Orbit} from "./orbit";

export interface Mission{
    id:number,
    name:string,
    description:string,
    launch_designator:string,
    type:string,
    orbit:Orbit
}