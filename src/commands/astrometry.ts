import {Command, CommandContext, Permission} from "./command";
import {downloadImage, FileSubmitter, Job, Login} from "../models/astrometryAPI";

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
                //Process of astrometry api
                const msg = await ctx.msg.channel.send("Starting process")

                //Get session number for submission request
                const session = await Login.login()
                msg.edit("Upload Image")

                //Download file and generate file snowflake to send at the api
                const img = await downloadImage(attachement.proxyURL)

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
                    if (jobs.processing_started !== 'None' && procesStarted === false) {
                        procesStarted = true
                        await msg.edit("Jobs start")
                    }

                    //Cancel while if the main job is active but not calibrate job append after 5 attempt
                    if (jobs.jobs.length >= 1 && jobs.jobs[0] != null) {
                        console.log(count)
                        count++
                        if (count > 5) {
                            return msg.edit("> :warning: your image can't be calibrate")
                        }
                    }

                    //Add somme point after message content after each iteration to informe user that everything processing
                    msg.edit(msg.content + ".")
                } while (jobs.jobs.length < 1 || jobs.jobs[0] === null || jobs.job_calibrations.length < 1)
                msg.edit("Jobs end")
                const result = await Job.getJobResult(<number>jobs.jobs[0])
                console.log(result)
                console.log(Job.getAnnotatedURL(<number>jobs.jobs[0]))
                console.log(Job.getRedGreenURL(<number>jobs.jobs[0]))
                console.log(Job.getSkyPlotURL(<number>jobs.job_calibrations[0][1], 0))
                return msg.edit(Job.getAnnotatedURL(<number>jobs.jobs[0]) + "\n" + Job.getRedGreenURL(<number>jobs.jobs[0]) + "\n" + Job.getSkyPlotURL(<number>jobs.job_calibrations[0][1], 0) + "\n" + Job.getSkyPlotURL(<number>jobs.job_calibrations[0][1], 3) + "\n" + Job.getSkyPlotURL(<number>jobs.job_calibrations[0][1], 1) + "\n" + Job.getSkyPlotURL(<number>jobs.job_calibrations[0][1], 2))
            }
        } else {
            return ctx.channel.send(`> :warning: you need to attach an image or to precise link to analyse your image`)
        }

        return ctx.channel.send('> :warning: unknown error')
    }
}