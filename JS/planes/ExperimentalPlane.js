const { Plane } = require("./Plane");

class ExperimentalPlane extends Plane {
  constructor(properties) {
    super(properties);
    this.experimentalType = properties.experimentalType;
    this.classificationLevel = properties.classificationLevel;
  }

  getExperimentalType() {
    return this.experimentalType;
  }

  getClassificationLevel() {
    return this.classificationLevel;
  }
}

module.exports = { ExperimentalPlane };
