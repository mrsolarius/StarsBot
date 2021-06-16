import {EventType} from "./eventType";
import {Launch} from "./launch";

export interface Event{
    id:number,
    url:string,
    name:string,
    type:EventType,
    description:string,
    location:string,
    news_url:string,
    video_url:string,
    feature_image:string,
    date:string,
    launches:Launch,
    expeditions:null,
    spacestations:null,
    program:null
}
