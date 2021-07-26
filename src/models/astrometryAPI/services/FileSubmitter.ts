import {request} from "../core/request";
import {SubmittingSettings} from "../models/SubmittingSettings";
import {FileSnowFlake} from "../core/ApiRequestOptions";
import {SubmitFile} from "../models/SubmitFile";
import {SubmissionStatus} from "../models/SubmissionStatus";

export class FileSubmitter {

    public static async submitFile(settings:SubmittingSettings, fileSnowFlake:FileSnowFlake): Promise<SubmitFile> {
        const res = await request({
            method: "POST",
            path:'/upload',
            query:settings,
            file:fileSnowFlake
        })
        return await res.json()
    }

    public static async getSubmissionStatus(subID:number):Promise<SubmissionStatus>{
        const res = await request({
            method:"GET",
            path:"/submissions/"+subID
        })
        return await res.json();
    }
}