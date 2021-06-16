import {Command, CommandContext, Permission} from "./command";

export default class implements Command {
    name = 'ping';
    summary = 'Probably the best commands ever created.';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        return ctx.channel.send(`🏓 Pong! \`${ctx.bot.ws.ping}ms\``);
    }
}