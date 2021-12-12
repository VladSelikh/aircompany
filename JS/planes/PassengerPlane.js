const { Plane } = require("./Plane");

class PassengerPlane extends Plane {
  constructor(properties) {
    super(properties);
    this.passengersCapacity = properties.passengersCapacity;
  }

  getPassengersCapacity() {
    return this.passengersCapacity;
  }
}

module.exports = { PassengerPlane };
