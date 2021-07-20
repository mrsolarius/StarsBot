/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Events } from '../models/Events';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * API endpoint that allows all Events to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async eventList({
slug,
id,
type,
program,
search,
limit,
offset,
}: {
slug?: string,
id?: number,
type?: string,
program?: string,
/** A search term. **/
search?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
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
     * @returns any 
     * @throws ApiError
     */
    public static async eventPreviousList({
type,
program,
search,
limit,
offset,
}: {
type?: string,
program?: string,
/** A search term. **/
search?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
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
     * @returns Events 
     * @throws ApiError
     */
    public static async eventPreviousRead({
id,
}: {
id: string,
}): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/previous/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows future Events to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async eventUpcomingList({
type,
program,
search,
limit,
offset,
}: {
type?: string,
program?: string,
/** A search term. **/
search?: string,
/** Number of results to return per page. **/
limit?: number,
/** The initial index from which to return the results. **/
offset?: number,
}): Promise<{
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
     * @returns Events 
     * @throws ApiError
     */
    public static async eventUpcomingRead({
id,
}: {
id: string,
}): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/upcoming/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows all Events to be viewed.
     * @returns Events 
     * @throws ApiError
     */
    public static async eventRead({
id,
}: {
/** A unique integer value identifying this Event. **/
id: number,
}): Promise<Events> {
        const result = await __request({
            method: 'GET',
            path: `/event/${id}/`,
        });
        return result.body;
    }

}