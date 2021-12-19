const { Plane } = require("./Plane");

class MilitaryPlane extends Plane {
  constructor(specs) {
    super(specs);
    this.militaryType = specs.militaryType;
  }
  militaryType() {
    return this.militaryType;
  }
}

module.exports = {
  MilitaryPlane,
};
