import {DiscordPrompt, MessageVisual, VisualGenerator} from "discord.js-prompts";
import {SearchData} from "./type";
import {launchFormatter} from "../../launchEmbedFormater";
import {LaunchService} from "../../../../models/launchAPI";

export const summaryVisual : VisualGenerator<SearchData> = async (data : SearchData) => {
    if (typeof data.launchesFound!=="undefined"){
        if (typeof data.launchesFound[data.searchNumber].id !==undefined){
            // @ts-ignore
            const id : string= data.launchesFound[data.searchNumber].id
            let launch;
            if (data.upcoming)
                launch = await LaunchService.launchUpcomingRead({id})
            else
                launch = await LaunchService.launchPreviousRead({id})
            return new MessageVisual('',{embed:launchFormatter(launch)})
        }else {
            return new MessageVisual("Can't access to the launch ids")
        }
    }else{
        return new MessageVisual('Something wrong append')
    }
}

export const summaryPrompt = new DiscordPrompt(summaryVisual)