/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LaunchDetailed } from '../models/LaunchDetailed';
import type { LaunchSerializerCommon } from '../models/LaunchSerializerCommon';
import { request as __request } from '../core/request';

export class LaunchService {

    /**
     * API endpoint that returns all Launch objects or a single launch.
     * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
 *
 * GET
 * Return a list of all Launch objects.
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 *
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
 *
 * EXAMPLE - ?search=SpaceX
     * @param name 
     * @param slug 
     * @param rocketConfigurationName 
     * @param rocketConfigurationId 
     * @param status 
     * @param rocketSpacecraftflightSpacecraftName 
     * @param rocketSpacecraftflightSpacecraftNameIcontains 
     * @param rocketSpacecraftflightSpacecraftId 
     * @param rocketConfigurationManufacturerName 
     * @param rocketConfigurationManufacturerNameIcontains 
     * @param rocketConfigurationFullName 
     * @param rocketConfigurationFullNameIcontains 
     * @param missionOrbitName 
     * @param missionOrbitNameIcontains 
     * @param netGt 
     * @param netLt 
     * @param netGte 
     * @param netLte 
     * @param windowStartGt 
     * @param windowStartLt 
     * @param windowStartGte 
     * @param windowStartLte 
     * @param windowEndGt 
     * @param windowEndLt 
     * @param windowEndGte 
     * @param windowEndLte 
     * @param lastUpdatedGte 
     * @param lastUpdatedLte 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param locationIds Filter by a comma-separated list of location ID's.
     * @param lspIds Filter by a comma-separated list of launch service providers ID's.
     * @param isCrewed Filter by launches with crew assigned.
     * @param includeSuborbital Include sub-orbital launches.
     * @param serialNumber Filter by a SpaceX First Stage core serial number. (Example: B1051)
     * @param lspName Filter by a Launch Service Provider name.
     * @param lspId Filter by a Launch Service Provider name.
     * @param launcherConfigId Filter by a Launcher Config ID.
     * @param spacecraftConfigIds Filter by a comma-separated list of spacecraft config ID's.
     * @param related Include related agencies launches. Useful for historical launches from companies that have had mergers.
     * @returns any 
     * @throws ApiError
     */
    public static async launchList(
name?: string,
slug?: string,
rocketConfigurationName?: string,
rocketConfigurationId?: number,
status?: string,
rocketSpacecraftflightSpacecraftName?: string,
rocketSpacecraftflightSpacecraftNameIcontains?: string,
rocketSpacecraftflightSpacecraftId?: number,
rocketConfigurationManufacturerName?: string,
rocketConfigurationManufacturerNameIcontains?: string,
rocketConfigurationFullName?: string,
rocketConfigurationFullNameIcontains?: string,
missionOrbitName?: string,
missionOrbitNameIcontains?: string,
netGt?: string,
netLt?: string,
netGte?: string,
netLte?: string,
windowStartGt?: string,
windowStartLt?: string,
windowStartGte?: string,
windowStartLte?: string,
windowEndGt?: string,
windowEndLt?: string,
windowEndGte?: string,
windowEndLte?: string,
lastUpdatedGte?: string,
lastUpdatedLte?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
locationIds?: Array<number>,
lspIds?: Array<number>,
isCrewed: boolean = false,
includeSuborbital: boolean = true,
serialNumber?: string,
lspName?: string,
lspId?: number,
launcherConfigId?: number,
spacecraftConfigIds?: Array<number>,
related: boolean = false,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<LaunchSerializerCommon>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/launch/`,
            query: {
                'name': name,
                'slug': slug,
                'rocket__configuration__name': rocketConfigurationName,
                'rocket__configuration__id': rocketConfigurationId,
                'status': status,
                'rocket__spacecraftflight__spacecraft__name': rocketSpacecraftflightSpacecraftName,
                'rocket__spacecraftflight__spacecraft__name__icontains': rocketSpacecraftflightSpacecraftNameIcontains,
                'rocket__spacecraftflight__spacecraft__id': rocketSpacecraftflightSpacecraftId,
                'rocket__configuration__manufacturer__name': rocketConfigurationManufacturerName,
                'rocket__configuration__manufacturer__name__icontains': rocketConfigurationManufacturerNameIcontains,
                'rocket__configuration__full_name': rocketConfigurationFullName,
                'rocket__configuration__full_name__icontains': rocketConfigurationFullNameIcontains,
                'mission__orbit__name': missionOrbitName,
                'mission__orbit__name__icontains': missionOrbitNameIcontains,
                'net__gt': netGt,
                'net__lt': netLt,
                'net__gte': netGte,
                'net__lte': netLte,
                'window_start__gt': windowStartGt,
                'window_start__lt': windowStartLt,
                'window_start__gte': windowStartGte,
                'window_start__lte': windowStartLte,
                'window_end__gt': windowEndGt,
                'window_end__lt': windowEndLt,
                'window_end__gte': windowEndGte,
                'window_end__lte': windowEndLte,
                'last_updated__gte': lastUpdatedGte,
                'last_updated__lte': lastUpdatedLte,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
                'location__ids': locationIds,
                'lsp__ids': lspIds,
                'is_crewed': isCrewed,
                'include_suborbital': includeSuborbital,
                'serial_number': serialNumber,
                'lsp__name': lspName,
                'lsp__id': lspId,
                'launcher_config__id': launcherConfigId,
                'spacecraft_config_ids': spacecraftConfigIds,
                'related': related,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that returns previous Launch objects.
     * GET
 * Return a list of previous Launches
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency and mission name.
 * EXAMPLE - ?search=SpaceX
     * @param name 
     * @param slug 
     * @param rocketConfigurationName 
     * @param rocketConfigurationId 
     * @param status 
     * @param rocketSpacecraftflightSpacecraftName 
     * @param rocketSpacecraftflightSpacecraftNameIcontains 
     * @param rocketSpacecraftflightSpacecraftId 
     * @param rocketConfigurationManufacturerName 
     * @param rocketConfigurationManufacturerNameIcontains 
     * @param rocketConfigurationFullName 
     * @param rocketConfigurationFullNameIcontains 
     * @param missionOrbitName 
     * @param missionOrbitNameIcontains 
     * @param program 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param locationIds Filter by a comma-separated list of location ID's.
     * @param lspIds Filter by a comma-separated list of launch service providers ID's.
     * @param isCrewed Filter by launches with crew assigned.
     * @param includeSuborbital Include sub-orbital launches.
     * @param serialNumber Filter by a SpaceX First Stage core serial number. (Example: B1051)
     * @param lspName Filter by a Launch Service Provider name.
     * @param lspId Filter by a Launch Service Provider name.
     * @param launcherConfigId Filter by a Launcher Config ID.
     * @param spacecraftConfigIds Filter by a comma-separated list of spacecraft config ID's.
     * @param related Include related agencies launches. Useful for historical launches from companies that have had mergers.
     * @returns any 
     * @throws ApiError
     */
    public static async launchPreviousList(
name?: string,
slug?: string,
rocketConfigurationName?: string,
rocketConfigurationId?: number,
status?: string,
rocketSpacecraftflightSpacecraftName?: string,
rocketSpacecraftflightSpacecraftNameIcontains?: string,
rocketSpacecraftflightSpacecraftId?: number,
rocketConfigurationManufacturerName?: string,
rocketConfigurationManufacturerNameIcontains?: string,
rocketConfigurationFullName?: string,
rocketConfigurationFullNameIcontains?: string,
missionOrbitName?: string,
missionOrbitNameIcontains?: string,
program?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
locationIds?: Array<number>,
lspIds?: Array<number>,
isCrewed: boolean = false,
includeSuborbital: boolean = true,
serialNumber?: string,
lspName?: string,
lspId?: number,
launcherConfigId?: number,
spacecraftConfigIds?: Array<number>,
related: boolean = false,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<LaunchSerializerCommon>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/launch/previous/`,
            query: {
                'name': name,
                'slug': slug,
                'rocket__configuration__name': rocketConfigurationName,
                'rocket__configuration__id': rocketConfigurationId,
                'status': status,
                'rocket__spacecraftflight__spacecraft__name': rocketSpacecraftflightSpacecraftName,
                'rocket__spacecraftflight__spacecraft__name__icontains': rocketSpacecraftflightSpacecraftNameIcontains,
                'rocket__spacecraftflight__spacecraft__id': rocketSpacecraftflightSpacecraftId,
                'rocket__configuration__manufacturer__name': rocketConfigurationManufacturerName,
                'rocket__configuration__manufacturer__name__icontains': rocketConfigurationManufacturerNameIcontains,
                'rocket__configuration__full_name': rocketConfigurationFullName,
                'rocket__configuration__full_name__icontains': rocketConfigurationFullNameIcontains,
                'mission__orbit__name': missionOrbitName,
                'mission__orbit__name__icontains': missionOrbitNameIcontains,
                'program': program,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
                'location__ids': locationIds,
                'lsp__ids': lspIds,
                'is_crewed': isCrewed,
                'include_suborbital': includeSuborbital,
                'serial_number': serialNumber,
                'lsp__name': lspName,
                'lsp__id': lspId,
                'launcher_config__id': launcherConfigId,
                'spacecraft_config_ids': spacecraftConfigIds,
                'related': related,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that returns previous Launch objects.
     * GET
 * Return a list of previous Launches
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency and mission name.
 * EXAMPLE - ?search=SpaceX
     * @param id 
     * @returns LaunchDetailed 
     * @throws ApiError
     */
    public static async launchPreviousRead(
id: string,
): Promise<LaunchDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/launch/previous/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.
     * GET
 * Return a list of future Launches
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 *
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency and mission name.
 * EXAMPLE - ?search=SpaceX
     * @param name 
     * @param slug 
     * @param rocketConfigurationName 
     * @param rocketConfigurationId 
     * @param status 
     * @param rocketSpacecraftflightSpacecraftName 
     * @param rocketSpacecraftflightSpacecraftNameIcontains 
     * @param rocketSpacecraftflightSpacecraftId 
     * @param rocketConfigurationManufacturerName 
     * @param rocketConfigurationManufacturerNameIcontains 
     * @param rocketConfigurationFullName 
     * @param rocketConfigurationFullNameIcontains 
     * @param missionOrbitName 
     * @param missionOrbitNameIcontains 
     * @param program 
     * @param search A search term.
     * @param ordering Which field to use when ordering the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param locationIds Filter by a comma-separated list of location ID's.
     * @param lspIds Filter by a comma-separated list of launch service providers ID's.
     * @param isCrewed Filter by launches with crew assigned.
     * @param includeSuborbital Include sub-orbital launches.
     * @param serialNumber Filter by a SpaceX First Stage core serial number. (Example: B1051)
     * @param lspName Filter by a Launch Service Provider name.
     * @param lspId Filter by a Launch Service Provider name.
     * @param launcherConfigId Filter by a Launcher Config ID.
     * @param spacecraftConfigIds Filter by a comma-separated list of spacecraft config ID's.
     * @param related Include related agencies launches. Useful for historical launches from companies that have had mergers.
     * @param hideRecentPrevious Hide launches in previous 24 hours from response.
     * @returns any 
     * @throws ApiError
     */
    public static async launchUpcomingList(
name?: string,
slug?: string,
rocketConfigurationName?: string,
rocketConfigurationId?: number,
status?: string,
rocketSpacecraftflightSpacecraftName?: string,
rocketSpacecraftflightSpacecraftNameIcontains?: string,
rocketSpacecraftflightSpacecraftId?: number,
rocketConfigurationManufacturerName?: string,
rocketConfigurationManufacturerNameIcontains?: string,
rocketConfigurationFullName?: string,
rocketConfigurationFullNameIcontains?: string,
missionOrbitName?: string,
missionOrbitNameIcontains?: string,
program?: string,
search?: string,
ordering?: string,
limit?: number,
offset?: number,
locationIds?: Array<number>,
lspIds?: Array<number>,
isCrewed: boolean = false,
includeSuborbital: boolean = true,
serialNumber?: string,
lspName?: string,
lspId?: number,
launcherConfigId?: number,
spacecraftConfigIds?: Array<number>,
related: boolean = false,
hideRecentPrevious: boolean = false,
): Promise<{
count: number,
next?: string | null,
previous?: string | null,
results: Array<LaunchSerializerCommon>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/launch/upcoming/`,
            query: {
                'name': name,
                'slug': slug,
                'rocket__configuration__name': rocketConfigurationName,
                'rocket__configuration__id': rocketConfigurationId,
                'status': status,
                'rocket__spacecraftflight__spacecraft__name': rocketSpacecraftflightSpacecraftName,
                'rocket__spacecraftflight__spacecraft__name__icontains': rocketSpacecraftflightSpacecraftNameIcontains,
                'rocket__spacecraftflight__spacecraft__id': rocketSpacecraftflightSpacecraftId,
                'rocket__configuration__manufacturer__name': rocketConfigurationManufacturerName,
                'rocket__configuration__manufacturer__name__icontains': rocketConfigurationManufacturerNameIcontains,
                'rocket__configuration__full_name': rocketConfigurationFullName,
                'rocket__configuration__full_name__icontains': rocketConfigurationFullNameIcontains,
                'mission__orbit__name': missionOrbitName,
                'mission__orbit__name__icontains': missionOrbitNameIcontains,
                'program': program,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
                'location__ids': locationIds,
                'lsp__ids': lspIds,
                'is_crewed': isCrewed,
                'include_suborbital': includeSuborbital,
                'serial_number': serialNumber,
                'lsp__name': lspName,
                'lsp__id': lspId,
                'launcher_config__id': launcherConfigId,
                'spacecraft_config_ids': spacecraftConfigIds,
                'related': related,
                'hide_recent_previous': hideRecentPrevious,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that returns future Launch objects and launches from the last twenty four hours.
     * GET
 * Return a list of future Launches
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 *
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency and mission name.
 * EXAMPLE - ?search=SpaceX
     * @param id 
     * @returns LaunchDetailed 
     * @throws ApiError
     */
    public static async launchUpcomingRead(
id: string,
): Promise<LaunchDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/launch/upcoming/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that returns all Launch objects or a single launch.
     * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
 *
 * GET
 * Return a list of all Launch objects.
 *
 * FILTERS
 * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
 * 'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
 * 'related', 'location__ids', 'lsp__ids'
 *
 * MODE
 * 'normal', 'list', 'detailed'
 *
 * EXAMPLE ?mode=list
 *
 * SEARCH
 * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
 *
 * EXAMPLE - ?search=SpaceX
     * @param id 
     * @returns LaunchDetailed 
     * @throws ApiError
     */
    public static async launchRead(
id: string,
): Promise<LaunchDetailed> {
        const result = await __request({
            method: 'GET',
            path: `/launch/${id}/`,
        });
        return result.body;
    }

}