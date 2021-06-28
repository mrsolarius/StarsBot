import {Command, CommandContext} from "./command";
import {AstronautService} from "../models/launchAPI";
import {DiscordPromptRunner} from "discord.js-prompts";
import {TextChannel} from "discord.js";
import {SearchAstronautData} from "./astronaut/prompts/searchAstronaut/type";
import askNumber from "./astronaut/prompts/searchAstronautIndex";
import {displayAstronaut} from "./astronaut/astronautEmbedFormater";

export default class Astronaut implements Command{
    name = 'astronaut';
    summary = 'A command to see astronaut profile launch';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length>1){
            const search = args.slice(1,args.length).join(' ')
            console.log(search)
            try {
                const astronautsFound = await AstronautService.astronautList({search,limit:21})
                if (astronautsFound.results.length===1)
                    return ctx.channel.send(displayAstronaut(astronautsFound.results[0]))
                if (astronautsFound.results.length>1) {
                    const runner = new DiscordPromptRunner<SearchAstronautData>(ctx.msg.author, {
                        astronautsFound: astronautsFound.results,
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
        }
    }

}