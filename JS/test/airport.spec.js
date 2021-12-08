const { expect } = require('chai');
const planesTestGrid = require('../index');
const PassengerPlane = require('../planes/passenger-plane');
const Airport = require('../airport/airport');
const CLASSIFICATION_LEVEL = require('../models/classification-level');

describe('airport-smoke-test.js', () => {

    it('Should check that at least one military transport plane is present', () => {
        expect(new Airport(planesTestGrid).getTransportMilitaryPlanes()).not.empty
    });

    it('Should check passenger plane with requested capacity is present', () => {
        const requestedPassengerPlane = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242)
        const actualPassengerPlaneGrid = new Airport(planesTestGrid).getPassengerPlaneWithMaxPassengersCapacity()
        expect(actualPassengerPlaneGrid).deep.equal(requestedPassengerPlane)
    });

    it('Should check passenger plane with max capacity', () => {
        expect(new Airport(planesTestGrid).getPassengerPlaneWithMaxPassengersCapacity()).not.empty
    })

    it('Should check that at least one militaly bomber is present ', () => {
        expect(new Airport(planesTestGrid).getBomberMilitaryPlanes()).not.empty
    });

    it('Should check that experimental planes has classification level higher than unclassified', () => {
        const experimentalPlanes = new Airport(planesTestGrid).getExperimentalPlanes()
        expect(experimentalPlanes.filter(experimentalPlanes => experimentalPlanes.classificationLevel == CLASSIFICATION_LEVEL.unclassified)).empty
    });
});
