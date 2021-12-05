const { MilitaryPlane } = require('../planes/MilitaryPlane');
const { PassengerPlane } = require('../planes/PassengerPlane');
const { MILITARY_TYPE } = require('../constants/militaryType');
const { CLASSIFICATION_LEVEL } = require('../constants/classificationLevel');
const { airport } = require('../index')

const assert = require('chai').assert;

describe('Test Aiport methods', () => {
    it('should have military Planes with transport type', () => {
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        const resultArray = transportMilitaryPlanes.filter(plane => plane.getMilitaryType() === MILITARY_TYPE.TRANSPORT)
        assert.equal(resultArray.length, transportMilitaryPlanes.length);
    });

    it('should check passenger plane with max capacity', () => {
        let planeWithMaxPassengerCapacity = new PassengerPlane({ model: 'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, passengersCapacity: 242 });
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.equal( expectedPlaneWithMaxPassengersCapacity.getPassengersCapacity(), planeWithMaxPassengerCapacity.getPassengersCapacity());
    });


    it('first item of the array returned by getSortedPlanesByMaxLoadCapacity() method should have the biggest load capacity', () => {
        let planesSortedByMaxLoadCapacity = airport.getSortedPlanesByMaxLoadCapacity();
        assert.equal(planesSortedByMaxLoadCapacity[0].getMinLoadCapacity(), 500);
    })

    it('aiport should have at least one BOMBER military plane', () => {
      assert.isTrue(airport.getBomberMilitaryPlanes().length > 0);
    })

    it('should check that experimental planes has classification level higher than unclassified', () => {
        const experimentalPlanes = airport.getExperimentalPlanes();
        const classifiedPlanes = experimentalPlanes.filter(plane => plane.classificationLevel !== CLASSIFICATION_LEVEL.UNCLASSIFIED)
        assert.equal(classifiedPlanes.length, experimentalPlanes.length);
    });
});
