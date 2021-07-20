import {PromptNode} from "discord.js-prompts";
import {askNumberPrompt} from "./search/askNumber";
import {summaryPrompt} from "./search/summary";
import {askUpcomingPrompt} from "./search/askUpcomingWithSearch";


const askUpcomingWithSearch = new PromptNode(askUpcomingPrompt);
const askNumber = new PromptNode(askNumberPrompt);
const summary = new PromptNode(summaryPrompt)

askUpcomingWithSearch.addChild(askNumber)
askNumber.addChild(summary)

export default askUpcomingWithSearch;