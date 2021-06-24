import { config } from 'dotenv';
config({ path: 'test/.env' });

//import "./unit/env.test"
//import "./unit/queryAPOD.test"

import {AgenciesService} from "../src/models/launchAPI"

async function getAgencie() {
    try {
        console.log(await AgenciesService.agenciesList())
    }catch (e) {
        console.error(e)
    }
}

getAgencie()
