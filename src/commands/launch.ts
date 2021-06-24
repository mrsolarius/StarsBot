import {Command, CommandContext, Permission} from "./command";
import {MessageEmbed} from "discord.js";
import {LaunchDetailed, LaunchSerializerCommon, LaunchService} from "../models/launchAPI";

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
                return ctx.channel.send(Launch.launchFormatter(nextLaunch))
            } catch (e) {
                return ctx.channel.send(`> :warning: ${e.message}`)
            }
        }
        switch (args[1]) {
            case 'list':
                try {
                    const upcomingLaunches = await LaunchService.launchUpcomingList({limit:15});
                    return ctx.channel.send(Launch.launchList(upcomingLaunches.results))
                } catch (e) {
                    return ctx.channel.send(`> :warning: ${e.message}`)
                }
            case 'help':
                break;
            default:
        }

    }

    static launchList(upcomingLaunch: Array<LaunchSerializerCommon>): MessageEmbed {
        const me = new MessageEmbed()
        me.setTitle('Upcoming Rocket Launch')
            .setTimestamp(new Date())
            .setColor('#1071ff')
            .setDescription(`🚀 Rocket, 🧑‍💼 Mission, 📝 Status`)
        for (const upcomingElement of upcomingLaunch) {
            if (typeof upcomingElement.net === "string") {

                me.addField(new Date(Date.parse(upcomingElement.net)).toLocaleString(),
                    `
                           🚀 *${typeof upcomingElement.rocket?.configuration?.name !== 'undefined' ? upcomingElement.rocket?.configuration?.name : 'unknown'}*
                           🧑‍💼 *${typeof upcomingElement.mission?.name !== 'undefined' ? upcomingElement.mission?.name : 'unknown'}*
                           📝 *${typeof upcomingElement.status?.name !== 'undefined' ? upcomingElement.status?.name : 'unknown'}*`
                    , true)
            }
        }
        return me
    }

    static launchFormatter(nextLaunch: LaunchDetailed): MessageEmbed {
        let me = new MessageEmbed()
        me.setTitle(nextLaunch.name)
        if (nextLaunch.mission?.description !== undefined)
            me.setDescription(nextLaunch.mission?.description)
        me.addField('Launch Dates',
            `Planned : ${nextLaunch.net}
                    Start : ${nextLaunch.window_start}
                    End : ${nextLaunch.window_end}
                    ${nextLaunch.webcast_live !== false ? `\nWeb cast available here : ${nextLaunch.webcast_live}` : ''}
        `, true)
        me.addField('Launch Status',
            `${nextLaunch.status?.name !== undefined ? nextLaunch.status?.name : ''}
                    ${nextLaunch.status?.description !== undefined ? nextLaunch.status.description : ''}`, true)
            .addField('\u200b', '\u200b')
        me.addField('Rocket data',
            (nextLaunch.rocket?.configuration?.family !== undefined ? `Name : ${nextLaunch.rocket?.configuration?.name}\n` : '') +
            (nextLaunch.rocket?.configuration?.family !== undefined ? `Familly : ${nextLaunch.rocket.configuration.family}\n` : '') +
            (nextLaunch.rocket?.configuration?.launch_mass !== undefined ? `Masse : ${nextLaunch.rocket.configuration.launch_mass}T\n` : '') +
            (nextLaunch.rocket?.configuration?.length !== undefined ? `Height : ${nextLaunch.rocket.configuration.length}m\n` : '') +
            (nextLaunch.rocket?.configuration?.diameter !== undefined ? `Diameter : ${nextLaunch.rocket.configuration.diameter}m` : ''),
            true)

        me.addField('Pad information',
            (nextLaunch.pad?.name !== undefined ? `Name : ${nextLaunch.pad.name}\n` : '') +
            (nextLaunch.pad?.total_launch_count !== undefined ? `Total Launch : ${nextLaunch.pad.total_launch_count}\n` : '') +
            (nextLaunch.pad?.map_url !== undefined ? `[Location](${nextLaunch.pad.map_url})\n` : '') +
            (nextLaunch.pad?.wiki_url !== undefined && nextLaunch.pad?.wiki_url !== '' ? `[Info](${nextLaunch.pad.wiki_url})` : ''),
            true)

        me.addField('Mission data',
            (nextLaunch.mission?.name !== undefined ? `Name : ${nextLaunch.mission?.name}\n` : '') +
            (nextLaunch.mission?.launch_designator !== undefined && nextLaunch.mission?.launch_designator !== null ? `Client : ${nextLaunch.mission?.launch_designator}\n` : '') +
            (nextLaunch.mission?.type !== undefined ? `Type : ${nextLaunch.mission?.type}\n` : '') +
            (nextLaunch.mission?.orbit !== undefined ? `Orbit : ${nextLaunch.mission?.orbit.name}\n` : '') +
            (nextLaunch.rocket?.configuration?.launch_cost !== undefined ? `Launch Cost : ${nextLaunch.rocket.configuration.launch_cost}\n` : ''),
            false)

        if (nextLaunch.image != null) me.setImage(nextLaunch.image)
        if (nextLaunch.launch_service_provider?.logo_url != null) me.setThumbnail(nextLaunch.launch_service_provider.logo_url)
        return me
    }
}