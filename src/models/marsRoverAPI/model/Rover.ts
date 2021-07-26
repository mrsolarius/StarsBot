export type Rover ={
    id:bigint;
    name:string;
    landing_date:Date;
    launch_date:Date;
    status:"active"|"complete";
}