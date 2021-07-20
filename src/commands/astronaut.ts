import {Command, CommandContext} from "./command";
import {AstronautNormal, AstronautService} from "../models/launchAPI";
import {DiscordPromptRunner} from "discord.js-prompts";
import {MessageEmbed, TextChannel} from "discord.js";
import {SearchAstronautData} from "./astronaut/prompts/searchAstronaut/type";
import askNumber from "./astronaut/prompts/searchAstronautIndex";
import {astronautsList, displayAstronaut} from "./astronaut/astronautEmbedFormater";
import {DiscordEmbedMenu} from "discord.js-embed-menu";

export default class Astronaut implements Command{
    name = 'astronaut';
    summary = 'A command to see astronaut profile launch';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length>1){
            if (args[1]==="help"){
                return ctx.channel.send(this.renderHelp())
            }
            const search = args.slice(1,args.length).join(' ')
            try {
                let params = {search,limit:100,offset:0,ordering:'name'}
                let req = await AstronautService.astronautList(params)
                let astronautsFound : Array<AstronautNormal> = req.results
                do {
                    params.offset = params.offset+params.limit
                    req = await AstronautService.astronautList(params)
                    astronautsFound = astronautsFound.concat(req.results)
                }while (req.results.length>0)
                if (astronautsFound.length===1)
                    return ctx.channel.send(displayAstronaut(astronautsFound[0]))
                if (astronautsFound.length>1) {
                    const menu = new DiscordEmbedMenu(ctx.channel,ctx.msg.author,astronautsList(astronautsFound,true))
                    menu.start();
                    const runner = new DiscordPromptRunner<SearchAstronautData>(ctx.msg.author, {
                        astronautsFound: astronautsFound,
                        selectedNumber: -1
                    })
                    await runner.run(askNumber, ctx.channel as TextChannel)
                }else {
                    return ctx.channel.send(`> :warning: nothing found`)
                }
            }catch (e) {if (e.status >= 400)
                return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
            else
                return ctx.channel.send(`> :warning: ${e.message}`)
            }
        }else{
            return ctx.channel.send(`> :warning: please search something \`!astronaut help\` for more information `)
        }
    }

    private renderHelp() {
        return new MessageEmbed()
            .setColor('#009dff')
            .setTitle('Need Help ?')
            .setDescription(this.summary)
            .addField('!astronaut `your search`', 'To Search And display profile of an astronaut', true)
    }

}