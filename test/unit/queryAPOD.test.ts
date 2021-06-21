import { expect } from 'chai';
import QueryAPOD from "../../src/models/nasaAPOD/queryAPOD";


describe('models/nasaAPOD/queryAPOD', () => {
    const ogEnv = { ...process.env };

    beforeEach(() => {
        process.env = ogEnv;
    });

    it('Not Valid Date, it should be false ', function () {
        expect(QueryAPOD['isValidDate']('this is not a date at all')).equal(false)
    });

    it('Valid Date, it should be true ', function () {
        expect(QueryAPOD['isValidDate']('05/09/1966')).equal(true)
    });

    it('Check the format of date', function () {
        expect(QueryAPOD['formatDate']('1999/12/31 06:00')).equal('1999-12-31')
    });

    it('Should refactor date format', function () {
        expect(QueryAPOD['completeDateCheckAndRefactor']('2021-5-1')).equal('2021-05-01')
    });

    it('Wrong date format, Should throw type error', function () {
        expect(()=>{QueryAPOD['completeDateCheckAndRefactor']('This is not a date at all')}).to.throw(TypeError)
    });

    it('Undefined value, Should throw type error', function () {
        expect(()=>{QueryAPOD['completeDateCheckAndRefactor'](undefined)}).to.throw(TypeError)
    });

    it('NASA_API not defined, should throw', function () {
        process.env.NASA_API = undefined;
        expect(()=>{new QueryAPOD()}).to.throw(TypeError);
    });

    it('NASA_API not defined, should throw', function () {
        process.env.NASA_API = 'defined';
        expect(()=>{new QueryAPOD()}).to.not.throw();
    });

    it('Should convert object to desired array', function () {
        process.env.NASA_API = 'key';
        const APOD = new QueryAPOD()
        APOD.thumbs=true
        APOD.date='1966-05-09'
        const exceptedArray = [['api_key','key'],['count',''],['date','1966-05-09'],['end_date',''],['start_date',''],['thumbs',true]]
        expect(APOD['convertToArray']().toString()).equal(exceptedArray.toString())
    });
});