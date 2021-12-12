const { PassengerPlane } = require("./planes/PassengerPlane");
const { MilitaryPlane } = require("./planes/MilitaryPlane");
const { ExperimentalPlane } = require("./planes/ExperimentalPlane");
const { MILITARY_TYPE } = require("./models/MilitaryType");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((planes) => planes instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((planes) => planes instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.getPassengerPlanes();
    return passengerPlanes.sort(
      (a, b) => b.passengersCapacity - a.passengersCapacity
    )[0];
  }

  getTransportMilitaryPlanes() {
    let militaryPlanes = this.getMilitaryPlanes();
    return militaryPlanes.filter(
      (planes) => planes.getMilitaryType() == MILITARY_TYPE.TRANSPORT
    );
  }

  getBomberMilitaryPlanes() {
    let militaryPlanes = this.getMilitaryPlanes();
    return militaryPlanes.filter(
      (planes) => planes.getMilitaryType() === MILITARY_TYPE.BOMBER
    );
  }

  getExperimentalPlanes() {
    return this.planes.filter((planes) => planes instanceof ExperimentalPlane);
  }

  sortByMaxDistance() {
    this.planes.sort((a, b) =>
      a.getMaxFlightDistance() > b.getMaxFlightDistance() ? 1 : -1
    );
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed() ? 1 : -1));
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) =>
      a.getMinLoadCapacity() > b.getMinLoadCapacity() ? 1 : -1
    );
    return this;
  }
}

module.exports = { Airport };
