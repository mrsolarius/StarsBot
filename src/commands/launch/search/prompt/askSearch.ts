import {DiscordPrompt, DiscordPromptFunction, MessageVisual, Rejection} from "discord.js-prompts";
import {SearchData} from "./type";
import {Message} from "discord.js";
import {LaunchService} from "../../../../models/launchAPI";

export const askSearchVisual =new MessageVisual(`Whats your search ?`)

export const askSearchFn: DiscordPromptFunction<SearchData> = async (m:Message, data:SearchData)=>{
    if (data.upcoming) {
        const launches = await LaunchService.launchUpcomingList({search: m.content,includeSuborbital:true,limit:21})
        if (launches.results.length >= 1) {
            return {
                ...data,
                launchesFound: launches.results
            }
        }
    }else {
        const launches = await LaunchService.launchPreviousList({search: m.content,includeSuborbital:true,limit:21})
        if (launches.results.length >= 1) {
            return {
                ...data,
                launchesFound: launches.results
            }
        }
    }
    throw new Rejection(`I found nothing with your search therms. Try again or **\`exit\`**`);
}

export const askSearchPrompt = new DiscordPrompt(askSearchVisual,askSearchFn)