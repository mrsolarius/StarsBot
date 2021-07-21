import {Command, CommandContext, Permission} from "./command";
import {
    Calibration,
    downloadImage,
    FileSubmitter,
    Job,
    JobResult,
    Login,
    SubmissionStatus
} from "../models/astrometryAPI";
import {Message, MessageEmbed} from "discord.js";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class implements Command {
    name = 'astrometry';
    summary = 'To analyse your deep sky observation';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        const args = ctx.msg.content.split(' ')

        if (args[1] === "help") {
            return ctx.channel.send('@todo help message')
        }


        const num = ctx.msg.attachments.firstKey()
        const attachement = ctx.msg.attachments.get(<string>num);
        if (typeof attachement !== "undefined") {
            if (attachement.height !== null && attachement.width !== null) {
                //Launch Jobs Process
                try {
                    const {jobs,msg} = await this.astrometryProcess(ctx,attachement.proxyURL)
                    const result = await Job.getJobResult(<number>jobs.jobs[0])
                    const calibration = await Job.getCalibration(<number>jobs.jobs[0])
                    return msg.edit(this.astrometryEmbed(result,jobs,calibration))
                }catch (e){
                    return null
                }
            }
        } else {
            return ctx.channel.send(`> :warning: you need to attach an image or to precise link to analyse your image`)
        }

        return ctx.channel.send('> :warning: unknown error')
    }

    async astrometryProcess(ctx:CommandContext, url : string):Promise<{jobs:SubmissionStatus,msg:Message}>{
        //Process of astrometry api
        const msg = await ctx.msg.channel.send("Starting process")

        //Get session number for submission request
        const session = await Login.login()

        //Download file and generate file snowflake to send at the api
        msg.edit("Upload Image")
        try {
            var img = await downloadImage(url)
        }catch (e){
            msg.edit("> :warning: your link is not an image")
            return Promise.reject(new Error('not an image'))
        }

        //Send request to api with some prefab parameters
        const subscription = await FileSubmitter.submitFile({
            publicly_visible: "y",
            allow_modifications: "d",
            session: session.session,
            allow_commercial_use: "d"
        }, img)
        msg.edit("Enqueue the jobs")

        //While no jobs number or error continue to ask for job numbers
        let procesStarted = false //Flag to know when api said the jobs starts
        let count = 0 //Counter to cancel task after around of asking when the job is finish

        do {
            //Wait 5 seconds to not dos the api server
            await delay(1000 * 5)

            //Ask for the jobs
            var jobs = await FileSubmitter.getSubmissionStatus(subscription.subid)

            //Informe user when the job start
            if (jobs.processing_started !== 'None' && !procesStarted) {
                procesStarted = true
                await msg.edit("Jobs start")
            }

            //Cancel while if the main job is active but not calibrate job append after 5 attempt
            if (jobs.jobs.length >= 1 && jobs.jobs[0] != null) {
                count++
                if (count > 5) {
                    msg.edit("> :warning: your image can't be calibrate")
                    return Promise.reject(new Error('can not calibrate image'))
                }
            }

            //Add somme point after message content after each iteration to informe user that everything processing
            msg.edit(msg.content + ".")
        } while (jobs.jobs.length < 1 || jobs.jobs[0] === null || jobs.job_calibrations.length < 1)
        msg.edit("Jobs end")

        return {jobs,msg}
    }

    astrometryEmbed(data :JobResult, submissionStatus:SubmissionStatus, calibration: Calibration){
        let embed : MessageEmbed = new MessageEmbed();
        embed.setTitle("Analyse of your AstroPhoto")
            .setThumbnail(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 0))
            .addField("Position",
                `
                Center (RA, DEC) : (${data.calibration.ra.toPrecision(3)}, ${data.calibration.dec.toPrecision(3)})
                Size : ${(calibration.height_arcsec/60).toPrecision(3)} x ${(calibration.height_arcsec/60).toPrecision(3)} ArcMin
                Pixel Scale : ${data.calibration.pixscale.toPrecision(3)} ArcSec/pixel
                Orientation : ${data.calibration.orientation.toPrecision(3)} degrees E of N
                `,true)
        let objectStr = '';
        for (const object of data.objects_in_field) {
            objectStr+=object+'\n'
        }
        embed.addField("Detected object",objectStr,true)
        embed.setImage(Job.getAnnotatedURL(<number>submissionStatus.jobs[0]))
        return embed
    }
}