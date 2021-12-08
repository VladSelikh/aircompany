class Plane {
    constructor(aircraftModel, speedLimit, distanceLimit, loadCapacity) {
        this.planeConstructor = {aircraftModel, speedLimit, speedLimit, distanceLimit, loadCapacity}
    };
    getAircraftModel() {
        return this.aircraftModel
    };
    getSpeedLimit() {
        return this.speedLimit
    };
    getDistanceLimit() {
        return this.distanceLimit
    };
    getLoadCapacity() {
        return this.loadCapacity
    };
};

module.exports = Plane;