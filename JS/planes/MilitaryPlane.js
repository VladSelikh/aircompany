const { Plane } = require("./Plane");

class MilitaryPlane extends Plane {
  constructor(properties) {
    super(properties);
    this.militaryType = properties.militaryType;
  }

  getMilitaryType() {
    return this.militaryType;
  }
}

module.exports = { MilitaryPlane };
