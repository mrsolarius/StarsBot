import {DiscordPrompt, MessageVisual, VisualGenerator} from "discord.js-prompts";
import {SearchAstronautData} from "./type";
import {AstronautService} from "../../../../models/launchAPI";
import {displayAstronaut} from "../../astronautEmbedFormater";

export const displayResultVisual : VisualGenerator<SearchAstronautData> = async (data : SearchAstronautData) => {
    // @ts-ignore
    const astronaut = await AstronautService.astronautRead({id:data.astronautsFound[data.selectedNumber].id})
    return new MessageVisual('', {embed: displayAstronaut(astronaut)})
}

export const displayResultPrompt = new DiscordPrompt(displayResultVisual)