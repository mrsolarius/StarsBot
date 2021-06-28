import {DiscordPrompt, MessageVisual, Rejection, VisualGenerator} from "discord.js-prompts";
import {SearchAstronautData} from "./type";
import {astronautsList} from "../../astronautEmbedFormater";
import {Message} from "discord.js";


export const askNumberVisual : VisualGenerator<SearchAstronautData> = async (data:SearchAstronautData)=>{
    return new MessageVisual('',{embed:astronautsList(data.astronautsFound,true)})
}

export const askNumberFn:(m: Message, data: SearchAstronautData) => Promise<SearchAstronautData> = async (m:Message, data:SearchAstronautData) => {
    const maxNumber = data.astronautsFound.length
    const selectedNumber = Number(m.content);
    if (isNaN(selectedNumber))
        throw new Rejection(`${m.content} is not a number. Please try again`)
    if (selectedNumber<1)
        throw new Rejection(`Your number cannot be bellow 1`)
    if (selectedNumber>maxNumber)
        throw new Rejection(`You number can't excess ${maxNumber}`)
    return{
        ...data,
        selectedNumber:selectedNumber-1
    }
}

export const askNumberPrompt = new DiscordPrompt(askNumberVisual,askNumberFn)