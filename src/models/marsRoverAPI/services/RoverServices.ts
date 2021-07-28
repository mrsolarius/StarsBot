import {request} from "../core/request";
import {RoverManifest} from "../model/RoverManifest";
import {Photo} from "../model/Photo";

export default class RoverServices {

    static async roverLists(): Promise<Array<RoverManifest>> {
        const result = await request({path: '/rovers'})
        return (await result.json()).rovers
    }

    static async roverManifest(rover: string): Promise<RoverManifest> {
        const result = await request({path: '/rovers/' + rover.toLowerCase()})
        const json = await result.json()
        if (typeof json.errors !== "undefined")
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
        if (typeof json.errors !== "undefined")
            throw new Error(json.errors)
        return json.latest_photos
    }

    static async getRoverPhotos(search: { sol?: number; rover: string; camera?: string , earth_date?:Date}): Promise<Array<Photo>> {
        let query : {
            sol?: number; camera?: string , earth_date?:string
        }
        query = {}
        if(typeof search.sol !== "undefined")
            query = {
                ...query,
                sol:search.sol
            }
        if (typeof search.camera !== "undefined")
            query = {
                ...query,
                camera:search.camera
            }
        if (typeof search.earth_date !== "undefined"){
            query = {
                ...query,
                earth_date: `${search.earth_date?.getFullYear()}-${search.earth_date?.getMonth()}-${search.earth_date?.getDate()}`,
            }
        }
        const result = await request({
            path: '/rovers/' + search.rover.toLowerCase() + '/photos',
            query: query
        })
        const json = await result.json()
        if (typeof json.errors !== "undefined")
            throw new Error(json.errors)
        return json.photos
    }

}