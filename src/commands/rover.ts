import {Command, CommandContext, Permission} from "./command";
import {DiscordEmbedMenu, DiscordEmbedMenuPage} from "discord.js-embed-menu";
import {MessageEmbed, MessageEmbedFooter} from "discord.js";
import * as imgRover from "../models/marsRoverAPI/model/rover_img_store.json"
import RoverServices from "../models/marsRoverAPI/services/RoverServices";
import {RoverManifest} from "../models/marsRoverAPI/model/RoverManifest";
import {Photo} from "../models/marsRoverAPI/model/Photo";

export default class implements Command {
    name = 'rover';
    summary = 'To see rover picture';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        const args = ctx.msg.content.split(' ')
        if (args.length > 1) {
            switch (args[1]) {
                case 'help':
                    // @todo display help message
                    break;
                case 'status':
                    if (args.length >= 3) {
                        // @todo display manifest of selected rover
                    } else {
                        // @todo display manifest of all rovers
                    }
                    break;
                case 'last':
                    if (args.length >= 3) {
                        // @todo display precised rover last images
                    } else {
                        // @todo display a prompt message to ask for the rover
                    }
                    break;
                default:
                    await ctx.msg.channel.send(this.displayManifest(await RoverServices.roverManifest(args[1])))
            }
        }
        const menu = new DiscordEmbedMenu(ctx.channel, ctx.msg.author, this.everyRoversManifest(await RoverServices.roverLists()));
        return  await menu.start()
    }

    everyRoversManifest(rovers: Array<RoverManifest>): Array<DiscordEmbedMenuPage> {
        rovers = rovers.sort((a, b) => a.status > b.status && 1 || -1)
        let discordEmbedMenu: Array<DiscordEmbedMenuPage> = []
        let i = 0;
        for (const rover of rovers) {
            const msg = this.displayManifest(rover).setFooter("")

            let reaction = {}
            if (i > 0) {
                // @ts-ignore
                reaction['⬅️'] = 'previous'
                msg.setFooter('⬅️ previous | ')
            }
            if (i < rovers.length - 1) {
                // @ts-ignore
                reaction['➡️'] = 'next'
                msg.setFooter(msg.footer?.text + '➡️ next | ')
            }

            // @ts-ignore
            reaction['📷'] = async (menu: DiscordEmbedMenu) => {
                await this.setupPhotoReaction(menu)
            }
            msg.setFooter(msg.footer?.text + '📷 last rover photos')

            const roverManifest: DiscordEmbedMenuPage = {
                name: rover.name,
                content: msg,
                reactions: reaction,
                index: discordEmbedMenu.length - 1
            }
            discordEmbedMenu.push(roverManifest)
            i++
        }
        return discordEmbedMenu;
    }

    displayManifest(rover: RoverManifest): MessageEmbed {
        const embed = new MessageEmbed()
        embed.setAuthor("Status" + rover.status[0].toUpperCase() + rover.status.substr(1))
        embed.setTitle(rover.name)
        // @ts-ignore
        embed.setThumbnail(imgRover[rover.name.toLowerCase()].logo)
        // @ts-ignore
        embed.setImage(imgRover[rover.name.toLowerCase()].half)
        embed.addField("Launch", new Date(rover.launch_date).toDateString(), true)
        embed.addField("Landing", new Date(rover.landing_date).toDateString(), true)
        embed.addField("Total photo", rover.total_photos, true)
        embed.addField("Cameras", this.generateCameraString(rover))
        embed.addField("Last photographie", `**In mars sol **: ${rover.max_sol}\n**In earth date** : ${new Date(rover.max_date).toDateString()}`)
        embed.setTimestamp()
        return embed
    }

    /**
     * Generate formatted string to describe each camera of a rover
     * @param rover
     */
    generateCameraString(rover: RoverManifest): string {
        let str = ""
        for (const camera of rover.cameras) {
            str += `**${camera.name}** : ${camera.full_name}\n`
        }
        return str
    }

    /**
     * Need to be used in menu reaction callback
     * @param menu
     */
    async setupPhotoReaction(menu: DiscordEmbedMenu) {
        const roverName = menu.currentPage.name;
        const roverImages = await RoverServices.lastRoverPhotos(menu.currentPage.name)
        menu.pages = menu.pages.concat(this.generatePhotoMenu(roverImages, {
            menuName: roverName,
            mainMenuSize: menu.pages.length
        }))
        await menu.setPage(roverName + roverImages[0].id)
    }

    /**
     * Generate menu for rover's images if need a go menu button add the second parameter
     * @param roverImg
     * @param goBackData
     */
    generatePhotoMenu(roverImg: Array<Photo>, goBackData ?: { menuName: string, mainMenuSize: number }): Array<DiscordEmbedMenuPage> {
        let photosEmbedMenuPages: Array<DiscordEmbedMenuPage> = []
        let j = 0;
        for (const photo of roverImg) {
            const embed = new MessageEmbed()
            let photoReaction = {}

            if (typeof goBackData !== "undefined") {
                // @ts-ignore
                photoReaction['🏠'] = (menu: DiscordEmbedMenu) => {
                    menu.pages = menu.pages.slice(0, goBackData.mainMenuSize)
                    menu.setPage(photo.rover.name)
                }
                embed.setFooter('🏠 Home')
            }

            if (j > 0) {
                // @ts-ignore
                photoReaction['⬅️'] = 'previous'
                embed.setFooter(this.separateFooter(embed.footer) + '⬅️ previous')
            }
            if (j < roverImg.length - 1 && roverImg.length > 1) {
                // @ts-ignore
                photoReaction['➡️'] = 'next'
                embed.setFooter(this.separateFooter(embed.footer) + '➡️ next')
            }
            embed.setFooter(this.separateFooter(embed.footer) + 'page ' + (j + 1) + '/' + roverImg.length)
            embed.setAuthor("Taken by " + photo.camera.name)
            embed.setTitle("Photo N°" + photo.id)
            embed.setDescription("At sol " + photo.sol + "\n " + (new Date(photo.earth_date).toLocaleDateString()))
            embed.setImage(photo.img_src)
            const index = typeof goBackData !== "undefined" ? goBackData.mainMenuSize + j : j
            j++
            photosEmbedMenuPages.push({
                name: photo.rover.name + photo.id,
                content: embed,
                reactions: photoReaction,
                index: index
            })
        }
        return photosEmbedMenuPages
    }

    /**
     * Simple footer separator that can be call whatever if footer is null
     * @param footer
     */
    separateFooter(footer: MessageEmbedFooter | null): string {
        return (footer !== null ? footer?.text + ' | ' : '')
    }
}