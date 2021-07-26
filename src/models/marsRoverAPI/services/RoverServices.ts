import {request} from "../core/request";
import {Rover} from "../model/Rover";
import {RoverManifest} from "../model/RoverManifest";
import {Photo} from "../model/Photo";

export default class RoverServices {

    static async roverLists(): Promise<Array<Rover>> {
        const result = await request({path: '/rovers'})
        return (await result.json()).rovers
    }

    static async roverManifest(rover: string): Promise<RoverManifest> {
        const result = await request({path: '/rovers/' + rover.toLowerCase()})
        const json = await result.json()
        if (typeof json.errors === "undefined")
            throw new Error(json.errors)
        return json.rover
    }

    static async lastRoverPhotos(rover: string, camera: string | null = null): Promise<Array<Photo>> {
        let result
        if (camera===null)
            result = await request({path: '/rovers/' + rover.toLowerCase() + '/latest_photos'})
        else
            result = await request({path: '/rovers/' + rover.toLowerCase() + '/latest_photos', query: {camera: camera}})

        const json = await result.json()
        console.log(json)
        if (typeof json.errors === "undefined")
            throw new Error(json.errors)
        return json.latest_photos
    }

    static async getRoverPhotos(search: { sol?: number; rover: string; camera?: string , earth_date?:Date}): Promise<Array<Photo>> {
        let query : {
            sol?: number; camera?: string , earth_date?:string
        }
        query = {}
        if(search.sol)
            query = {
                ...query,
                sol:search.sol
            }
        if (search.camera)
            query = {
                ...query,
                camera:search.camera
            }
        if (search.earth_date){
            query = {
                ...query,
                earth_date: `${search.earth_date?.getFullYear()}-${search.earth_date?.getMonth()}-${search.earth_date?.getDate()}`,
            }
        }
        console.log(query)
        const result = await request({
            path: '/rovers/' + search.rover.toLowerCase() + '/photos',
            query: query
        })
        const json = await result.json()
        if (typeof json.errors === "undefined")
            throw new Error(json.errors)
        return json.photos
    }

}