import {AstronautDetailed, AstronautNormal} from "../../models/launchAPI";
import {MessageEmbed} from "discord.js";
import {DiscordEmbedMenuPage} from "discord.js-embed-menu";

export function astronautsList(astronautsList : Array<AstronautNormal>,displayNumber:boolean=false){
    let embeds : Array<DiscordEmbedMenuPage> = []
    let embed : MessageEmbed = new MessageEmbed();
    let elementCount=1,elementByPage=1, pageCount=1;
    const totalPages = Math.ceil((astronautsList.length/24))
    for (const astronaut of astronautsList) {
        if (elementByPage==1) {
            embed.setTitle('Astronauts List')
                .setColor('#24a8ef')
                .setTimestamp()
        }
        embed.addField((displayNumber?elementCount+' ':'')+ astronaut.name,
            `š¶ ${astronaut.date_of_birth}${astronaut.date_of_death!==null?`\nš ${astronaut.date_of_death}`:''}
            š ${astronaut.nationality}
            ${typeof astronaut.agency?.abbrev !== 'undefined'?`š¢ ${astronaut.agency?.abbrev}`:''}`,true)
        embed.setFooter(pageCount+'/'+totalPages)
        elementCount++
        elementByPage++
        if (elementByPage>24){
            embeds.push({
                name:'pn'+pageCount,
                content:embed,
                reactions:{
                    'ā¬':'previous',
                    'ā”ļø':'next',
                },
                index:pageCount
            })
            embed = new MessageEmbed()
            elementByPage=1
            pageCount++
        }
    }
    embeds.push({
        name:'pn'+pageCount,
        content:embed,
        reactions:{
            'ā¬':'previous',
            'ā”ļø':'next',
        },
        index:pageCount
    })
    return embeds
}

export function displayAstronaut(astronaut:AstronautDetailed){
    const embed = new MessageEmbed()
    embed.setAuthor(astronaut.name)
        .setDescription(astronaut.bio)
        .setTimestamp()
    if (astronaut.profile_image_thumbnail !== null && typeof astronaut.profile_image_thumbnail !== "undefined")
        embed.setThumbnail(astronaut.profile_image_thumbnail)

    if (astronaut.profile_image!==null && typeof astronaut.profile_image!== "undefined")
        embed.setImage(astronaut.profile_image)

    embed.addField('Birth','š¶'+new Date(astronaut.date_of_birth).toLocaleDateString(),true)
    if (astronaut.date_of_death!==null)
        embed.addField('Death','š'+new Date(astronaut.date_of_birth).toLocaleDateString(),true)

    embed.addField('Nationalite',astronaut.nationality,true)

    if (astronaut.agency?.name !== null && typeof astronaut.agency?.name !== "undefined")
        embed.addField('Agency',astronaut.agency.name,true)

    if (astronaut.status !== null && typeof astronaut.status!=="undefined")
        embed.addField('Status',astronaut.status.name,true)

    if (astronaut.type !== null && typeof astronaut.type!=="undefined")
        embed.addField('Type',astronaut.type?.name,true)

    if (astronaut.instagram !==null|| astronaut.twitter!==null)
        embed.addField('Social :' , (astronaut.instagram!==null?`[Instagram](${astronaut.instagram}) `:'')+(astronaut.instagram!==null&&astronaut.twitter!==null?'ā¢ ':'')+(astronaut.twitter!==null?`[Twitter](${astronaut.twitter})`:''),true)

    return embed
}