import { Message, GuildMember, TextChannel, Guild, User, Client, PermissionString } from 'discord.js';

export type Permission = '' | PermissionString;

export interface Command {
    aliases?: string[];
    coolDown?: number;
    module: string;
    name: string;
    precondition?: Permission;
    summary: string;
    usage?: string;

    execute: (ctx: CommandContext, ...args: any) => Promise<any> | void;
}

export class CommandContext {
    member: GuildMember | null;
    channel: TextChannel;
    guild: Guild | null;
    user: User | undefined;
    bot: Client;

    constructor(
        public msg: Message,
        public command: Command) {
        this.member = msg.member;
        this.channel = msg.channel as TextChannel;
        this.guild = msg.guild;
        this.user = msg.member?.user;
        this.bot = msg.client;
    }
}