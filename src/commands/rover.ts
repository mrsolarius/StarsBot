import {Command, CommandContext, Permission} from "./command";
import {DiscordEmbedMenu, DiscordEmbedMenuPage} from "discord.js-embed-menu";
import {MessageEmbed} from "discord.js";
import * as imgRover from "../models/marsRoverAPI/model/rover_img_store.json"
import RoverServices from "../models/marsRoverAPI/services/RoverServices";
import {RoverManifest} from "../models/marsRoverAPI/model/RoverManifest";

export default class implements Command {
    name = 'rover';
    summary = 'To see rover picture';
    precondition: Permission = '';
    module = 'General';

    async execute(ctx: CommandContext) {
        const args = ctx.msg.content.split(' ')
        if (args.length>1) {
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
        const menu = new DiscordEmbedMenu(ctx.channel, ctx.msg.author,this.everyRoversManifest(await RoverServices.roverLists()));
        await menu.start()
    }

    everyRoversManifest(rovers:Array<RoverManifest>):Array<DiscordEmbedMenuPage>{
        let discordEmbedMenu:Array<DiscordEmbedMenuPage>  = []
        let i = 0;
        for (const rover of rovers) {
            const msg = this.displayManifest(rover).setFooter("")

            let reaction = {}
            if (i>0){
                // @ts-ignore
                reaction['⬅️']='previous'
                msg.setFooter('⬅️ previous | ')
            }
            if (i<rovers.length-1){
                // @ts-ignore
                reaction['➡️']='next'
                msg.setFooter(msg.footer?.text+'➡️ next | ')
            }

            // @ts-ignore
            reaction['📷']=async (menu : DiscordEmbedMenu) => {
                await menu.user.send("test")
            }
            msg.setFooter(msg.footer?.text+'📷 last rover photos')

            const roverManifest : DiscordEmbedMenuPage = {
                name:rover.name,
                content:msg,
                reactions:reaction,
                index:discordEmbedMenu.length-1
            }
            discordEmbedMenu.push(roverManifest)
            i++
        }
        return discordEmbedMenu;
    }

    displayManifest(rover:RoverManifest):MessageEmbed{
        const embed = new MessageEmbed()
        embed.setAuthor("Status" +rover.status[0].toUpperCase()+rover.status.substr(1))
        embed.setTitle(rover.name)
        // @ts-ignore
        embed.setThumbnail(imgRover[rover.name.toLowerCase()].logo)
        // @ts-ignore
        embed.setImage(imgRover[rover.name.toLowerCase()].half)
        embed.addField("Launch",new Date(rover.launch_date).toDateString(),true)
        embed.addField("Landing",new Date(rover.landing_date).toDateString(),true)
        embed.addField("Total photo",rover.total_photos,true)
        embed.addField("Cameras",this.generateCameraString(rover))
        embed.addField("Last photographie",`**In mars sol **: ${rover.max_sol}\n**In earth date** : ${new Date(rover.max_date).toDateString()}`)
        embed.setTimestamp()
        return embed
    }

    generateCameraString(rover:RoverManifest):string{
        let str = ""
        for (const camera of rover.cameras){
            str+=`**${camera.name}** : ${camera.full_name}\n`
        }
        return str
    }
}