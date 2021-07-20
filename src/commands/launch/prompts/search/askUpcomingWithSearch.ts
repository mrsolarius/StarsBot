import {DiscordPrompt, DiscordPromptFunction, MessageVisual, Rejection} from "discord.js-prompts";
import {SearchData} from "./type";
import {Message} from "discord.js";
import {LaunchService} from "../../../../models/launchAPI";

export const askUpcomingVisual = new MessageVisual('Do you want search a **`past`** launch or an **`upcoming`** launch ?')

export const askUpcomingFn: DiscordPromptFunction<SearchData> = async (m:Message, data:SearchData)=>{
    if (m.content==='past'||m.content==='p'||m.content==='previous'||m.content==='prev') {
        const launches = await LaunchService.launchPreviousList({search: data.search,includeSuborbital:true,limit:21})
        if (launches.results.length >= 1) {
            return {
                ...data,
                upcoming: false,
                launchesFound:launches.results
            }
        }
        throw new Rejection("Nothing founds")
    }
    if (m.content==='upcoming'||m.content==='u'||m.content==='future'||m.content==='f') {
        const launches = await LaunchService.launchUpcomingList({search: data.search,includeSuborbital:true,limit:21})
        if (launches.results.length >= 1) {
            return {
                ...data,
                upcoming: true,
                launchesFound:launches.results
            }
        }
        throw new Rejection("Nothing founds cancel the prompt")
    }
    throw new Rejection('Please say **`past`** or **`upcoming`** to select the scop of this request.')
}

export const askUpcomingPrompt = new DiscordPrompt(askUpcomingVisual,askUpcomingFn)