import {Command, CommandContext, Permission} from "./command";
import {MessageEmbed} from "discord.js"
import QueryAPOD from "../models/nasaAPOD/queryAPOD";
import bodyAPOD from "../models/nasaAPOD/interfaces/bodyAPOD.interface";

export default class NasaPict implements Command{
    name = 'apod';
    summary = 'A command to see the nasa picture of a days';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length === 1) {
            const queryAPOD = new QueryAPOD()
            return NasaPict.renderOneAOPD(ctx, await queryAPOD.getAPOD());

        }

        if (args.length === 2){
            const queryAPOD = new QueryAPOD()
            queryAPOD.date = args[1]
            try {
                return NasaPict.renderOneAOPD(ctx, await queryAPOD.getAPOD());
            }catch (e){
                console.log(e)
            }
        }
    }

    private static renderOneAOPD(ctx : CommandContext, aopd : bodyAPOD){
        const embed = new MessageEmbed()
            .setTitle("AOPD : "+aopd.title)
            .setDescription(aopd.explanation)
            .setURL(aopd.hdurl)
            .setColor('#009dff')
            .setFooter('Le '+aopd.date)
            .setImage(aopd.url)
        ctx.channel.send(embed)
    }
}