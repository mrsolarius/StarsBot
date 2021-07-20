import { expect } from 'chai';
import {downloadFile, extractFileNameFromUrl, request} from "../../src/models/astrometryAPI/core/request";

describe('utils/astronometry', () => {
    const ogEnv = { ...process.env };

    beforeEach(() => {
        process.env = ogEnv;
    })

    it('downloadFile must return a buffer', async () => {
        const fileSnowFlake = await downloadFile("https://media.discordapp.net/attachments/591934698129850378/867006589072703508/69acd11e-stellina-le-telescope-astronomique-connecte-et-automatique__w800.jpeg")
        const sessionReq = await request({
            method:"POST",
            path:"/login",
            query:{apikey: process.env.ASTROMETRY_API}
        })
        const sessionID = await sessionReq.json()
        console.log(sessionID)
        const finalRes = await request({
            method: "POST",
            path:'/upload',
            query:{publicly_visible: "y", allow_modifications: "d", session: sessionID.session, allow_commercial_use: "d"},
            file:fileSnowFlake
        })
        console.log(await finalRes.json())
        expect(finalRes).does.not.throw;
        expect(fileSnowFlake.stream).instanceOf(Buffer);
    });

    it('should return filename from URL', function () {
        const res = extractFileNameFromUrl("https://media.discordapp.net/attachments/591934698129850378/867006589072703508/69acd11e-stellina-le-telescope-astronomique-connecte-et-automatique__w800.jpeg")
        console.log(res)
        expect(res).equal('69acd11e-stellina-le-telescope-astronomique-connecte-et-automatique__w800.jpeg')
    });
});