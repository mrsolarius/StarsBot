/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Launcher } from '../models/Launcher';
import type { LauncherDetail } from '../models/LauncherDetail';
import { request as __request } from '../core/request';

export class LauncherService {

    /**
     * API endpoint that allows Launcher instances to be viewed.
     * @param id 
     * @param serialNumber 
     * @param flightProven 
     * @param launcherConfig 
     * @param launcherConfigManufacturer 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns any 
     * @throws ApiError
     */
    public static async launcherList(
id?: number,
serialNumber?: string,
flightProven?: string,
launcherConfig?: string,
launcherConfigManufacturer?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<Launcher>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/launcher/`,
            query: {
                'id': id,
                'serial_number': serialNumber,
                'flight_proven': flightProven,
                'launcher_config': launcherConfig,
                'launcher_config__manufacturer': launcherConfigManufacturer,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Launcher instances to be viewed.
     * @param id A unique integer value identifying this Launch Vehicle.
     * @returns LauncherDetail 
     * @throws ApiError
     */
    public static async launcherRead(
id: number,
): Promise<LauncherDetail> {
        const result = await __request({
            method: 'GET',
            path: `/launcher/${id}/`,
        });
        return result.body;
    }

}