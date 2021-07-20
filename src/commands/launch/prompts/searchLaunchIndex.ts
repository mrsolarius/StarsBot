import {PromptNode} from "discord.js-prompts";
import {askSearchPrompt} from "./search/askSearch";
import {askNumberPrompt} from "./search/askNumber";
import {summaryPrompt} from "./search/summary";
import {askUpcomingPrompt} from "./search/askUpcoming";


const askUpcoming = new PromptNode(askUpcomingPrompt);
const askSearch = new PromptNode(askSearchPrompt);
const askNumber = new PromptNode(askNumberPrompt);
const summary = new PromptNode(summaryPrompt)

askUpcoming.addChild(askSearch)
askSearch.addChild(askNumber)
askNumber.addChild(summary)

export default askUpcoming;