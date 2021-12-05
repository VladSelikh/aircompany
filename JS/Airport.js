const { PassengerPlane } = require('./planes/PassengerPlane');
const { MilitaryPlane } = require('./planes/MilitaryPlane');
const { ExperimentalPlane } = require('./planes/ExperimentalPlane');
const { MILITARY_TYPE } = require('./constants/militaryType');

class Airport {
  constructor(planes) {
    this.planes = planes;
}

     getPassengerPlanes() {
        var x = [];
        for (let p of this.planes) {
            if (p instanceof PassengerPlane) {x.push(p);}
        }
        return x;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
        if (militaryPlanes[i].getMilitaryType() == MILITARY_TYPE.TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i]);
        }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType()=== MILITARY_TYPE.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
    }

    getSortedPlanesByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this.planes;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    getSortedPlanesByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this.planes;
    }

    getSortedPlanesByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this.planes;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = {
  Airport
};
