import {Command, CommandContext, Permission} from "./command";
import {LaunchService} from "../models/launchAPI";
import {launchList, launchFormatter} from "./launch/launchEmbedFormater";
import {SearchData} from "./launch/prompts/search/type";
import {DiscordPromptRunner} from "discord.js-prompts";
import {MessageEmbed, TextChannel} from "discord.js";
import askUpcoming from "./launch/prompts/searchLaunchIndex";
import askUpcomingWithSearch from "./launch/prompts/impliciteSearchLaunchIndex";

export default class Launch implements Command {
    name = 'launch';
    summary = 'A command to see incoming launch';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext): Promise<Promise<any> | void> {
        const args = ctx.msg.content.split(' ')
        if (args.length === 1) {
            try {
                const upcomingLaunches = await LaunchService.launchUpcomingList({limit: 1});
                const nextLaunch = await LaunchService.launchUpcomingRead({id: upcomingLaunches.results[0].id as string});
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
                    const upcomingLaunches = await LaunchService.launchUpcomingList({limit: 15});
                    return ctx.channel.send(launchList(upcomingLaunches.results, 'Upcoming Rocket Launch'))
                } catch (e) {
                    if (e.status >= 400)
                        return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                    else
                        return ctx.channel.send(`> :warning: ${e.message}`)
                }
            case 'search':
                try {
                    const runner = new DiscordPromptRunner<SearchData>(ctx.msg.author, {searchNumber: -1})
                    return await runner.run(askUpcoming, ctx.channel as TextChannel)
                } catch (e) {
                    if (e.status >= 400)
                        return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                    else
                        return ctx.channel.send(`> :warning: ${e.message}`)
                }
            case 'help':
                return ctx.channel.send(this.renderHelp())
                break;
            default:
                try {
                    const runner = new DiscordPromptRunner<SearchData>(ctx.msg.author, {
                        searchNumber: -1,
                        search: args.slice(1, args.length).join(' ')
                    })
                    await runner.run(askUpcomingWithSearch, ctx.channel as TextChannel)
                } catch (e) {
                    if (e.status >= 400)
                        return ctx.channel.send(`> :warning: ${e.statusText} : ${e.body.detail}`)
                    else
                        return ctx.channel.send(`> :warning: ${e.message}`)
                }
        }
    }

    private renderHelp() {
        return new MessageEmbed()
            .setColor('#009dff')
            .setTitle('Need Help ?')
            .setDescription(this.summary)
            .addField('!launch', 'To display next launch', true)
            .addField('!launch list', 'To display upcoming launch', true)
            .addField('!launch search', 'To search a specific launch', true)
    }
}