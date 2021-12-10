class Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
    this.basePlane = { model, maxSpeed, maxFlightDistance, maxLoadCapacity };
  }

  getModel() {
    return this.model;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }

  getMaxFlightDistance() {
    return this.maxFlightDistance;
  }

  getMinLoadCapacity() {
    return this.maxLoadCapacity;
  }
}

module.exports = { Plane };
