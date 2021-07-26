export type SubmissionStatus = {
    user:number;
    processing_started:string;
    processing_finished:string;
    user_images:Array<Number>;
    images:Array<Number>;
    jobs:Array<Number>;
    job_calibrations:Array<Array<number>>;
}