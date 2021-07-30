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
                return this.astrometryResponse(ctx,attachement.proxyURL)
            }
        } else {
            if (args.length>=2){
                return this.astrometryResponse(ctx,args[1])
            }
            return ctx.channel.send(`> :warning: you need to attach an image or to precise link to analyse your image`)
        }

        return ctx.channel.send('> :warning: unknown error')
    }

    async astrometryResponse(ctx:CommandContext,url:string){
        try {
            const {jobs, msg} = await this.astrometryProcess(ctx, url)
            const result = await Job.getJobResult(<number>jobs.jobs[0])
            const calibration = await Job.getCalibration(<number>jobs.jobs[0])
            msg.delete()
            const menu = new DiscordEmbedMenu(ctx.channel, ctx.msg.author, this.astrometryEmbedsMenuFormatter(result, jobs, calibration), 600000, true, true, false)
            return menu.start();
        } catch (e) {
            return null
        }
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
        let lastMsg = "Enqueue the jobs"
        let dots = ""

        do {
            //Wait 5 seconds to not dos the api server
            await delay(1000 * 5)

            //Ask for the jobs
            //Need var to access to jobs on return values
            var jobs = await FileSubmitter.getSubmissionStatus(subscription.subid)

            //Cancel while if the main job is active but not calibrate job append after 5 attempt
            if (jobs.jobs.length >= 1 && jobs.jobs[0] != null) {
                //Need var to access to status from while that is extern at this if
                var {status} = await Job.getJobStatus(<number>jobs.jobs[0])
                if (status === "?" || status ==="failure") {
                    msg.edit("> :warning: your image can't be calibrate")
                    return Promise.reject(new Error('can not calibrate image'))
                }else{
                    if (lastMsg!=="job "+status)
                        dots = ''
                    lastMsg = "job "+status
                }
            }

            //Add somme point after message content after each iteration to informe user that everything processing
            dots=dots+'.'
            msg.edit(lastMsg +dots)
        } while (status !=="success")
        msg.edit("Jobs end")

        return {jobs, msg}
    }

    astrometryEmbedsMenuFormatter(data: JobResult, submissionStatus: SubmissionStatus, calibration: Calibration) {
        const mainMenu = new MessageEmbed()
        mainMenu.setTitle("Menu of your result")
        mainMenu.setDescription("this menu work with emoji that you need to clik into")
        mainMenu.addField("📊 Result", "See your result", true)
        mainMenu.addField("🔭 SDSS", "See the SDSS of your sky location", true)
        mainMenu.addField("🗺️ Maps", "See sky maps", true)

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

        const SDDSEmbed = new MessageEmbed()
        SDDSEmbed.setTitle("Analyse of your AstroPhoto")
        SDDSEmbed.setImage(Job.getSDDS(<number>submissionStatus.job_calibrations[0][1]))
        SDDSEmbed.setFooter('↩️ go back')

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
                index: 3,
                name: 'sdds',
                content: SDDSEmbed,
                reactions: {
                    '↩️': 'first',
                }
            },
        ]
        embeds = embeds.concat(this.generateEveryMaps(<number>submissionStatus.job_calibrations[0][1], embeds.length - 1))
        return embeds
    }

    embedZoomGenerator(jobid: number, zoom: 0 | 1 | 2 | 3) {
        const x1 = new MessageEmbed()
        x1.setTitle("Map Zoom x" + (zoom + 1))
        x1.setImage(Job.getSkyPlotURL(jobid, zoom))
        x1.setFooter('🏠 main menu | ↩️ go back')
        return x1
    }

    generateEveryMaps(jobid: number, startindex: number) {

        let embeds: Array<DiscordEmbedMenuPage> = []
        embeds.push(this.generateMapsMainMenu(startindex++))
        for (let i = 0; i <= 3; i++) {
            const embedZoom = this.embedZoomGenerator(jobid, <0 | 1 | 2 | 3>i)
            embeds.push({
                index: startindex++,
                name: 'x' + i,
                content: embedZoom,
                reactions: {
                    '🏠': 'first',
                    '↩️': 'maps_menu',
                }
            });
        }
        return embeds
    }


    generateMapsMainMenu(index: number){
        const mapEmbed = new MessageEmbed()
        mapEmbed.setTitle("Scale Mapping Menu")
        mapEmbed.setDescription("This menu can help you to choose the scale of map")
        mapEmbed.addField("🌌 Zoom x1", "To see the full sky", true)
        mapEmbed.addField("🎇 Zoom x2", "To see the constelation around", true)
        mapEmbed.addField("🎆 Zoom x3", "To see near object of your photo ")
        mapEmbed.addField("🌠 Zoom x4", "To see object in your photo ", true)
        mapEmbed.setFooter('↩️ go back')

        return {
            index: index,
            name: 'maps_menu',
            content: mapEmbed,
            reactions: {
                '↩️': 'first',
                '🌌': 'x0',
                '🎇': 'x1',
                '🎆': 'x2',
                '🌠': 'x3'
            }
        }
    }
}