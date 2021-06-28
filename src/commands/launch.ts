import {Command, CommandContext, Permission} from "./command";
import {LaunchService} from "../models/launchAPI";
import {launchList,launchFormatter} from "./launch/LaunchEmbedFormater";
import {SearchData} from "./launch/prompts/search/type";
import {DiscordPromptRunner} from "discord.js-prompts";
import {TextChannel} from "discord.js";
import askUpcoming from "./launch/prompts/searchLaunchIndex";

export default class Launch implements Command {
    name = 'launch';
    summary = 'A command to see incoming launch';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length === 1) {
            try {
                const upcomingLaunches = await LaunchService.launchUpcomingList({limit:1});
                const nextLaunch = await LaunchService.launchUpcomingRead({id:upcomingLaunches.results[0].id as string});
                return ctx.channel.send(launchFormatter(nextLaunch))
            } catch (e) {
                if (e.status >= 400)
                    return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                else
                    return ctx.channel.send(`> :warning: ${e.message}`)
            }
        }
        switch (args[1]) {
            case 'list':
                try {
                    const upcomingLaunches = await LaunchService.launchUpcomingList({limit:15});
                    return ctx.channel.send(launchList(upcomingLaunches.results,'Upcoming Rocket Launch'))
                } catch (e) {
                    if (e.status >= 400)
                        return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                    else
                        return ctx.channel.send(`> :warning: ${e.message}`)
                }
            case 'search':
                try{
                    const runner = new DiscordPromptRunner<SearchData>(ctx.msg.author, {searchNumber: -1})
                    await runner.run(askUpcoming, ctx.channel as TextChannel)
                }catch (e) {
                    if (e.status >= 400)
                        return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                    else
                        return ctx.channel.send(`> :warning: ${e.message}`)
                }
            case 'help':
                //@todo faire une commande d'aide
                break;
            default:
        }

    }
}