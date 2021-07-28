import {HMPAISRNStruct} from "./model/HMPAISRNStruct";
import fetch from "node-fetch";
import * as countryRaw from "./model/CountryEmoji.json"
import {Emoji} from "./model/Emoji";

export async function getHowManyPeopleAreInSpaceRightNow(): Promise<HMPAISRNStruct> {
    const requestToHowManyPeopleAreInSpaceRightNowThisSiteHavePrettyLongUrlSoIMakePrettyLongVar = await fetch("https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json")
    return await requestToHowManyPeopleAreInSpaceRightNowThisSiteHavePrettyLongUrlSoIMakePrettyLongVar.json()
}

export function getEmojiByCountryName(name:string):string{
    const country : Array<Emoji> = countryRaw
    for (const key in country){
        if (!isNaN(Number(key))) {
            if (country[key].name.toLowerCase() === name.toLowerCase()) {
                return <string>country[key].emoji
            }
            if (country[key].code.toLowerCase() === name.toLowerCase()){
                return <string>country[key].emoji
            }
        }
    }
    for (const key in country){
        if (!isNaN(Number(key))) {
            if (name.toLowerCase().startsWith(country[key].code.toLowerCase())){
                return <string>country[key].emoji
            }
        }
    }
    return ""
}