/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgencyType } from '../models/AgencyType';
import type { AstronautRole } from '../models/AstronautRole';
import type { AstronautStatus } from '../models/AstronautStatus';
import type { AstronautType } from '../models/AstronautType';
import type { DockingLocation } from '../models/DockingLocation';
import type { EventType } from '../models/EventType';
import type { FirstStageType } from '../models/FirstStageType';
import type { LandingLocation } from '../models/LandingLocation';
import type { LauncherConfig } from '../models/LauncherConfig';
import type { LauncherConfigDetail } from '../models/LauncherConfigDetail';
import type { LaunchStatus } from '../models/LaunchStatus';
import type { MissionType } from '../models/MissionType';
import type { NoticeType } from '../models/NoticeType';
import type { Orbit } from '../models/Orbit';
import type { RoadClosureStatus } from '../models/RoadClosureStatus';
import type { SpacecraftConfiguration } from '../models/SpacecraftConfiguration';
import type { SpacecraftConfigurationDetail } from '../models/SpacecraftConfigurationDetail';
import type { SpacecraftStatus } from '../models/SpacecraftStatus';
import type { SpaceStationStatus } from '../models/SpaceStationStatus';
import { request as __request } from '../core/request';

export class ConfigService {

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configAgencytypeList({
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
results: Array<AgencyType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/agencytype/`,
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
     * @returns AgencyType 
     * @throws ApiError
     */
    public static async configAgencytypeRead({
id,
}: {
/** A unique value identifying this agency type. **/
id: number,
}): Promise<AgencyType> {
        const result = await __request({
            method: 'GET',
            path: `/config/agencytype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configAstronautroleList({
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
results: Array<AstronautRole>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronautrole/`,
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
     * @returns AstronautRole 
     * @throws ApiError
     */
    public static async configAstronautroleRead({
id,
}: {
/** A unique integer value identifying this Astronaut Role. **/
id: number,
}): Promise<AstronautRole> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronautrole/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configAstronautstatusList({
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
results: Array<AstronautStatus>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronautstatus/`,
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
     * @returns AstronautStatus 
     * @throws ApiError
     */
    public static async configAstronautstatusRead({
id,
}: {
/** A unique integer value identifying this Astronaut Status. **/
id: number,
}): Promise<AstronautStatus> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronautstatus/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configAstronauttypeList({
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
results: Array<AstronautType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronauttype/`,
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
     * @returns AstronautType 
     * @throws ApiError
     */
    public static async configAstronauttypeRead({
id,
}: {
/** A unique integer value identifying this Astronaut Type. **/
id: number,
}): Promise<AstronautType> {
        const result = await __request({
            method: 'GET',
            path: `/config/astronauttype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configDockinglocationList({
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
results: Array<DockingLocation>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/dockinglocation/`,
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
     * @returns DockingLocation 
     * @throws ApiError
     */
    public static async configDockinglocationRead({
id,
}: {
/** A unique integer value identifying this Docking Location. **/
id: number,
}): Promise<DockingLocation> {
        const result = await __request({
            method: 'GET',
            path: `/config/dockinglocation/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configEventtypeList({
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
results: Array<EventType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/eventtype/`,
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
     * @returns EventType 
     * @throws ApiError
     */
    public static async configEventtypeRead({
id,
}: {
/** A unique value identifying this event type. **/
id: number,
}): Promise<EventType> {
        const result = await __request({
            method: 'GET',
            path: `/config/eventtype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configFirststagetypeList({
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
results: Array<FirstStageType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/firststagetype/`,
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
     * @returns FirstStageType 
     * @throws ApiError
     */
    public static async configFirststagetypeRead({
id,
}: {
/** A unique value identifying this first stage type. **/
id: number,
}): Promise<FirstStageType> {
        const result = await __request({
            method: 'GET',
            path: `/config/firststagetype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configLandinglocationList({
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
results: Array<LandingLocation>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/landinglocation/`,
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
     * @returns LandingLocation 
     * @throws ApiError
     */
    public static async configLandinglocationRead({
id,
}: {
/** A unique integer value identifying this landing location. **/
id: number,
}): Promise<LandingLocation> {
        const result = await __request({
            method: 'GET',
            path: `/config/landinglocation/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows Launcher Configurations to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async configLauncherList({
family,
name,
manufacturer,
fullName,
active,
reusable,
program,
search,
ordering,
limit,
offset,
}: {
family?: string,
name?: string,
manufacturer?: string,
fullName?: string,
active?: string,
reusable?: string,
program?: string,
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
results: Array<LauncherConfig>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/launcher/`,
            query: {
                'family': family,
                'name': name,
                'manufacturer': manufacturer,
                'full_name': fullName,
                'active': active,
                'reusable': reusable,
                'program': program,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Launcher Configurations to be viewed.
     * @returns LauncherConfigDetail 
     * @throws ApiError
     */
    public static async configLauncherRead({
id,
}: {
/** A unique integer value identifying this Launcher Configuration. **/
id: number,
}): Promise<LauncherConfigDetail> {
        const result = await __request({
            method: 'GET',
            path: `/config/launcher/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configLaunchstatusList({
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
results: Array<LaunchStatus>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/launchstatus/`,
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
     * @returns LaunchStatus 
     * @throws ApiError
     */
    public static async configLaunchstatusRead({
id,
}: {
/** A unique value identifying this Launch Status. **/
id: number,
}): Promise<LaunchStatus> {
        const result = await __request({
            method: 'GET',
            path: `/config/launchstatus/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configMissiontypeList({
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
results: Array<MissionType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/missiontype/`,
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
     * @returns MissionType 
     * @throws ApiError
     */
    public static async configMissiontypeRead({
id,
}: {
/** A unique value identifying this mission type. **/
id: number,
}): Promise<MissionType> {
        const result = await __request({
            method: 'GET',
            path: `/config/missiontype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configNoticetypeList({
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
results: Array<NoticeType>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/noticetype/`,
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
     * @returns NoticeType 
     * @throws ApiError
     */
    public static async configNoticetypeRead({
id,
}: {
/** A unique integer value identifying this Notices Type. **/
id: number,
}): Promise<NoticeType> {
        const result = await __request({
            method: 'GET',
            path: `/config/noticetype/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configOrbitList({
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
results: Array<Orbit>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/orbit/`,
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
     * @returns Orbit 
     * @throws ApiError
     */
    public static async configOrbitRead({
id,
}: {
/** A unique integer value identifying this Orbit. **/
id: number,
}): Promise<Orbit> {
        const result = await __request({
            method: 'GET',
            path: `/config/orbit/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configRoadclosurestatusList({
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
results: Array<RoadClosureStatus>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/roadclosurestatus/`,
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
     * @returns RoadClosureStatus 
     * @throws ApiError
     */
    public static async configRoadclosurestatusRead({
id,
}: {
/** A unique integer value identifying this Road Closure Type. **/
id: number,
}): Promise<RoadClosureStatus> {
        const result = await __request({
            method: 'GET',
            path: `/config/roadclosurestatus/${id}/`,
        });
        return result.body;
    }

    /**
     * API endpoint that allows Spacecraft Configs to be viewed.
     * @returns any 
     * @throws ApiError
     */
    public static async configSpacecraftList({
name,
manufacturer,
inUse,
humanRated,
search,
ordering,
limit,
offset,
}: {
name?: string,
manufacturer?: string,
inUse?: string,
humanRated?: string,
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
results: Array<SpacecraftConfiguration>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacecraft/`,
            query: {
                'name': name,
                'manufacturer': manufacturer,
                'in_use': inUse,
                'human_rated': humanRated,
                'search': search,
                'ordering': ordering,
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * API endpoint that allows Spacecraft Configs to be viewed.
     * @returns SpacecraftConfigurationDetail 
     * @throws ApiError
     */
    public static async configSpacecraftRead({
id,
}: {
/** A unique integer value identifying this Spacecraft Configuration. **/
id: number,
}): Promise<SpacecraftConfigurationDetail> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacecraft/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configSpacecraftstatusList({
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
results: Array<SpacecraftStatus>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacecraftstatus/`,
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
     * @returns SpacecraftStatus 
     * @throws ApiError
     */
    public static async configSpacecraftstatusRead({
id,
}: {
/** A unique integer value identifying this Spacecraft Status. **/
id: number,
}): Promise<SpacecraftStatus> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacecraftstatus/${id}/`,
        });
        return result.body;
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public static async configSpacestationstatusList({
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
results: Array<SpaceStationStatus>,
}> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacestationstatus/`,
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
     * @returns SpaceStationStatus 
     * @throws ApiError
     */
    public static async configSpacestationstatusRead({
id,
}: {
/** A unique integer value identifying this Space Station Status. **/
id: number,
}): Promise<SpaceStationStatus> {
        const result = await __request({
            method: 'GET',
            path: `/config/spacestationstatus/${id}/`,
        });
        return result.body;
    }

}