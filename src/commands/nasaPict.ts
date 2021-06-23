import {Command, CommandContext, Permission} from "./command";
import {MessageEmbed} from "discord.js"
import QueryAPOD from "../models/nasaAPOD/queryAPOD";
import bodyAPOD from "../models/nasaAPOD/interfaces/bodyAPOD.interface";

export default class NasaPict implements Command {
    name = 'apod';
    summary = 'A command to see the nasa picture of a days';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length === 1) {
            const queryAPOD = new QueryAPOD()
            return NasaPict.renderAOPD(ctx, await queryAPOD.getAPOD());
        }

        if (args.length === 2) {
            switch (args[1]) {
                case 'rlist':
                    try {
                        const queryAPOD = new QueryAPOD()
                        queryAPOD.count = 12
                        const apod = await queryAPOD.getAPOD()
                        return NasaPict.renderAOPD(ctx, apod)
                    } catch (e) {
                        return await ctx.msg.channel.send(`> :warning: ${e.message}`);
                    }
                case 'help':
                    return await ctx.channel.send(this.renderHelp())
                default :
                    try {
                        const queryAPOD = new QueryAPOD()
                        queryAPOD.date = args[1]
                        const apod = await queryAPOD.getAPOD()
                        return NasaPict.renderAOPD(ctx, apod);
                    } catch (e) {
                        return await ctx.msg.channel.send(`> :warning: ${e.message}`);
                    }
            }
        } else {
            return await ctx.msg.channel.send(`> :warning: unkonwn action request pleeze type \`!aopd help\` to get help`);
        }
    }

    private static renderAOPD(ctx: CommandContext, aopd: bodyAPOD | Array<bodyAPOD>) {
        let embed: MessageEmbed
        if (!Array.isArray(aopd)) {
            embed = NasaPict.getOneAOPDEmbed(<bodyAPOD>aopd)
        } else {
            embed = NasaPict.getMultipleEmbed(aopd)
        }
        ctx.channel.send(embed)
    }

    private static getOneAOPDEmbed(aopd: bodyAPOD): MessageEmbed {
        let msg = new MessageEmbed()
            .setTitle("AOPD : " + aopd.title)
            .setDescription(aopd.explanation)
            .setURL(aopd.hdurl)
            .setColor('#009dff')
            .setFooter('Le ' + aopd.date)
        if (aopd.media_type === 'image') {
            msg.setImage(aopd.url)
        } else if (aopd.media_type === 'video') {
            msg.addField('Video :', aopd.url)
        }
        return msg
    }

    private static getMultipleEmbed(apodArr: Array<bodyAPOD>): MessageEmbed {
        apodArr.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        const embed = new MessageEmbed()
        embed
            .setTitle(`APOD from ${new Date(apodArr[apodArr.length - 1].date).toLocaleDateString()} to ${new Date(apodArr[0].date).toLocaleDateString()}`)
            .setColor('#009dff')

        for (const apod of apodArr) {
            embed.addField(new Date(apod.date).toLocaleDateString() + ' (' + apod.media_type + ')', `[${apod.title}](${apod.url})`, true)
        }
        return embed;
    }

    private renderHelp() {
        return new MessageEmbed()
            .setColor('#009dff')
            .setTitle('Need Help ?')
            .setDescription(this.summary)
            .addField('!apod', 'To display today apod', true)
            .addField('!apod `yyy-mm-jj`', 'To specify date of the apod', true)
            .addField('!apod rlist', 'To get a random list of apod', true)
    }
}