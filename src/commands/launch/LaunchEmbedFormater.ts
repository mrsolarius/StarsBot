import {LaunchDetailed, LaunchSerializerCommon} from "../../models/launchAPI";
import {MessageEmbed} from "discord.js";

export function launchList(upcomingLaunch: Array<LaunchSerializerCommon>,title:string,displayNumber:boolean=false): MessageEmbed {
    const me = new MessageEmbed()
    me.setTitle(title)
        .setTimestamp(new Date())
        .setColor('#1071ff')
        .setDescription(`🚀 Rocket, 🧑‍💼 Mission, 📝 Status`)
    let i = 1;
    for (const upcomingElement of upcomingLaunch) {
        if (typeof upcomingElement.net === "string") {

            me.addField((displayNumber?i+' ':'')+new Date(Date.parse(upcomingElement.net)).toDateString(),
                `
                           🚀 *${typeof upcomingElement.rocket?.configuration?.name !== 'undefined' ? upcomingElement.rocket?.configuration?.name : 'unknown'}*
                           🧑‍💼 *${typeof upcomingElement.mission?.name !== 'undefined' ? upcomingElement.mission?.name : 'unknown'}*
                           📝 *${typeof upcomingElement.status?.name !== 'undefined' ? upcomingElement.status?.name : 'unknown'}*`
                , true)
            i++;
        }
    }
    return me
}

export function launchFormatter(nextLaunch: LaunchDetailed): MessageEmbed {
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