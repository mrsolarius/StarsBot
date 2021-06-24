/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Events } from '../models/Events';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * API endpoint that allows all Events to be viewed.
     * @param slug 
     * @param id 
     * @param type 
     * @param program 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async eventList(
slug?: string,
id?: number,
type?: string,
program?: string,
search?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Events>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/event/`,
            query: {
                'slug': slug,
                'id': id,
                'type': type,
                'program': program,
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows past Events to be viewed.
     * @param type 
     * @param program 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async eventPreviousList(
type?: string,
program?: string,
search?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Events>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/event/previous/`,
            query: {
                'type': type,
                'program': program,
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows past Events to be viewed.
     * @param id 
     * @returns Events 
     * @throws ApiError
     */
    public static async eventPreviousRead(
id: string,
): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/previous/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows future Events to be viewed.
     * @param type 
     * @param program 
     * @param search A search term.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async eventUpcomingList(
type?: string,
program?: string,
search?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Events>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/event/upcoming/`,
            query: {
                'type': type,
                'program': program,
                'search': search,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows future Events to be viewed.
     * @param id 
     * @returns Events 
     * @throws ApiError
     */
    public static async eventUpcomingRead(
id: string,
): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/upcoming/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows all Events to be viewed.
     * @param id A unique integer value identifying this Event.
     * @returns Events 
     * @throws ApiError
     */
    public static async eventRead(
id: number,
): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/${id}/`,
        });
        return result.body;
    }

}