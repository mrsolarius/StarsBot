import {Command, CommandContext, Permission} from "./command";

export default class Launch implements Command{
    name = 'launch';
    summary = 'A command to see incoming launch';
    precondition: Permission = '';
    module = 'General';

    execute(ctx: CommandContext): Promise<any> | void {
        return ctx.msg.channel.send("test")
    }
}