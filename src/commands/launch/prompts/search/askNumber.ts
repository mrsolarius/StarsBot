import {DiscordPrompt, MessageVisual, Rejection, VisualGenerator} from "discord.js-prompts";
import {SearchData} from "./type";
import {launchList} from "../../LaunchEmbedFormater";
import {Message} from "discord.js";

export const askNumberVisual : VisualGenerator<SearchData> = async (data:SearchData)=>{
    if (typeof data.launchesFound!== "undefined") {
        const embed = launchList(data.launchesFound,'Result of search', true)
        return new MessageVisual(`> :information_source: **Please select your launch with number beetween 1 and ${data.launchesFound.length}**`,{embed})
    }else {
        throw new Rejection(`Not Found`)
    }
}

export const askNumberFn:(m: Message, data: SearchData) => Promise<SearchData> = async (m:Message, data:SearchData) => {
    let maxNumber = 1
    if (typeof data.launchesFound!=="undefined")
        maxNumber = data.launchesFound?.length
    const selectedNumber = Number(m.content);
    if (isNaN(selectedNumber))
        throw new Rejection(`${m.content} is not a number. Please try again`)
    if (selectedNumber<1)
        throw new Rejection(`Your number cannot be bellow 1`)
    if (selectedNumber>maxNumber)
        throw new Rejection(`You number can't excess ${maxNumber}`)
    return{
        ...data,
        searchNumber:selectedNumber-1
    }
}

export const askNumberPrompt = new DiscordPrompt(askNumberVisual,askNumberFn)