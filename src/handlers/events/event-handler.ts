export default interface BotEvent {
    on: string;

    invoke(...args: any[]): Promise<any> | void;
}