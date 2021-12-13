const { Plane } = require("./Plane");

class PassengerPlane extends Plane {
  constructor(specs) {
    super(specs);
    this.passengersCapacity = specs.passengersCapacity;
  }
  getPassengersCapacity() {
    return this.passengersCapacity;
  }
}

module.exports = {
  PassengerPlane,
};
