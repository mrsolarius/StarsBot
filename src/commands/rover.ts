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
        switch (args[1]){
            case 'help':
                // @todo display help message
                break;
            case 'status':
                if (args.length>=3){
                    // @todo display manifest of selected rover
                }else {
                    // @todo display manifest of all rovers
                }
                break;
            case 'last':
                if (args.length>=3){
                    // @todo display precised rover last images
                }else{
                    // @todo display a prompt message to ask for the rover
                }
                break;
            default:
                await ctx.msg.channel.send(this.displayManifest(await RoverServices.roverManifest(args[1])))
        }
    }

    everyRoversManifest():Array<DiscordEmbedMenuPage>{
        let discordEmbedMenu:Array<DiscordEmbedMenuPage>  = []



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
        /**
        embed.addField("Key date",`Launch: ${new Date(rover.launch_date).toDateString()}\n Landing: ${new Date(rover.landing_date).toDateString()}\n`,true)
        embed.addField("Photo stats",`Total photo: ${rover.total_photos}\nLast photo (sol):${rover.max_sol}\nLast photo (time):${new Date(rover.max_date).toDateString()}\n`,true)
        **/
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