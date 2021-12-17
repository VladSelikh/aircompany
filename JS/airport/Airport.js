const { PassengerPlane } = require("../planes/PassengerPlane");
const { MilitaryPlane } = require("../planes/MilitaryPlane");
const { MILITARY_TYPE } = require("../models/MilitaryType");
const { ExperimentalPlane } = require("../planes/ExperimentalPlane");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => {
      return plane instanceof PassengerPlane;
    });
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.planes.filter((plane) => {
      return plane instanceof PassengerPlane;
    });
    return passengerPlanes.sort((a, b) => b.passengersCapacity - a.passengersCapacity)[0];
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => {
      return plane instanceof MilitaryPlane;
    });
  }

  getTransportMilitaryPlanes() {
    return this.planes.filter((plane) => {
      return plane.militaryType === MILITARY_TYPE.TRANSPORT;
    });
  }

  getBomberMilitaryPlanes() {
    return this.planes.filter((plane) => {
      return plane.militaryType === MILITARY_TYPE.BOMBER;
    });
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => {
      return plane instanceof ExperimentalPlane;
    });
  }

  sortByMaxLoadCapacity() {
    return this.planes.sort((a, b) => a.maxLoadCapacity - b.maxLoadCapacity);
  }

  sortByMaxDistance() {
    return this.planes.sort((a, b) => a.distanceLimit - b.distanceLimit);
  }

  sortByMaxSpeed() {
    return this.planes.sort((a, b) => a.speedLimit - b.speedLimit);
  }
}
module.exports = {
  Airport,
};
