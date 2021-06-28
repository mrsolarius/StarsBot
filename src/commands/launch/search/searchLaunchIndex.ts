import {PromptNode} from "discord.js-prompts";
import {askSearchPrompt} from "./prompt/askSearch";
import {askNumberPrompt} from "./prompt/askNumber";
import {summaryPrompt} from "./prompt/summary";
import {askUpcomingPrompt} from "./prompt/askUpcoming";


const askUpcoming = new PromptNode(askUpcomingPrompt);
const askSearch = new PromptNode(askSearchPrompt);
const askNumber = new PromptNode(askNumberPrompt);
const summary = new PromptNode(summaryPrompt)

askUpcoming.addChild(askSearch)
askSearch.addChild(askNumber)
askNumber.addChild(summary)

export default askUpcoming;