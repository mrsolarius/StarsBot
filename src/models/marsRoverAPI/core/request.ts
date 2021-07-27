import fetch, { Response } from "node-fetch";
import {ApiRequestOptions} from "./ApiRequestOptions";

const API_PATH = "https://api.nasa.gov/mars-photos/api/v1/"

export async function request(options: ApiRequestOptions): Promise<Response> {
    const url = new URL(API_PATH + options.path)
    const params:Record<string, any> = {
        ...options.query,
        api_key:process.env.NASA_API
    }
    url.search = new URLSearchParams(params).toString()
    return await fetch(url)
}