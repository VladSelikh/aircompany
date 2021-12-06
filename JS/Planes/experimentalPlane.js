const Plane = require("./Plane");

class ExperimentalPlane extends Plane {
  constructor(
    model,
    maxSpeed,
    maxFlightDistance,
    maxLoadCapacity,
    experimentalType,
    classificationLevel
  ) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.maxFlightDistance = maxFlightDistance;
    this.maxLoadCapacity = maxLoadCapacity;
    this.experimentalType = experimentalType;
    this.classificationLevel = classificationLevel;
  }

  getExperimentalType() {
    return this.type;
  }

  getClassificationLevel() {
    return this.classificationLevel;
  }
}

module.exports = ExperimentalPlane;