import { validateEnv } from "./utils/env";
validateEnv();

import { Client } from "discord.js";
import Deps from "./utils/deps";
import EventEmitter from "events";
import {EventHandler} from "./handlers/EventHandler";

const bot = Deps.add(Client, new Client({
    partials: ['GUILD_MEMBER', 'REACTION', 'MESSAGE', 'USER'],
}));

export const emitter = new EventEmitter();

bot.login(process.env.BOT_TOKEN).then(() => console.log("logged"));

Deps.get<EventHandler>(EventHandler).init();