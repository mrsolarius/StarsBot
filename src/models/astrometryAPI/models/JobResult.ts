import {Calibration} from "./Calibration";

export type JobResult={
    objects_in_field:Array<string>;
    machine_tags:Array<String>;
    tags:Array<String>;
    status:String;
    original_filename:String;
    calibration:Calibration;
}