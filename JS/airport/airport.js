const PassengerPlane = require('../planes/passenger-plane');
const MilitaryPlane = require('../planes/military-plane');
const MILITARY_TYPE = require('../models/military-type');
const experimentalPlane = require('../planes/experimental-plane');

class Airport {

    constructor(planes) {
        this.planes = planes
    };

    getPlanes() {
        return this.planes
    };
    
    getPassengerPlanes() {
        return this.planes.filter(plane => {
            return plane instanceof PassengerPlane
        });
    };

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.planes.filter(plane => {
            return plane instanceof PassengerPlane
        });
        return passengerPlanes.sort((a, b) => b.passengersCapacity - a.passengersCapacity)[0]
    };

    getMilitaryPlanes() {
        return this.planes.filter(plane => {
            return plane instanceof MilitaryPlane
        });
    };

    getTransportMilitaryPlanes() {
        return  this.planes.filter(plane => {
            return plane.militaryType === MILITARY_TYPE.transport
        });
    };

    getBomberMilitaryPlanes() {
        return this.planes.filter(plane => {
            return plane.militaryType === MILITARY_TYPE.bomber
        });
    };

    getExperimentalPlanes() {
        return this.planes.filter(plane => {
            return plane instanceof experimentalPlane
        });
    };

    sortByMaxLoadCapacity() {
        return this.planes.sort((a, b) => (a.maxLoadCapacity - b.maxLoadCapacity));
    };
};
module.exports = Airport;