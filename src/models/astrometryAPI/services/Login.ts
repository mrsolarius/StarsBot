import {SessionKey} from "../models/SessionKey";
import {request} from "../core/request";

export class Login{

    public static async login(): Promise<SessionKey> {
        const res = await request({
            path: 'login',
            method: "POST",
            query: {apikey: process.env.ASTROMETRY_API}
        })
        console.log(await res.text())
        return await res.json()
    }
}