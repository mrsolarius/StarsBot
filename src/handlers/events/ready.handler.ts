import Event from './event-handler';
import Deps from '../../utils/deps';
import { Client } from 'discord.js';
import * as Console from "console";
import CommandService from "../commands/commande.service";

export default class ReadyHandler implements Event {
    started = false;
    on = 'ready';

    constructor(
        private bot = Deps.get<Client>(Client),
        private commandService = Deps.get<CommandService>(CommandService),
    ) {}

    async invoke() {
        Console.log(`Bot is live!`, `events`);

        if (this.started) return;
        this.started = true;

        await this.commandService.init();
        await this.bot.user?.setActivity('See Space');
    }
}