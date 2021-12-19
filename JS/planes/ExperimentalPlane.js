const { Plane } = require("./Plane");

class ExperimentalPlane extends Plane {
  constructor(specs) {
    super(specs);
    this.experimentalFeatures = specs.experimentalFeatures;
    this.classificationLevel = specs.classificationLevel;
  }
}

module.exports = {
  ExperimentalPlane,
};
