import { expect } from 'chai';
import RoverServices from "../../src/models/marsRoverAPI/services/RoverServices";

describe('model/mars-rover-api', () => {
    const ogEnv = { ...process.env };

    beforeEach(() => {
        process.env = ogEnv;
    })

    it('should get rover list', async function () {
        const data = await RoverServices.roverLists()
        expect(new Date(data[0].launch_date)).is.instanceOf(Date)
        expect(data).is.not.null
    });

    it('should get rover manifest', async function () {
        const data = await RoverServices.roverLists()
        for (const rover of data){
            const roverManifest = RoverServices.roverManifest(rover.name)
            expect(roverManifest).does.not.throw
        }
        expect(data).is.not.null
    });

    it('should throw error while trying to get rover manifest', async function () {
        const roverManifest = await RoverServices.roverManifest("this can't be a rover name at all")
        expect(roverManifest).to.throw
    });

    it('should get last photos of curiosity', async function () {
        const roverManifest = await RoverServices.lastRoverPhotos("Curiosity")
        expect(roverManifest).does.not.throw
    });

    it('should throw error while trying to get last photos of rover', async function () {
        const roverManifest = await RoverServices.lastRoverPhotos("this can't be a rover name at all")
        expect(roverManifest).to.throw
    });

    it('should get photos of rover perseverance on camera EDL_DDCAM on sol 0 ', async function () {
        const roverManifest = await RoverServices.getRoverPhotos({rover:"Perseverance",sol:0,camera:"EDL_DDCAM"})
        expect(roverManifest.length>0).to.be.true
    });

    it('should get 2 photos of rover perseverance on camera EDL_DDCAM on sol 0 ', async function () {
        const roverManifest = await RoverServices.getRoverPhotos({rover:"Perseverance",sol:0,camera:"EDL_DDCAM"})
        expect(roverManifest.length===2).equal(true)
    });

    it('should get 1 photos of rover perseverance on 2021-04-01', async function () {
        const roverManifest = await RoverServices.getRoverPhotos({rover:"Perseverance",earth_date:new Date(2021,4,1)})
        expect(roverManifest.length===1).equal(true)
    });

    it('should throw error while trying to get rover manifest', async function () {
        const roverManifest = await RoverServices.getRoverPhotos({rover:"this can't be a rover name at all",sol:0})
        expect(roverManifest).to.throw
    });

});