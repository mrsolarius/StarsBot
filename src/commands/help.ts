import {Command, CommandContext, Permission} from "./command";
import {MessageEmbed} from "discord.js";

export default class implements Command {
    name = 'help';
    summary = 'To know the commands';
    precondition: Permission = '';
    module = 'general'

    async execute(ctx: CommandContext) {
        const embed = new MessageEmbed()
            .setColor('#009dff')
            .setTitle('Need Help ?')
            .setDescription(this.summary)
            .addField('!apod help', 'To display help of apod command', true)
            .addField('!astronaut help', 'To display help of astronaut command', true)
            .addField('!launch help', 'To display help of launch command', true)
        return ctx.channel.send(embed);
    }
}
