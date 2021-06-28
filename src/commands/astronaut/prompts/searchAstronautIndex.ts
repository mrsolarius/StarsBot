import {PromptNode} from "discord.js-prompts";
import {askNumberPrompt} from "./searchAstronaut/askNumber";
import {displayResultPrompt} from "./searchAstronaut/displayResult";

const askNumber = new PromptNode(askNumberPrompt)
const displayResult = new PromptNode(displayResultPrompt)

askNumber.addChild(displayResult)

export default askNumber;