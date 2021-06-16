import BotEvent from './event-handler';
import {Message} from "discord.js";
import CommandService from "../commands/commande.service";
import Deps from "../../utils/deps";

export default class MessageHandler implements BotEvent {
    on = 'message';

    constructor(private commands = Deps.get<CommandService>(CommandService)) {
    }

    invoke(msg: Message): Promise<any> | void {
        if (!msg.member || msg.author.bot) return;
        if (msg.content[0]!=='!')return ;
        this.commands.handle(msg)
    }
}