import {Command, CommandContext, Permission} from "./command";
import {DiscordEmbedMenu} from "discord.js-embed-menu";
import {MessageEmbed} from "discord.js";

export default class Menu implements Command{
    name = 'menu';
    summary = 'just a test';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        let menu = new DiscordEmbedMenu(ctx.channel, ctx.msg.author, [
            {
                /*
                 * A page object consists of three items:
                 * 1) A name. This is used as a unique destination name for reactions.
                 * 2) Some content. This is a rich embed. You can use {object: formatting} or .functionFormatting() for embeds. Whichever you prefer.
                 * 3) A set of reactions, linked to either a page destination or a function.* (See example pages)
                 *
                 * Reactions can be emojis or custom emote IDs, and reaction destinations can be either the names
                 * of pages, () => { functions }, or special destination names. See below for a list of these.
                 */

                /* You can call pages whatever you like. The first in the array is always loaded first. */
                name: 'main',
                content: new MessageEmbed({
                    title: 'Main menu',
                    description: 'Please chose an action',
                    fields: [
                        {
                            name: "📝 Sub menu",
                            value: "Goes to another menu.",
                            inline: false
                        },
                        {
                            name: "✉️ Direct message",
                            value: "Sends a direct message.",
                            inline: false
                        },
                        {
                            name: "❌ Close",
                            value: "Close the menu.",
                            inline: false
                        }
                    ]
                }),
                reactions: {
                    '📝': 'sub-menu',
                    '✉️': async (menu: { user: { send: (arg0: string) => void; username: any; }; }) => {
                        menu.user.send(`Hello dear ${menu.user.username}.`);
                    },
                    '❌': 'delete',
                    '⬅':'previous',
                    '➡️':'next',
                }
            },
            {
                name: 'sub-menu',
                content: new MessageEmbed({
                    title: 'Sub menu',
                    description: 'This is another page.',
                    fields: [
                        {
                            name: "⬅️ Back",
                            value: "Go backwards.",
                            inline: false
                        },
                        {
                            name: "❌ Close",
                            value: "Close the menu.",
                            inline: false
                        }
                    ]
                }),
                reactions: {
                    '❌': 'delete',
                    '⬅':'previous',
                    '➡️':'next'
                }
            }
        ]);

        /* Run Menu.start() when you're ready to send the menu. */
        menu.start();

        /* The menu also has two events you can use.
         * The "page-changing" event fires just before a new page is sent.
         * The "page-changed" event fires after the new page is sent.
         */
        menu.on('page-changing', (oldPageIndex, oldPage, newPageIndex, newPage) => {
            console.log(`Menu is going from "${oldPage.content.title}" (${oldPageIndex}) to "${newPage.content.title}" (${newPageIndex})`);
        });

        menu.on('page-changed', (pageIndex, page) => {
            console.log(`Menu is now on "${page.content.title}" (${pageIndex})`);
        });
        return
    }
}