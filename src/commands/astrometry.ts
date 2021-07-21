import {Command, CommandContext, Permission} from "./command";
import {downloadImage, FileSubmitter, Job, Login} from "../models/astrometryAPI";

export default class implements Command {
    name = 'astrometry';
    summary = 'To analyse your deep sky observation';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        const args = ctx.msg.content.split(' ')

        if (args[1] === "help"){
            return ctx.channel.send('@todo help message')
        }


        const num = ctx.msg.attachments.firstKey()
        const attachement = ctx.msg.attachments.get(<string>num);
        if (typeof attachement!=="undefined") {
            if (attachement.height !== null && attachement.width !== null) {

                const session = await Login.login()
                const img = await downloadImage(attachement.proxyURL)
                const subscription = await FileSubmitter.submitFile({publicly_visible: "y", allow_modifications: "d", session: session.session, allow_commercial_use: "d"},img)
                do{
                    var jobs = await FileSubmitter.getSubmissionStatus(subscription.subid)
                }while (jobs.jobs.length<1)
                const result = Job.getJobResult(<number>jobs.jobs[0])
                console.log(result)
                console.log(Job.getAnnotatedURL(<number>jobs.jobs[0]))
                console.log(Job.getRedGreenURL(<number>jobs.jobs[0]))

            }
        }else{
            return ctx.channel.send(`> :warning: you need to attach an image or to precise link to analyse your image`)
        }

        return  ctx.channel.send('> :warning: unknown error')
    }
}