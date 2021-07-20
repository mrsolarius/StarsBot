import fetch, {RequestInit, Response} from "node-fetch";
import FormData from "form-data";
import {ApiRequestOptions, fileSnowFlake} from "./ApiRequestOptions";

const API_PATH = "http://nova.astrometry.net/api/"

export function extractFileNameFromUrl(url: string): string {
    const regex = /([^\/]+)\.\w+($)/gm;
    const res = url.match(regex)
    if (res !== null)
        return res[0]
    else
        throw new Error("this url have no files")
}

export async function downloadFile(url: string): Promise<fileSnowFlake> {
    const response = await fetch(url)
    return {
        fileName: extractFileNameFromUrl(url),
        stream: await response.buffer()
    }
}

export async function request(options: ApiRequestOptions): Promise<Response> {
    let request: RequestInit = {
        method: options.method,
    }
    const formData = new FormData()
    if (options.method === "POST") {
        if (options.file !== null && typeof options.file !== "undefined") {
            //if they have file need to append file into another field with somme header specification to work well
            formData.append('file', options.file?.stream, {
                filename: options.file?.fileName,
                header: {"Content-Type": "application/octet-stream", "MIME-Version": 1.0}
            })
        }
        request.body = formData
    }
    if (options.query !== null && typeof options.query !== "undefined") {
        formData.append('request-json', JSON.stringify(options.query))
    }
    return await fetch(API_PATH + options.path, request)
}