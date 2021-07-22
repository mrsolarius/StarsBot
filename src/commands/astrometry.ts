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
import {DiscordEmbedMenu, DiscordEmbedMenuPage} from "discord.js-embed-menu";

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
                    const {jobs, msg} = await this.astrometryProcess(ctx, attachement.proxyURL)
                    const result = await Job.getJobResult(<number>jobs.jobs[0])
                    const calibration = await Job.getCalibration(<number>jobs.jobs[0])
                    msg.delete()
                    const menu = new DiscordEmbedMenu(ctx.channel,ctx.msg.author,this.astrometryEmbed(result, jobs, calibration),600000,true,true,false)
                    return menu.start();
                } catch (e) {
                    return null
                }
            }
        } else {
            return ctx.channel.send(`> :warning: you need to attach an image or to precise link to analyse your image`)
        }

        return ctx.channel.send('> :warning: unknown error')
    }

    async astrometryProcess(ctx: CommandContext, url: string): Promise<{ jobs: SubmissionStatus, msg: Message }> {
        //Process of astrometry api
        const msg = await ctx.msg.channel.send("Starting process")

        //Get session number for submission request
        const session = await Login.login()

        //Download file and generate file snowflake to send at the api
        msg.edit("Upload Image")
        try {
            var img = await downloadImage(url)
        } catch (e) {
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

        return {jobs, msg}
    }

    astrometryEmbed(data: JobResult, submissionStatus: SubmissionStatus, calibration: Calibration) {
        const mainMenu = new MessageEmbed()
        mainMenu.setTitle("Menu of your result")
        mainMenu.setDescription("this menu work with emoji that you need to clik into")
        mainMenu.addField("📊", "See your result")
        mainMenu.addField("🔭", "See the SDSS of your sky location")
        mainMenu.addField("🗺️", "See sky maps")

        const mainAnalyse: MessageEmbed = new MessageEmbed();
        mainAnalyse.setTitle("Analyse of your AstroPhoto")
            .setThumbnail(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 0))
            .addField("Position",
                `
                Center (RA, DEC) : (${data.calibration.ra.toPrecision(3)}, ${data.calibration.dec.toPrecision(3)})
                Size : ${(calibration.height_arcsec / 60).toPrecision(3)} x ${(calibration.height_arcsec / 60).toPrecision(3)} ArcMin
                Pixel Scale : ${data.calibration.pixscale.toPrecision(3)} ArcSec/pixel
                Orientation : ${data.calibration.orientation.toPrecision(3)} degrees E of N
                `, true)
        let objectStr = '';
        for (const object of data.objects_in_field) {
            objectStr += object + '\n'
        }
        mainAnalyse.addField("Detected object", objectStr, true)
        mainAnalyse.setImage(Job.getAnnotatedURL(<number>submissionStatus.jobs[0]))

        const mapEmbed = new MessageEmbed()
        mapEmbed.setTitle("Analyse of your AstroPhoto")
        mapEmbed.setDescription("This menu can help you to choose the scale of map")
        mapEmbed.addField("🌌", "To see the full sky", true)
        mapEmbed.addField("🎇", "To see the constelation around", true)
        mapEmbed.addField("🎆", "To see near object of your photo ", true)
        mapEmbed.addField("🌠", "To see object in your photo ", true)

        const x1 = new MessageEmbed()
        x1.setTitle("Map Zoom x1")
        x1.setImage(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 0))

        const x2 = new MessageEmbed()
        x2.setTitle("Map Zoom x2")
        x2.setImage(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 1))

        const x3 = new MessageEmbed()
        x3.setTitle("Map Zoom x3")
        x3.setImage(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 2))

        const x4 = new MessageEmbed()
        x4.setTitle("Map Zoom x4")
        x4.setImage(Job.getSkyPlotURL(<number>submissionStatus.job_calibrations[0][1], 3))


        const SDDSEmbed = new MessageEmbed()
        SDDSEmbed.setTitle("Analyse of your AstroPhoto")
        SDDSEmbed.setImage(Job.getSDDS(<number>submissionStatus.job_calibrations[0][1]))

        let embeds: Array<DiscordEmbedMenuPage> = [
            {
                index: 0,
                name: 'main',
                content: mainMenu,
                reactions: {
                    '📊': 'analyse',
                    '🔭': 'sdds',
                    '🗺️': 'maps_menu',
                    '❌': 'delete',
                }
            },
            {
                index: 1,
                name: 'analyse',
                content: mainAnalyse,
                reactions: {
                    '↩️': 'first',
                }
            },
            {
                index:2,
                name: 'maps_menu',
                content: mapEmbed,
                reactions: {
                    '🏠': 'first',
                    '🌌':'x1',
                    '🎇':'x2',
                    '🎆':'x3',
                    '🌠':'x4'
                }
            },
            {
                index: 3,
                name: 'x1',
                content: x1,
                reactions: {
                    '🏠': 'first',
                    '↩️': 'maps_menu',
                }
            },
            {
                index: 4,
                name: 'x2',
                content: x2,
                reactions: {
                    '🏠': 'first',
                    '↩️': 'maps_menu',
                }
            },
            {
                index: 5,
                name: 'x3',
                content: x3,
                reactions: {
                    '🏠': 'first',
                    '↩️': 'maps_menu',
                }
            },
            {
                index: 5,
                name: 'x4',
                content: x4,
                reactions: {
                    '🏠': 'first',
                    '↩️': 'maps_menu',
                }
            },
            {
                index: 6,
                name: 'sdds',
                content: SDDSEmbed,
                reactions: {
                    '↩️': 'first',
                }
            },
        ]
        return embeds
    }
}