export default class HTTPError extends Error{

    public readonly code;
    public readonly message;

    constructor(code:number,message:string) {
        super(code+' '+message);
        this.code = code;
        this.message = message;
    }
}