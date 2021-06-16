import Deps from "../utils/deps";
import {Client} from "discord.js";
import {readdir} from "fs/promises";
import BotEvent from "./events/event-handler";

export class EventHandler {

    private readonly handlers: BotEvent[] = [];

    constructor(private bot = Deps.get<Client>(Client)) {}

    async init(){
        const handlerFiles = await readdir(`${__dirname}/events`);
        for (const file of handlerFiles){
            const {default: Handler} = await import(`./events/${file}`);
            const  handler = Handler && new Handler();
            if (!handler?.on) continue;
            this.handlers.push(new Handler())
        }
        this.hookEvents()
    }

    private hookEvents() {
        for (const handler of this.handlers)
            this.bot.on(handler.on as any, handler.invoke.bind(handler));
        console.log(`Loaded: ${this.handlers.length} handlers`, 'events');
    }


}