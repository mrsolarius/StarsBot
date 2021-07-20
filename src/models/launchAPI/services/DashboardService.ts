/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class DashboardService {

    /**
     * Return a dashboard of SpaceX operations for Starship development.
     * @returns any 
     * @throws ApiError
     */
    public static async dashboardStarshipList(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/dashboard/starship/`,
        });
        return result.body;
    }

}