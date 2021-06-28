import {AstronautDetailed, AstronautNormal} from "../../models/launchAPI";
import {MessageEmbed} from "discord.js";

export function astronautsList(astronautsList : Array<AstronautNormal>,displayNumber:boolean=false){
    const embed = new MessageEmbed()
    embed.setTitle('Astronauts List')
        .setColor('#24a8ef')
        .setTimestamp()
    let i=1;
    for (const astronaut of astronautsList) {
        embed.addField((displayNumber?i+' ':'')+ astronaut.name,
            `👶 ${astronaut.date_of_birth}${astronaut.date_of_death!==null?`\n💀 ${astronaut.date_of_death}`:''}
            🎌 ${astronaut.nationality}
            ${typeof astronaut.agency?.abbrev !== 'undefined'?`🏢 ${astronaut.agency?.abbrev}`:''}`,true)
        i++
    }

    return embed
}

export function displayAstronaut(astronaut:AstronautDetailed){
    return new MessageEmbed({title:astronaut.name})
}