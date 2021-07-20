import {config} from "dotenv"

config({path: ".env"})

const env = new Map<string, (value: string) => any>();

env.set('BOT_TOKEN', ( value :string) => {
    if (!value)
        throw new TypeError('Token should not be empty');
});

env.set('CLIENT_ID', (value: string) => {
    if (!value)
        throw new TypeError('Client ID should not be empty');

    const pattern = /\d{18}/;
    if (!pattern.test(value))
        throw new TypeError('Client ID does not match snowflake ID format');
});

env.set('PREFIX',(value :string) =>{
    if (!value)
        throw new TypeError('Prefix should not be empty');
});

env.set('NASA_API',(value :string) =>{
    if (!value)
        throw new TypeError('NASA_API should not be empty');
});

export function validateEnv() {
    for (const key in process.env) {
        if (env.has(key)) {
            try {
                // @ts-ignore
                env.get(key)(process.env[key]);
            } catch (error) {
                console.log('\x1b[31m%s\x1b[0m', `${key} is not setup correctly.`);
                throw error;
            }
        }
    }
}