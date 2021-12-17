class Plane {
  constructor(properties) {
    this.model = properties.model;
    this.maxSpeed = properties.maxSpeed;
    this.maxFlightDistance = properties.maxFlightDistance;
    this.maxLoadCapacity = properties.maxLoadCapacity;
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
