/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiRequestOptions = {
    readonly method: 'GET' | 'POST';
    readonly path: string;
    readonly query?: Record<string, any>;
    readonly file?:fileSnowFlake
}

export type fileSnowFlake={
    stream:Buffer
    fileName:string;
}