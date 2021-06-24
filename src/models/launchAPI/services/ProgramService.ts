/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Program } from '../models/Program';
import { request as __request } from '../core/request';

export class ProgramService {

    /**
     * API endpoint that returns Program objects.
     * @returns any 
     * @throws ApiError
     */
    public static async programList({
search,
ordering,
limit,
offset,
}: {
/** A search term. **/
search?: string,
/** Which field to use when ordering the results. **/
ordering?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Program>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/program/`,
            query: {
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that returns Program objects.
     * @returns Program 
     * @throws ApiError
     */
    public static async programRead({
id,
}: {
id: string,
}): Promise<Program> {
        const result = await __request({
            method: 'GET',
            path: `/program/${id}/`,
        });
        return result.body;
    }

}