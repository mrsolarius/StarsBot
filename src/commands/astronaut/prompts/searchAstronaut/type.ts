import {AstronautNormal} from "../../../../models/launchAPI";


export type SearchAstronautData = {
    astronautsFound: Array<AstronautNormal>;
    selectedNumber: number;
}