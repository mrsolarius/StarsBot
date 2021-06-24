import { expect } from 'chai';
import { validateEnv } from '../../src/utils/env';

describe('utils/env', () => {
    const ogEnv = { ...process.env };

    beforeEach(() => {
        process.env = ogEnv;
    })

    it('CLIENT_ID is not defined, error thrown', async () => {
        process.env.CLIENT_ID = undefined;

        expect(validateEnv).to.throw();
    });

    it('CLIENT_ID is not 18 digits, error thrown', async () => {
        process.env.CLIENT_ID = 'testing_123';

        expect(validateEnv).to.throw();
    });

    it('CLIENT_ID is 18 digits, accepted', async () => {
        process.env.CLIENT_ID = '012345678901234567';

        expect(validateEnv).to.not.throw();
    });

    it('BOT_TOKEN is not defined, error throw ', function () {
        process.env.BOT_TOKEN = undefined;

        expect(validateEnv).to.throw();
    });

    it('BOT_TOKEN is defined as string, accepted', function () {
        process.env.BOT_TOKEN = 'token'

        expect(validateEnv).to.not.throw();
    });

    it('PREFIX is not defined, error throw ', function () {
        process.env.PREFIX=undefined

        expect(validateEnv).to.throw();
    });

    it('PREFIX is defined as string, accepted', function () {
        process.env.PREFIX='!'

        expect(validateEnv).to.not.throw();
    });

    it('NASA_API is not defined, error throw ', function () {
        process.env.NASA_API=undefined

        expect(validateEnv).to.throw();
    });

    it('PREFIX is defined as string, accepted', function () {
        process.env.NASA_API='this is un actual nasa api key'

        expect(validateEnv).to.not.throw();
    });
});