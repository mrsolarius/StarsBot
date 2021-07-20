import {DiscordPrompt, DiscordPromptFunction, MessageVisual, Rejection} from "discord.js-prompts";
import {SearchData} from "./type";
import {Message} from "discord.js";

export const askUpcomingVisual = new MessageVisual('Do you want search a **`past`** launch or an **`upcoming`** launch ?')

export const askUpcomingFn: DiscordPromptFunction<SearchData> = async (m:Message, data:SearchData)=>{
    if (m.content==='past'||m.content==='p'||m.content==='previous'||m.content==='prev')
        return{
            ...data,
            upcoming:false
        }
    if (m.content==='upcoming'||m.content==='u'||m.content==='future'||m.content==='f')
        return{
            ...data,
            upcoming:true
        }
    throw new Rejection('Please say **`past`** or **`upcoming`** to select the scop of this request.')
}

export const askUpcomingPrompt = new DiscordPrompt(askUpcomingVisual,askUpcomingFn)