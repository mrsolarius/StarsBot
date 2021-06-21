import aopdQuery from "./interfaces/queryAPOD.interface";
import bodyAPOD from "./interfaces/bodyAPOD.interface";
import fetch from "node-fetch";
import HTTPError from "../../utils/HTTPError";

export default class QueryAPOD implements aopdQuery{
    private readonly _api_key: string;
    private _count: number | undefined;
    private _date: string | undefined;
    private _end_date: string | undefined;
    private _start_date: string | undefined;
    private _thumbs: boolean | undefined;

    constructor() {
        if (process.env.NASA_API)
            this._api_key = process.env.NASA_API
        else
            throw new TypeError('NASA_API should not be empty');
    }


    get api_key(): string {
        return this._api_key;
    }

    get count(): number | undefined {
        return this._count;
    }

    set count(value: number | undefined) {
        this._count = value;
    }

    get date(): string | undefined{
        return this._date;
    }

    set date(value: string | undefined) {

        this._date = QueryAPOD.completeDateCheckAndRefactor(value);
    }

    get end_date(): string | undefined{
        return this._end_date;
    }

    set end_date(value: string | undefined) {
        this._end_date = QueryAPOD.completeDateCheckAndRefactor(value);
    }

    get start_date(): string | undefined {
        return this._start_date;
    }

    set start_date(value: string | undefined) {
        this._start_date = QueryAPOD.completeDateCheckAndRefactor(value);
    }

    get thumbs(): boolean | undefined{
        return this._thumbs;
    }

    set thumbs(value: boolean | undefined) {
        this._thumbs = value;
    }

    private static completeDateCheckAndRefactor(value : string|undefined) :string{
        if (value) {
            if (QueryAPOD.isValidDate(value)) {
                return QueryAPOD.formatDate(value)
            } else {
                throw new TypeError(value + " is an incorrect date format")
            }
        }else {
            throw new TypeError("You need to defined your date values")
        }
    }

    private static isValidDate(date :string):boolean{
        const d = Date.parse(date);
        return !isNaN(d)
    }

    private static formatDate(date : string){
        //Add 12 hours to prevent some random bug :thinking:
        const d = new Date(Date.parse(date)+43200000)
        return d.toISOString().substr(0,10)
    }

    private urlParameters() : string{
        return new URLSearchParams(this.convertToArray()).toString()
    }

    private convertToArray() : Array<Array<string>>{
        return  Object.keys(this).map((index) => {
            // @ts-ignore
            if (typeof this[index] !== 'undefined')
                { // @ts-ignore
                    return [index.slice(1),this[index]]
                }
            else
                return[index.slice(1),'']
        });
    }

    public async getAPOD() : Promise<bodyAPOD> {
        const request = await fetch('https://api.nasa.gov/planetary/apod?'+this.urlParameters(),{method:'GET'})
        if (request.status===200)
            return await request.json()
        else {
            const json = await request.json()
            if (json)
                throw new HTTPError(request.status, json.msg)
            else
                throw new HTTPError(request.status,'Error Without Message')
        }
    }

}