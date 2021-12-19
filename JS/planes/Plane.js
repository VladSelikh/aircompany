class Plane {
  constructor(specs) {
    this.aircraftModel = specs.aircraftModel;
    this.speedLimit = specs.speedLimit;
    this.distanceLimit = specs.distanceLimit;
    this.loadCapacity = specs.loadCapacity;
  }
  getAircraftModel() {
    return this.aircraftModel;
  }
  getSpeedLimit() {
    return this.speedLimit;
  }
  getDistanceLimit() {
    return this.distanceLimit;
  }
  getLoadCapacity() {
    return this.loadCapacity;
  }
}

module.exports = { Plane };
