const Plane = require('./plane');

class MilitaryPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
        this.militaryType = militaryType
    };
    militaryType() {
        return this.militaryType
    };
};

module.exports = MilitaryPlane;